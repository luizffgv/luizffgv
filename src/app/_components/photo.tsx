export default function Photo() {
  return (
    <div className="jump-in h-48 w-48 overflow-hidden rounded-full border-4 border-primary bg-bg-close drop-shadow-[0_0_15px_theme(colors.primary)] dark:bg-bg-close-dark">
      <img
        className="peer transition-transform hover:scale-110"
        src="/my-photo-no-bg.webp"
        alt="Minha foto"
        aria-hidden
      ></img>
      {/* We duplicate the image so the blur effect doesn´t have a visible border */}
      <img
        className="absolute inset-0 z-[-1]"
        src="/my-photo.webp"
        alt="Minha foto"
        aria-hidden
      ></img>
      <img
        className="absolute inset-0 z-[-1] transition peer-hover:blur-sm"
        src="/my-photo.webp"
        alt="Minha foto"
      ></img>
    </div>
  );
}
