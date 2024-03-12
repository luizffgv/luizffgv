"use client";

import { useEffect, useId, useRef } from "react";
import styles from "./goo.module.css";

/**
 * A simulated bubble.
 */
export class Bubble {
  /**
   * X position.
   */
  x: number;

  /**
   * Y position.
   */
  y: number;

  /**
   * X velocity.
   */
  velX: number = 0;

  /**
   * Y velocity.
   */
  velY: number = 0;

  /**
   * Bubble radius.
   */
  radius: number;

  /**
   * Creates a new {@link Bubble}.
   *
   * @param x - X position.
   * @param y - Y position.
   * @param radius - Bubble radius.
   */
  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}

/**
 * Bubbles simulation.
 */
export class Bubbles {
  #element: HTMLCanvasElement;
  #context: CanvasRenderingContext2D;
  #prevTimestamp?: DOMHighResTimeStamp;
  #bubbles: Bubble[] = [];
  #speed: number;
  #colorGenerator: () => string;
  #stop: boolean = false;
  #animationId: number | null = null;

  /**
   * Creates a new {@link Bubbles}.
   *
   * @param element - Canvas element to use.
   * @param speed - Simulation speed.
   * @param color - Color of the bubbles, or function that returns a color.
   */
  constructor(
    element: HTMLCanvasElement,
    speed: number,
    color: string | (() => string)
  ) {
    this.#element = element;
    this.#speed = speed;

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

    const maxDimension = Math.max(width, height);

    if (this.#prevTimestamp == null) this.#prevTimestamp = timestamp;
    const deltaSeconds = (timestamp - this.#prevTimestamp) / 1000;

    const aliveBubbles: Bubble[] = [];

    this.#context.fillStyle = this.#colorGenerator();

    for (const bubble of this.#bubbles) {
      if (
        bubble.y - bubble.radius > this.#element.clientHeight ||
        bubble.y + bubble.radius < -5 ||
        bubble.x + bubble.radius < 0 ||
        bubble.x - bubble.radius > this.#element.clientWidth
      )
        continue;

      bubble.velX += (Math.random() - 0.5) * 2 * deltaSeconds;
      bubble.velY += (Math.random() - 0.5) * 2 * deltaSeconds;

      bubble.x += bubble.velX * this.#speed * maxDimension * deltaSeconds;
      bubble.y += bubble.velY * this.#speed * maxDimension * deltaSeconds;

      this.#context.beginPath();
      this.#context.arc(
        bubble.x,
        height - bubble.y,
        bubble.radius,
        0,
        2 * Math.PI
      );
      this.#context.fill();

      aliveBubbles.push(bubble);
    }

    const maxRadius = width / 10;
    const DESIRED_COUNT = 15;

    while (aliveBubbles.length < DESIRED_COUNT) {
      const radius = maxRadius * (Math.random() * 0.9 + 0.1);
      const fromBelow = Math.random() < 0.5;
      const spawnX = Math.random() * width;
      const spawnY = fromBelow ? -radius : this.#element.clientHeight + radius;
      const initialSpeedY = Math.random() * 0.5 * (fromBelow ? 1 : -1);
      const bubble = new Bubble(spawnX, spawnY, radius);
      bubble.velY = initialSpeedY;
      aliveBubbles.push(bubble);
    }

    this.#bubbles = aliveBubbles;

    this.#prevTimestamp = timestamp;

    this.#animationId = requestAnimationFrame(this.#step.bind(this));
  }

  start(): void {
    this.#animationId = requestAnimationFrame(this.#step.bind(this));
  }

  stop(): void {
    if (this.#animationId != null) cancelAnimationFrame(this.#animationId);
    this.#animationId = null;

    this.#bubbles = [];
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

    const bubbles = new Bubbles(canvasRef.current, 1 / 5, () =>
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
            <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
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
        style={{ filter: `url(#${filterId})` }}
      ></canvas>
    </>
  );
}
