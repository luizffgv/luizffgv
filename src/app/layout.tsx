import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter, Share_Tech_Mono } from "next/font/google";
import { JSX, Suspense } from "react";

import ptBr from "@/public/i18n/pt-BR/common.json";

import ClickSpark from "./_components/click-spark";
import DocumentLanguage from "./_components/document-language";
import Footer from "./_components/footer";
import Header from "./_components/header";
import InitI18Next from "./_components/init-i18next";
import { ReactBitsNoise } from "./_components/react-bits-noise";
import "./globals.css";

// Development tool that shouldn't reach the production bundle
const ReactScan =
  process.env.NODE_ENV === "development"
    ? dynamic(() => import("./_components/react-scan"))
    : (): null => null;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const shareTechMono = Share_Tech_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luizf.dev"),
  title: ptBr.meta.home.title,
  description: ptBr.meta.home.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "luizf.dev",
    images: ["/banner.png"],
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
      className={`${inter.variable} ${shareTechMono.variable} scroll-smooth`}
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
        <InitI18Next>
          <ClickSpark>
            <ReactScan />
            <div className="isolate z-[1]">
              <Suspense>
                <Header />
              </Suspense>
              <div className="min-h-screen">{children}</div>
              <Suspense>
                <Footer />
              </Suspense>
            </div>
            <div className="pointer-events-none fixed inset-0 opacity-50 dark:opacity-25">
              <ReactBitsNoise />
            </div>
          </ClickSpark>
          {/* Last so it changes the language after the rest has hydrated */}
          <Suspense>
            <DocumentLanguage />
          </Suspense>
        </InitI18Next>
      </body>
    </html>
  );
}
