"use client";

import { useScan } from "react-scan";

export default function ReactScan(): JSX.Element {
  useScan({
    trackUnnecessaryRenders: true,
  });

  return <></>;
}
