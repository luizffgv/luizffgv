import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";
import CursorGlow from "./_components/cursor-glow";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "luizf.dev",
  description: "Veja sobre mim aqui em meu site pessoal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${quicksand.className} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/initial-theme-applier.js"></script>
      </head>
      <body className="flex flex-col bg-bg text-fg transition-colors dark:bg-bg-dark dark:text-fg-dark">
        <CursorGlow></CursorGlow>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
