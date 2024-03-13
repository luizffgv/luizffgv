import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.scss";
import styles from "./layout.module.scss";
import ThemeSwitcher from "./_components/theme-switcher";
import Goo from "./_components/goo";

const inter = Inter({ subsets: ["latin"], variable: "--font-normal" });
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "luizf.dev",
  description: "Veja sobre mim aqui em meu site pessoal.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={[styles.root, inter.variable, archivoBlack.variable].join(" ")}
      suppressHydrationWarning
    >
      <head>
        {/* eslint-disable-next-line @next/next/google-font-display */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=block"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/initial-theme-applier.js"></script>
      </head>
      <body className={`${styles.body} raiar flex-col gap-4x`}>
        <Goo></Goo>
        <header className="fullwidth raiar justify-content-center">
          <ThemeSwitcher></ThemeSwitcher>
        </header>
        {children}
        <div
          className={`${styles["modal-container"]} raiar gap flex-col align-items-center justify-content-safe-center`}
        >
          {modal}
        </div>
      </body>
    </html>
  );
}
