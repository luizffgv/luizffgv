import { FRAGMENT_SHADER, VERTEX_SHADER } from "./shaders";

const CELL_WIDTH = 11;
const CELL_HEIGHT = 16;
const FONT_SIZE = 14;
export const GLYPHS = String.raw`{}[]()<>/\=+-*&|;:.#$%01`;

const POINTER_EASING = 0.15;
const WAVE_SPEED = 900;

/** Pixel area taken by the icons. */
interface IconBox {
  size: number;
  x: number;
  y: number;
}

/** Expanding ring that morphs one icon into the next as it passes over them. */
interface Wave {
  from: number;
  start: number;
  to: number;
  x: number;
  y: number;
}

export interface Options {
  /** Hue the colors of the field are based on, in degrees. */
  hue: () => number;
  /** Icons drawn with the glyphs of the field. */
  icons: HTMLImageElement[];
  isDark: () => boolean;
  /** Draws a single still frame per change instead of animating. */
  isStatic: boolean;
}

/** Places the icons beside the text, or above it in narrow layouts. */
function placeIcons(width: number, height: number): IconBox {
  return width >= 1024
    ? {
        size: Math.min(height * 0.62, width * 0.4),
        x: width * 0.73,
        y: height * 0.5 + 30,
      }
    : {
        size: Math.min(width * 0.8, height * 0.4),
        x: width / 2,
        y: height * 0.3,
      };
}

function now(): number {
  return performance.now() / 1000;
}

/** Renders every glyph once for the shader to look them up. */
function createAtlas(fontFamily: string, scale: number): HTMLCanvasElement {
  const atlas = document.createElement("canvas");
  atlas.width = GLYPHS.length * CELL_WIDTH * scale;
  atlas.height = CELL_HEIGHT * scale;

  const context = atlas.getContext("2d");
  if (context != null) {
    context.scale(scale, scale);
    context.fillStyle = "white";
    context.font = `${FONT_SIZE}px ${fontFamily}`;
    context.textAlign = "center";
    context.textBaseline = "middle";

    for (let index = 0; index < GLYPHS.length; ++index) {
      context.fillText(
        GLYPHS.charAt(index),
        (index + 0.5) * CELL_WIDTH,
        CELL_HEIGHT / 2,
        CELL_WIDTH,
      );
    }
  }

  return atlas;
}

/** Computes how much of each cell of the grid is covered by an icon. */
function createMask(
  icon: HTMLImageElement,
  box: IconBox,
  columns: number,
  rows: number,
): Uint8Array {
  const sampler = document.createElement("canvas");
  sampler.width = columns;
  sampler.height = rows;

  const context = sampler.getContext("2d", { willReadFrequently: true });
  if (context == null) {
    return new Uint8Array(columns * rows);
  }

  context.drawImage(
    icon,
    (box.x - box.size / 2) / CELL_WIDTH,
    (box.y - box.size / 2) / CELL_HEIGHT,
    box.size / CELL_WIDTH,
    box.size / CELL_HEIGHT,
  );

  const { data } = context.getImageData(0, 0, columns, rows);

  return Uint8Array.from(
    { length: columns * rows },
    (_, index) => data[index * 4 + 3] ?? 0,
  );
}

function compileShader(
  gl: WebGL2RenderingContext,
  type: number,
  source: string,
): WebGLShader {
  const shader = gl.createShader(type);
  if (shader == null) {
    throw new Error("Couldn't create shader");
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!(gl.getShaderParameter(shader, gl.COMPILE_STATUS) as boolean)) {
    throw new Error(gl.getShaderInfoLog(shader) ?? "Couldn't compile shader");
  }

  return shader;
}

function createProgram(gl: WebGL2RenderingContext): WebGLProgram {
  const program = gl.createProgram();

  gl.attachShader(program, compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER));
  gl.attachShader(
    program,
    compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER),
  );
  gl.linkProgram(program);

  if (!(gl.getProgramParameter(program, gl.LINK_STATUS) as boolean)) {
    throw new Error(gl.getProgramInfoLog(program) ?? "Couldn't link program");
  }

  return program;
}

/** Creates a texture that can be sampled without mipmaps. */
function createTexture(
  gl: WebGL2RenderingContext,
  unit: number,
  target: number,
  filter: number,
): void {
  gl.activeTexture(gl.TEXTURE0 + unit);
  gl.bindTexture(target, gl.createTexture());
  gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, filter);
  gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, filter);
  gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}

/**
 * Animates a grid of code glyphs in a canvas. The icons emerge from the glyphs,
 * which also light up near the pointer. Does nothing if WebGL 2 is unavailable, as
 * the field is only decorative.
 * @returns Function that stops the animation.
 */
export function startField(
  canvas: HTMLCanvasElement,
  { hue, icons, isDark, isStatic }: Options,
): () => void {
  const gl = canvas.getContext("webgl2", { antialias: false });
  const container = canvas.parentElement;
  if (gl == null || container == null) {
    return () => {};
  }

  const program = createProgram(gl);
  gl.useProgram(program);

  const uniform = (name: string): WebGLUniformLocation | null =>
    gl.getUniformLocation(program, name);

  const uniforms = {
    box: uniform("uBox"),
    cell: uniform("uCell"),
    hue: uniform("uHue"),
    layers: uniform("uLayers"),
    lightness: uniform("uLightness"),
    pointer: uniform("uPointer"),
    resolution: uniform("uResolution"),
    scale: uniform("uScale"),
    time: uniform("uTime"),
    wave: uniform("uWave"),
  };

  gl.uniform1i(uniform("uAtlas"), 0);
  gl.uniform1i(uniform("uMasks"), 1);
  gl.uniform1f(uniform("uGlyphCount"), GLYPHS.length);
  gl.uniform2f(uniforms.cell, CELL_WIDTH, CELL_HEIGHT);

  gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
  createTexture(gl, 0, gl.TEXTURE_2D, gl.LINEAR);
  createTexture(gl, 1, gl.TEXTURE_2D_ARRAY, gl.NEAREST);

  const controller = new AbortController();
  const { signal } = controller;
  const { fontFamily } = getComputedStyle(canvas);

  let width = 0;
  let height = 0;
  let box: IconBox = { size: 0, x: 0, y: 0 };

  let icon = 0;
  let wave: Wave | undefined;

  const pointer = { strength: 0, x: 0, y: 0 };
  const pointerTarget = { active: false, x: 0, y: 0 };

  let isVisible = true;
  let frameId = 0;

  const draw = (t: number): void => {
    if (wave != null && (t - wave.start) * WAVE_SPEED > width + height) {
      icon = wave.to;
      wave = undefined;
    }

    pointer.strength +=
      (Number(pointerTarget.active) - pointer.strength) * POINTER_EASING;
    pointer.x += (pointerTarget.x - pointer.x) * POINTER_EASING;
    pointer.y += (pointerTarget.y - pointer.y) * POINTER_EASING;

    gl.uniform1f(uniforms.time, t);
    gl.uniform1f(uniforms.hue, hue() + window.scrollY / 4);
    gl.uniform1f(uniforms.lightness, isDark() ? 0.68 : 0.42);
    gl.uniform3f(uniforms.pointer, pointer.x, pointer.y, pointer.strength);

    if (wave == null) {
      gl.uniform2i(uniforms.layers, icon, icon);
      gl.uniform3f(uniforms.wave, 0, 0, width + height);
    } else {
      gl.uniform2i(uniforms.layers, wave.from, wave.to);
      gl.uniform3f(
        uniforms.wave,
        wave.x,
        wave.y,
        (t - wave.start) * WAVE_SPEED,
      );
    }

    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  const loop = (): void => {
    frameId = isVisible ? requestAnimationFrame(loop) : 0;
    draw(now());
  };

  const requestDraw = (): void => {
    if (isStatic) {
      draw(0);
    } else if (frameId === 0 && isVisible) {
      frameId = requestAnimationFrame(loop);
    }
  };

  const resize = (): void => {
    const rectangle = canvas.getBoundingClientRect();
    const scale = Math.min(window.devicePixelRatio, 2);

    if (rectangle.width === 0 || rectangle.height === 0) {
      return;
    }

    width = rectangle.width;
    height = rectangle.height;
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    box = placeIcons(width, height);

    const columns = Math.ceil(width / CELL_WIDTH);
    const rows = Math.ceil(height / CELL_HEIGHT);
    const masks = new Uint8Array(columns * rows * icons.length);
    for (const [index, image] of icons.entries()) {
      masks.set(createMask(image, box, columns, rows), index * columns * rows);
    }

    gl.activeTexture(gl.TEXTURE0);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      createAtlas(fontFamily, scale),
    );

    gl.activeTexture(gl.TEXTURE1);
    gl.texImage3D(
      gl.TEXTURE_2D_ARRAY,
      0,
      gl.R8,
      columns,
      rows,
      icons.length,
      0,
      gl.RED,
      gl.UNSIGNED_BYTE,
      masks,
    );

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform1f(uniforms.scale, canvas.width / width);
    gl.uniform2f(uniforms.resolution, width, height);
    gl.uniform3f(uniforms.box, box.x, box.y, box.size);

    requestDraw();
  };

  const advanceIcon = (x: number, y: number): void => {
    const from = wave?.to ?? icon;
    const to = (from + 1) % icons.length;

    if (isStatic) {
      icon = to;
    } else {
      wave = { from, start: now(), to, x, y };
    }

    requestDraw();
  };

  container.addEventListener(
    "click",
    (event) => {
      if (
        event.target instanceof Element &&
        event.target.closest("a, button")
      ) {
        return;
      }

      const rectangle = canvas.getBoundingClientRect();
      advanceIcon(
        event.clientX - rectangle.left,
        event.clientY - rectangle.top,
      );
    },
    { signal },
  );

  if (!isStatic) {
    window.addEventListener(
      "pointermove",
      (event) => {
        const rectangle = canvas.getBoundingClientRect();
        pointerTarget.active = event.pointerType === "mouse";
        pointerTarget.x = event.clientX - rectangle.left;
        pointerTarget.y = event.clientY - rectangle.top;
      },
      { signal },
    );
    document.documentElement.addEventListener(
      "pointerleave",
      () => {
        pointerTarget.active = false;
      },
      { signal },
    );
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);

  const intersectionObserver = new IntersectionObserver((entries) => {
    isVisible = entries.at(-1)?.isIntersecting ?? true;
    requestDraw();
  });
  intersectionObserver.observe(canvas);

  const themeObserver = new MutationObserver(requestDraw);
  themeObserver.observe(document.documentElement, {
    attributeFilter: ["class"],
  });

  resize();

  if (!isStatic) {
    wave = { from: -1, start: now(), to: 0, x: box.x, y: box.y };
    requestDraw();
  }

  return () => {
    controller.abort();
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    themeObserver.disconnect();
    cancelAnimationFrame(frameId);
    frameId = 0;
    isVisible = false;
  };
}
