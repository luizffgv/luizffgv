import Button from "@/app/_components/button";
import { PaintbrushIcon } from "lucide-react";

const PRESET_PRIMARY_COLORS = [
  "59, 130, 246",
  "147, 51, 234",
  "239, 68, 68",
  "34, 197, 94",
  "245, 158, 11",
];

function pickRandom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function handleClick(): void {
  const currentColor =
    document.documentElement.style.getPropertyValue("--color-primary");

  let newColor = pickRandom(PRESET_PRIMARY_COLORS);
  while (newColor === currentColor) {
    newColor = pickRandom(PRESET_PRIMARY_COLORS);
  }

  document.documentElement.style.setProperty("--color-primary", newColor);
  localStorage.setItem("theme-primary", newColor);
}

export default function ColorChanger(): JSX.Element {
  return (
    <Button onClick={handleClick}>
      <PaintbrushIcon />
      Mudar cores
    </Button>
  );
}
