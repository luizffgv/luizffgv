import Button from "@components/button";
import { EyeIcon } from "lucide-react";

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-col items-center gap-2 bg-primary p-4 text-center text-fg-on-primary">
      <p>
        Feito por <strong>Luiz Fernando F. G. Valle</strong> utilizando{" "}
        <strong>Next.js</strong> e <strong>Tailwind CSS</strong>.
      </p>
      <p>
        Hospedado com <strong>GitHub Pages</strong>.
      </p>
      <Button href="https://github.com/luizffgv/luizffgv/tree/website">
        <EyeIcon />
        Veja o código-fonte
      </Button>
    </footer>
  );
}
