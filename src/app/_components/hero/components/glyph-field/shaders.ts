/** Covers the whole canvas with a single triangle. */
export const VERTEX_SHADER = `#version 300 es
void main() {
  vec2 position = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
}
`;

/** Finds out which glyph each pixel belongs to, and how bright it should be. */
export const FRAGMENT_SHADER = `#version 300 es
precision highp float;
precision highp int;
precision highp sampler2DArray;

const float AMBIENT_ALPHA = 0.18;
const float AMBIENT_MIN_ALPHA = 0.055;
const float GLOW_ALPHA = 0.2;
const float POINTER_ALPHA = 0.45;
const float POINTER_RADIUS = 170.0;
const float WAVE_BLEND = 220.0;
const float WAVE_RING = 70.0;
const float SCRAMBLE_RATE = 0.06;
const float WAVE_SCRAMBLE_RATE = 24.0;

uniform sampler2D uAtlas;
uniform sampler2DArray uMasks;
uniform vec2 uResolution;
uniform vec2 uCell;
uniform float uScale;
uniform float uGlyphCount;
uniform float uTime;
uniform float uHue;
uniform float uLightness;
uniform vec3 uBox;
uniform vec3 uPointer;
uniform vec3 uWave;
uniform ivec2 uLayers;

out vec4 outColor;

float hash(vec2 value) {
  vec2 p = fract(value * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec3 hsl(float hue, float saturation, float lightness) {
  vec3 k = mod(vec3(0.0, 8.0, 4.0) + hue / 30.0, 12.0);
  float a = saturation * min(lightness, 1.0 - lightness);
  return lightness - a * clamp(min(k - 3.0, 9.0 - k), -1.0, 1.0);
}

float mask(ivec2 cell, int layer) {
  return layer < 0 ? 0.0 : texelFetch(uMasks, ivec3(cell, layer), 0).r;
}

void main() {
  vec2 pixel = vec2(
    gl_FragCoord.x,
    uResolution.y * uScale - gl_FragCoord.y
  ) / uScale;

  float reach = uPointer.z * exp(
    -pow(distance(pixel, uPointer.xy) / POINTER_RADIUS, 2.0)
  );

  vec2 cell = floor(pixel / uCell);
  vec2 local = fract(pixel / uCell);
  vec2 center = (cell + 0.5) * uCell;
  float seed = hash(cell);

  ivec2 lastCell = textureSize(uMasks, 0).xy - 1;
  ivec2 maskCell = clamp(ivec2(cell), ivec2(0), lastCell);

  float distanceToWave = distance(center, uWave.xy);
  float blend = clamp((uWave.z - distanceToWave) / WAVE_BLEND, 0.0, 1.0);
  float shape = mix(
    mask(maskCell, uLayers.x),
    mask(maskCell, uLayers.y),
    blend
  );

  float ring = exp(-pow((distanceToWave - uWave.z) / WAVE_RING, 2.0));
  float travelled = uWave.z / (uResolution.x + uResolution.y);

  float glyphSeed = ring > 0.5
    ? hash(cell + floor(uTime * WAVE_SCRAMBLE_RATE))
    : hash(cell + floor(uTime * SCRAMBLE_RATE + seed * 17.0));
  float glyph = floor(glyphSeed * uGlyphCount);
  float coverage = texture(
    uAtlas,
    vec2((glyph + local.x) / uGlyphCount, local.y)
  ).a;

  float drift = (sin(
    center.x * 0.008 + uTime * 0.5 + 2.0 * sin(center.y * 0.011 - uTime * 0.3)
  ) + 1.0) / 2.0;
  float twinkle = (sin(uTime * 3.0 + seed * 6.283) + 1.0) / 2.0;

  float glyphAlpha = coverage * clamp(
    (AMBIENT_MIN_ALPHA + AMBIENT_ALPHA * pow(drift, 3.0)) * (1.0 - shape) +
      shape * (0.7 + 0.3 * twinkle) +
      ring * 0.7 * max(1.0 - travelled, 0.0) +
      reach * POINTER_ALPHA,
    0.0,
    1.0
  );

  float glow = GLOW_ALPHA * max(1.0 - distance(pixel, uBox.xy) / uBox.z, 0.0);
  float alpha = 1.0 - (1.0 - glow) * (1.0 - glyphAlpha);

  float gradient = (pixel.x / uResolution.x + pixel.y / uResolution.y) / 2.0;
  vec3 color = hsl(uHue + gradient * 100.0, 0.85, uLightness);

  outColor = vec4(color * alpha, alpha);
}
`;
