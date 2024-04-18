import LazyImage from "./lazy-image";

/** The logo for the website. */
export default function Logo() {
  return (
    // rounded-full so the lazy image loading is also rounded like the logo
    <div className="jump-in h-48 w-48 overflow-hidden rounded-full drop-shadow-[0_0_15px_theme(colors.primary)]">
      <LazyImage
        src="/android-chrome-192x192.png"
        alt="Logo do site"
      ></LazyImage>
    </div>
  );
}
