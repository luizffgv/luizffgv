"use client";

import { JSX } from "react";
import { useScan } from "react-scan";

export default function ReactScan(): JSX.Element {
  useScan({
    // Detection not working correctly
    dangerouslyForceRunInProduction: true,
  });

  return <></>;
}
