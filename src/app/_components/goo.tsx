"use client";

import { useEffect, useId, useRef } from "react";
import styles from "./goo.module.scss";

/** A particle. */
abstract class Particle {
  /** Particle X position. */
  x: number;
  /** Particle Y position. */
  y: number;
  /** Particle X velocity . */
  velX: number;
  /** Particle Y velocity. */
  velY: number;

  /**
   * Creates a new particle.
   *
   * @param x - X position.
   * @param y - Y position.
   * @param velX X velocity.
   * @param velY Y velocity.
   */
  protected constructor(
    x: number,
    y: number,
    velX: number = 0,
    velY: number = 0
  ) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }

  /**
   * Whether the particle is possibly in the specified rectangle.
   *
   * @param x - Rectangle X coordinate.
   * @param y - Rectangle Y coordinate.
   * @param w - Rectangle width.
   * @param h - Rectangle height.
   */
  abstract isMaybeInRect(x: number, y: number, w: number, h: number): boolean;

  /**
   * Forwards the particle simulation.
   *
   * @param seconds - Number of seconds passed.
   */
  update(seconds: number) {
    this.x += this.velX * seconds;
    this.y += this.velY * seconds;
  }

  /**
   * Draws the particle.
   *
   * @param ctx - 2D context to draw in.
   */
  abstract draw(ctx: CanvasRenderingContext2D): void;
}

/** A particle that rotates in the Z axis. */
abstract class RotatingParticle extends Particle {
  /** Particle rotation in radians. */
  rotZ: number;

  /** Particle angular velocity in radians/second. */
  velAngZ: number = 0;

  /**
   * Creates a new particle.
   *
   * @param x - X position.
   * @param y - Y position.
   * @param rotZ - Z rotation.
   * @param velX X velocity.
   * @param velY Y velocity.
   * @param velAngZ Z angular velocity in radians/second.
   */
  protected constructor(
    x: number,
    y: number,
    rotZ: number = 0,
    velX: number = 0,
    velY: number = 0,
    velAngZ: number = 0
  ) {
    super(x, y, velX, velY);

    this.rotZ = rotZ;
    this.velAngZ = velAngZ;
  }

  override update(seconds: number) {
    super.update(seconds);

    this.rotZ += this.velAngZ * seconds;
  }
}

/**
 * A circle particle.
 */
export class CircleParticle extends Particle {
  /**
   * Circle radius.
   */
  radius: number;

  /**
   * Creates a new {@link CircleParticle}.
   *
   * @param x - X position.
   * @param y - Y position.
   * @param radius - Circle radius.
   */
  constructor(x: number, y: number, radius: number) {
    super(x, y);

    this.radius = radius;
  }

  override isMaybeInRect(x: number, y: number, w: number, h: number) {
    return !(
      this.y - this.radius > y + h ||
      this.y + this.radius < y ||
      this.x + this.radius < x ||
      this.x - this.radius > x + w
    );
  }

  override draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}

/**
 * A square particle.
 */
export class SquareParticle extends RotatingParticle {
  /** Size of a side of the square. */
  size: number;

  /**
   * Creates a new {@link SquareParticle}.
   *
   * @param x - X position.
   * @param y - Y position.
   * @param size - Square side size.
   * @param rotation - Rotation in radians.
   */
  constructor(x: number, y: number, size: number, rotZ: number = 0) {
    super(x, y, rotZ);

    this.size = size;
  }

  override isMaybeInRect(x: number, y: number, w: number, h: number) {
    const radius = this.size * 1.41421356237; /* sqrt(2) */

    return !(
      this.y - radius > y + h ||
      this.y + radius < y ||
      this.x + radius < x ||
      this.x - radius > x + w
    );
  }

  override draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotZ);
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

/**
 * Bubbles simulation.
 */
export class Bubbles {
  #element: HTMLCanvasElement;
  #context: CanvasRenderingContext2D;
  #prevTimestamp?: DOMHighResTimeStamp;
  #particles: Particle[] = [];
  #colorGenerator: () => string;
  #animationId: number | null = null;

  /**
   * Creates a new {@link Bubbles}.
   *
   * @param element - Canvas element to use.
   * @param color - Color of the bubbles, or function that returns a color.
   */
  constructor(element: HTMLCanvasElement, color: string | (() => string)) {
    this.#element = element;

    this.#colorGenerator = typeof color == "string" ? () => color : color;

    let ctx = this.#element.getContext("2d");
    if (ctx == null) throw TypeError("Couldn't get 2D canvas context.");
    this.#context = ctx;
  }

  #step(timestamp: DOMHighResTimeStamp): void {
    const width = this.#element.clientWidth;
    const height = this.#element.clientHeight;
    this.#element.width = width;
    this.#element.height = height;

    if (this.#prevTimestamp == null) this.#prevTimestamp = timestamp;
    const deltaSeconds = (timestamp - this.#prevTimestamp) / 1000;

    const aliveParticles: Particle[] = [];

    this.#context.fillStyle = this.#colorGenerator();
    this.#context.shadowColor = this.#context.fillStyle;
    this.#context.shadowBlur = 25;

    for (const particle of this.#particles) {
      if (!particle.isMaybeInRect(0, 0, width, height)) continue;

      particle.velX += (Math.random() - 0.5) * 2 * deltaSeconds * 250;
      particle.velY += (Math.random() - 0.5) * 2 * deltaSeconds * 250;

      particle.update(deltaSeconds);

      particle.draw(this.#context);

      aliveParticles.push(particle);
    }

    const maxRadius = width / 10;
    const DESIRED_COUNT = 15;

    while (aliveParticles.length < DESIRED_COUNT) {
      const radius = maxRadius * (Math.random() * 0.9 + 0.1);
      const fromAbove = Math.random() < 0.5;
      const spawnX = Math.random() * width;
      const spawnY = fromAbove ? -radius : this.#element.clientHeight + radius;
      const initialSpeedY = Math.random() * 50 * (fromAbove ? 1 : -1);

      let particle;
      if (Math.random() < 0.5) {
        particle = new CircleParticle(spawnX, spawnY, radius);
      } else {
        particle = new SquareParticle(spawnX, spawnY, radius);
        particle.velAngZ = (Math.random() - 0.5) * 2;
      }

      particle.velY = initialSpeedY;
      aliveParticles.push(particle);
    }

    this.#particles = aliveParticles;

    this.#prevTimestamp = timestamp;

    this.#animationId = requestAnimationFrame(this.#step.bind(this));
  }

  start(): void {
    this.#animationId = requestAnimationFrame(this.#step.bind(this));
  }

  stop(): void {
    if (this.#animationId != null) cancelAnimationFrame(this.#animationId);
    this.#animationId = null;

    this.#particles = [];
  }
}

/**
 * Adds a bubbles simulation to the page.
 *
 * @remarks
 * Should only be called once per page.
 */
export function addToPage(): void {}

export default function Goo() {
  const filterId = useId();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current == null) {
      console.error("canvasRef is null");
      return;
    }

    const bubbles = new Bubbles(canvasRef.current, () =>
      getComputedStyle(document.body).getPropertyValue("--raiar-color-primary")
    );
    bubbles.start();

    return () => bubbles.stop();
  }, []);

  return (
    <>
      <svg className={styles.filter} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={filterId}>
            <feColorMatrix
              in="goo"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -10"
            />
          </filter>
        </defs>
      </svg>
      <canvas
        className={styles.canvas}
        ref={canvasRef}
        style={{
          filter: `url(#${filterId}) drop-shadow(0 0 15px var(--raiar-color-primary))`,
        }}
      ></canvas>
    </>
  );
}
