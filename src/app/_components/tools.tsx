import Tool, { Props as ToolProps } from "./tool";

const TOOLS = [
  {
    name: "Next.js",
    image: "https://cdn.simpleicons.org/nextdotjs",
    details: "Para static exports",
  },
  {
    name: "Node.js",
    image: "https://cdn.simpleicons.org/nodedotjs",
    details: "E execução async",
  },
  {
    name: "TypeScript",
    image: "https://cdn.simpleicons.org/typescript",
    details: "Com type safety e sem any",
  },
  {
    name: "JavaScript puro",
    image: "https://cdn.simpleicons.org/javascript",
    details: "E componentes com shadow DOM",
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.simpleicons.org/tailwindcss",
    details: "Esse site usa Tailwind",
  },
  {
    name: "Sass",
    color: "#c76494",
  },
  {
    name: "Webpack",
    color: "#1f7ac1",
  },
  {
    name: "JSDoc/TSDoc",
    details: "Com amor por documentar",
  },
  {
    name: "Jest",
    image: "https://cdn.simpleicons.org/jest",
    details: "Com React",
  },
  {
    name: "GitHub Actions",
    image: "https://cdn.simpleicons.org/githubactions",
  },
] satisfies ToolProps[];

export default function Tools() {
  return (
    <ul
      className="flex flex-row flex-wrap justify-center gap-8"
      aria-label="Tools"
    >
      {TOOLS.map((props) => (
        <li key={props.name}>
          <Tool {...props} />
        </li>
      ))}
    </ul>
  );
}
