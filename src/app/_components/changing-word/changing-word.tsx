"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  words: string[];
};

export default function ChangingWord({ words }: Props): JSX.Element {
  const [step, setStep] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollerRef.current == null) {
      return;
    }

    const scrollAnimation = new Animation(
      new KeyframeEffect(
        scrollerRef.current,
        {
          translate: ["0 calc(-25% - 0.25rem)", `0 calc(-50% - 0.25rem)`],
        },
        {
          duration: 250,
          fill: "forwards",
        },
      ),
    );

    const disappearAnimation = new Animation(
      new KeyframeEffect(
        scrollerRef.current.children[0],
        {
          opacity: [1 / 3, 0],
          scale: [0.8, 0.6],
          translate: ["-2.5px", "-5px"],
        },
        {
          duration: 250,
          fill: "forwards",
        },
      ),
    );

    const appearAnimation = new Animation(
      new KeyframeEffect(
        scrollerRef.current.children[3],
        {
          opacity: [0, 1 / 3],
          scale: [0.6, 0.8],
          translate: ["-5px", "-2.5px"],
        },
        {
          duration: 250,
          fill: "forwards",
        },
      ),
    );

    const almostDisappearingAnimation = new Animation(
      new KeyframeEffect(
        scrollerRef.current.children[1],
        {
          opacity: [1, 1 / 3],
          scale: [1, 0.8],
          translate: ["0", "-2.5px"],
        },
        {
          duration: 250,
          fill: "forwards",
        },
      ),
    );

    const finishAppearingAnimation = new Animation(
      new KeyframeEffect(
        scrollerRef.current.children[2],
        {
          opacity: [1 / 3, 1],
          scale: [0.8, 1],
          translate: ["-2.5px", "0px"],
        },
        {
          duration: 250,
          fill: "forwards",
        },
      ),
    );

    const animations = [
      scrollAnimation,
      disappearAnimation,
      almostDisappearingAnimation,
      appearAnimation,
      finishAppearingAnimation,
    ];

    for (const animation of animations) {
      animation.play();
    }

    scrollAnimation.addEventListener("finish", () => {
      setTimeout(() => {
        setStep((s) => s + 1);
        setCurrentWordIndex((cwi) => (cwi + 1) % words.length);
      }, 1e3);
    });

    return () => {
      for (const animation of animations) {
        animation.cancel();
      }
    };
  }, [step]);

  const visibleWords = useMemo(
    () => [
      words.at(currentWordIndex - 1),
      words.at(currentWordIndex),
      words.at((currentWordIndex + 1) % words.length),
      words.at((currentWordIndex + 2) % words.length),
    ],
    [currentWordIndex, words],
  );

  return (
    <span className="relative inline-grid text-nowrap [grid-template-areas:stack] [line-height:1em]">
      {words.map((word, index) => (
        <span key={index} className="invisible [grid-area:stack]">
          {word}
        </span>
      ))}
      <span
        ref={scrollerRef}
        className="top- absolute left-0 flex flex-col items-start gap-2 [grid-area:stack]"
      >
        {visibleWords.map((word, index) => (
          <span
            key={index}
            className="origin-left"
            style={{
              opacity: index === 0 ? 1 : 0,
            }}
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}
