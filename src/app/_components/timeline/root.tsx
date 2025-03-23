"use client";

import { useMemo } from "react";
import { TimelineContext } from "./_contexts/timeline";

type Props = {
  children: React.ReactNode;
};

export default function Root({ children }: Props): JSX.Element {
  const value = useMemo(() => ({ auxiliaryWidth: 128 }), []);

  return (
    <TimelineContext.Provider value={value}>
      <div className="flex-col">{children}</div>
    </TimelineContext.Provider>
  );
}
