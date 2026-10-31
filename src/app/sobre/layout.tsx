import { Metadata } from "next";

import ptBr from "@/public/i18n/pt-BR/common.json";

export const metadata: Metadata = {
  title: ptBr.meta.about.title,
  description: ptBr.meta.about.description,
  alternates: {
    canonical: "/sobre",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return children;
}
