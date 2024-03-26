import Tool, { Props as ToolProps } from "./tool";

const TOOLS = [
  {
    name: "Next.js",
    color: "rgb(127 127 127)",
    details: "Para static exports",
  },
  {
    name: "Node.js",
    color: "#5fa04e",
    details: "E execução async",
  },
  {
    name: "TypeScript",
    color: "#2d79c7",
    details: "Com type safety e sem any",
  },
  {
    name: "JavaScript puro",
    color: "#f0dc4e",
    details: "E componentes com shadow DOM",
  },
  {
    name: "Tailwind CSS",
    color: "#37bff8",
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
    color: "#99425b",
    details: "Com React",
  },
  {
    name: "GitHub Actions",
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
