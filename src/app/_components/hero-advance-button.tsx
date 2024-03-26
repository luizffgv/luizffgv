"use client";

import Button from "./button";

export default function HeroAdvanceButton() {
  return (
    <Button
      onClick={() => {
        document.documentElement.scrollBy(0, innerHeight);
      }}
      aria-label="Avançar"
    >
      <span
        className="material-symbols-outlined scale-[2]"
        aria-hidden
        translate="no"
      >
        expand_more
      </span>
    </Button>
  );
}
