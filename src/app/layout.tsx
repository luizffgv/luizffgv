import type { Metadata } from "next";
import { Bree_Serif, Share_Tech_Mono } from "next/font/google";
import { JSX } from "react";

import ClickSpark from "./_components/click-spark";
import Footer from "./_components/footer";
import Header from "./_components/header";
import { ReactBitsNoise } from "./_components/react-bits-noise";
import ReactScan from "./_components/react-scan";
import "./globals.css";

const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bree-serif",
});

const shareTechMono = Share_Tech_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
});

export const metadata: Metadata = {
  title: "Sobre mim",
  description: "Veja sobre mim aqui em meu site pessoal.",
  openGraph: {
    type: "website",
    images: ["https://luizf.dev/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html
      lang="pt-BR"
      className={`${breeSerif.variable} ${shareTechMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3b82f6" />
        <meta name="msapplication-TileColor" content="#f8fafc" />
        <meta name="theme-color" content="#f8fafc"></meta>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
const isDark = localStorage.getItem("theme-dark");
const deviceIsDark = matchMedia("(prefers-color-scheme: dark)").matches;
if (isDark === "true" || (isDark == undefined && deviceIsDark))
  document.documentElement.classList.add("dark");
`,
          }}
        ></script>
      </head>
      <body className="flex flex-col bg-bg text-fg dark:bg-bg-dark dark:text-fg-dark">
        <ClickSpark>
          <ReactScan />
          <div className="isolate z-[1]">
            <Header></Header>
            <div className="min-h-screen">{children}</div>
            <Footer></Footer>
          </div>
          <div className="pointer-events-none fixed inset-0 opacity-50 dark:opacity-25">
            <ReactBitsNoise />
          </div>
        </ClickSpark>
      </body>
    </html>
  );
}
