export const Variant = ["primary", "danger"] as const;
export type Variant = (typeof Variant)[number];
