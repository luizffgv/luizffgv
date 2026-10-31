import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://luizf.dev" },
    { url: "https://luizf.dev/projetos" },
    { url: "https://luizf.dev/sobre" },
  ];
}
