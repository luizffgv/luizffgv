export const Variant = ["primary", "solid", "outline", "danger"] as const;
export type Variant = (typeof Variant)[number];
