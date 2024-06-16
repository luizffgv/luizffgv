import "./globals.css";
import CursorGlow from "./_components/cursor-glow";
import Footer from "./_components/footer";
import Goo from "./_components/goo";
import Header from "./_components/header";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import RotatingColors from "./_components/rotating-colors";

const GRADIENT_COLORS = [
  "#08f",
  "#00d9ff",
  "#a1ffec",
  "#4c00ff",
  "#4326ab",
  "#09f",
];

const quicksand = Quicksand({ subsets: ["latin"] });

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
      className={`${quicksand.className} scroll-smooth`}
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
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
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

const primary = localStorage.getItem("theme-primary");
if (primary)
  document.documentElement.style.setProperty("--color-primary", primary);
`,
          }}
        ></script>
      </head>
      <body className="flex flex-col bg-bg text-fg transition-colors dark:bg-bg-dark dark:text-fg-dark">
        <div className="fixed top-0 h-screen w-full text-primary opacity-50">
          <Goo></Goo>
        </div>
        <div className="fixed left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-15 dark:opacity-5">
          <RotatingColors colors={GRADIENT_COLORS}></RotatingColors>
        </div>
        <CursorGlow></CursorGlow>
        <div className="isolate z-[1]">
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
