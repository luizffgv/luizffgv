"use client";

import { JSX } from "react";
import { useScan } from "react-scan";

export default function ReactScan(): JSX.Element {
  useScan({
    // Detection not working correctly
    dangerouslyForceRunInProduction: process.env.NODE_ENV === "development",
    trackUnnecessaryRenders: true,
  });

  return <></>;
}
