"use client";

import { ArrowDownIcon } from "lucide-react";
import Button from "@components/button";

export default function HeroAdvanceButton(): JSX.Element {
  return (
    <Button
      onClick={() => {
        document.documentElement.scrollBy(0, innerHeight);
      }}
      aria-label="Avançar"
    >
      <ArrowDownIcon />
    </Button>
  );
}
