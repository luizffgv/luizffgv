import LazyImage from "@components/lazy-image";

/** The logo for the website. */
export default function Logo(): JSX.Element {
  return (
    // rounded-full so the lazy image loading is also rounded like the logo
    <div className="jump-in h-48 w-48 overflow-hidden rounded-full">
      <LazyImage
        src="/android-chrome-192x192.png"
        alt="Logo do site"
      ></LazyImage>
    </div>
  );
}
