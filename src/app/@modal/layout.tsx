"use client";

import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();

  return (
    <>
      <button type="button" onClick={() => router.back()}>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="raiar-card">{children}</div>
    </>
  );
}
