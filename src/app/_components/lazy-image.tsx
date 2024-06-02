"use client";

import { useEffect, useRef, useState } from "react";

export interface Props {
  /** Source of the image. */
  src: string;
  /** Alt text for the image. */
  alt: string;
}

/**
 * A lazy-loaded image that loads when it enters the viewport.
 * It has `h-full` and `w-full`.
 */
export default function LazyImage({ src, alt }: Props) {
  const [loaded, setLoaded] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  // Internal image element used to load the image
  const temporaryImage = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    temporaryImage.current = new Image();
    temporaryImage.current.addEventListener("load", () => {
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    setLoaded(false);

    // Enable lazy loading if IntersectionObserver is available
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
          if (temporaryImage.current == null) {
            console.error("image.current is null");
            return;
          }

          temporaryImage.current.src = src;

          observer.disconnect();
        }
      });

      if (container.current == null) {
        console.error("ref.current is null");
      } else {
        observer.observe(container.current);
      }

      return () => {
        observer.disconnect();
      };
    } else {
      if (temporaryImage.current == null) {
        console.error("image.current is null");
        return;
      }

      temporaryImage.current.src = src;
    }
  }, [src]);

  return (
    <div className="relative h-full w-full" ref={container}>
      <div
        className={`absolute inset-0 flex items-center justify-center rounded-3xl bg-bg-close has-[~_img]:hidden dark:bg-bg-close-dark`}
      >
        <svg
          viewBox="0 0 1 1"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 animate-spin stroke-primary"
        >
          <circle
            cx="0.5"
            cy="0.5"
            fill="none"
            r="0.25"
            strokeWidth="0.1"
            strokeDasharray="1"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {loaded ? <img src={src} alt={alt} className="h-full w-full" /> : <></>}
    </div>
  );
}
