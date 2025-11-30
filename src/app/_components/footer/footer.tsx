"use client";

import { HeartIcon } from "lucide-react";
import { JSX } from "react";
import { Trans, useTranslation } from "react-i18next";

export default function Footer(): JSX.Element {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col items-center gap-2 bg-bg-close p-8 text-center dark:bg-bg-close-dark">
      <Trans
        className="max-w-prose text-lg"
        components={{
          Heart: (
            <HeartIcon className="inline h-4 w-4 fill-red-500 stroke-red-500" />
          ),
        }}
        i18nKey="footer.content"
        parent="p"
        t={t}
      />
    </footer>
  );
}
