import Button from "./button";

export default function Footer() {
  return (
    <footer className="color-in flex flex-col items-center gap-2 bg-primary p-4 text-fg-on-primary">
      <p>
        Feito por <strong>Luiz Fernando F. G. Valle</strong> utilizando{" "}
        <strong>Next.js</strong> e <strong>Tailwind CSS</strong>.
      </p>
      <p>
        Hospedado com <strong>GitHub Pages</strong>.
      </p>
      <Button href="https://github.com/luizffgv/luizffgv/tree/website">
        <span className="material-symbols-outlined" aria-hidden translate="no">
          visibility
        </span>
        Veja o código-fonte
      </Button>
    </footer>
  );
}
