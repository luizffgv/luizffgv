"use client";

import { useHeadroom } from "@mantine/hooks";

import HeaderImpl from "./header-impl";

export default function Header(): JSX.Element {
  const pinned = useHeadroom();

  return <HeaderImpl isVisible={pinned} />;
}
