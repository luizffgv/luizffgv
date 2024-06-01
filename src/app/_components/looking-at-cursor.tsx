"use client";

import { useEffect, useRef } from "react";

export interface Props {
  children: React.ReactNode;
}

/** Makes the children rotate towards the cursor. */
export default function LookingAtCursor({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef == null) {
      console.error("ref.current is null");
      return;
    }

    let visible = true;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(currentRef);

    const handleMouseMove = (event: MouseEvent) => {
      if (!visible) return;

      const { top, left, width, height } = currentRef.getBoundingClientRect();
      const center = { x: left + width / 2, y: top + height / 2 };
      const offset = {
        x: event.clientX - center.x,
        y: event.clientY - center.y,
      };
      const offsetDeg = {
        x: (-offset.y / innerHeight) * 45,
        y: (offset.x / innerWidth) * 45,
        z: (offset.x / innerWidth) * 15,
      };

      currentRef.style.transform = `rotateX(${offsetDeg.x}deg) rotateY(${offsetDeg.y}deg) rotateZ(${offsetDeg.z}deg)`;
    };

    addEventListener("mousemove", handleMouseMove);

    return () => {
      removeEventListener("mousemove", handleMouseMove);
      currentRef.style.transform = "none";
      observer.disconnect();
    };
  });

  return (
    <div className="[perspective:100vmax]">
      <div
        ref={ref}
        className="transition-all ease-linear [transform-style:preserve-3d]"
      >
        {children}
      </div>
    </div>
  );
}
