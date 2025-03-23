import { createContext, useContext } from "react";

export type TimelineContextType = {
  auxiliaryWidth: number;
};

export const TimelineContext = createContext<TimelineContextType>({
  auxiliaryWidth: 96,
});

export function useTimelineContext(): TimelineContextType {
  return useContext(TimelineContext);
}
