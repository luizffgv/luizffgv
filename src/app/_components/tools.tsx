import ToolComponent, { Props as ToolProps } from "./tool";

/** Kinds of tools. */
export type ToolKind = "language" | "framework" | "tool";

/** Information about a tool. */
export type ToolData = ToolProps & { kind: ToolKind };

const TOOLS = [
  {
    kind: "framework",
    name: "Next.js",
    image: "https://cdn.simpleicons.org/nextdotjs",
    details: "Para static exports",
  },
  {
    kind: "framework",
    name: "Node.js",
    image: "https://cdn.simpleicons.org/nodedotjs",
    details: "E execução async",
  },
  {
    kind: "language",
    name: "TypeScript",
    image: "https://cdn.simpleicons.org/typescript",
    details: "Com type safety e sem any",
  },
  {
    kind: "language",
    name: "JavaScript puro",
    image: "https://cdn.simpleicons.org/javascript",
    details: "E componentes com shadow DOM",
  },
  {
    kind: "language",
    name: "C++",
    image: "https://cdn.simpleicons.org/cplusplus",
    details: "Especialmente C++20",
  },
  {
    kind: "framework",
    name: "Tailwind CSS",
    image: "https://cdn.simpleicons.org/tailwindcss",
    details: "Esse site usa Tailwind",
  },
  {
    kind: "language",
    name: "Sass",
    color: "#c76494",
  },
  {
    kind: "tool",
    name: "Webpack",
    color: "#1f7ac1",
  },
  {
    kind: "tool",
    name: "JSDoc/TSDoc",
    details: "Com amor por documentar",
  },
  {
    kind: "framework",
    name: "Jest",
    image: "https://cdn.simpleicons.org/jest",
    details: "Com React",
  },
  {
    kind: "tool",
    name: "GitHub Actions",
    image: "https://cdn.simpleicons.org/githubactions",
  },
] satisfies ToolData[];

/** Properties for the {@link Tools} component. */
export interface ToolsProps {
  /** Filters tools by {@link ToolKind | kind}. */
  kind?: ToolKind;
}

export default function Tools({ kind }: ToolsProps) {
  return (
    <ul
      className="flex flex-row flex-wrap justify-center gap-8"
      aria-label="Tools"
    >
      {TOOLS.filter((tools) => kind == null || tools.kind === kind).map(
        (props) => (
          <li key={props.name}>
            <ToolComponent {...props} />
          </li>
        ),
      )}
    </ul>
  );
}
