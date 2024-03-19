import type { Metadata } from "next";
import { Archivo_Black, Inter, Space_Mono } from "next/font/google";
import "./globals.scss";
import styles from "./layout.module.scss";
import ThemeSwitcher from "./_components/theme-switcher";
import Goo from "./_components/goo";
import Header from "./_components/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-normal" });
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-code",
});

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
      className={[
        styles.root,
        inter.variable,
        archivoBlack.variable,
        spaceMono.variable,
      ].join(" ")}
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
      <body>
        <Goo></Goo>
        <Header></Header>
        <div className={`${styles.content} raiar flex-col gap-4x`}>
          <div className="fullwidth raiar justify-content-center">
            <ThemeSwitcher></ThemeSwitcher>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
