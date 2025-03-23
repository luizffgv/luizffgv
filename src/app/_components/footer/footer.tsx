import { HeartIcon } from "lucide-react";

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-col items-center gap-2 bg-bg-close p-8 text-center dark:bg-bg-close-dark">
      <p className="max-w-prose text-lg">
        Feito com
        <HeartIcon className="ml-2 inline h-4 w-4 fill-red-500 stroke-red-500" />
        , mais de 200 commits, vários redesigns e incontáveis retornos ao longo
        dos anos para deixar sua experiência melhor.
      </p>
    </footer>
  );
}
