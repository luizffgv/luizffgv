import GlowingText from "@components/glowing-text";
import Highlight from "@components/highlight";

export default function TypeSafety(): JSX.Element {
  return (
    <Highlight
      iconUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNoaWVsZCI+PHBhdGggZD0iTTIwIDEzYzAgNS0zLjUgNy41LTcuNjYgOC45NWExIDEgMCAwIDEtLjY3LS4wMUM3LjUgMjAuNSA0IDE4IDQgMTNWNmExIDEgMCAwIDEgMS0xYzIgMCA0LjUtMS4yIDYuMjQtMi43MmExLjE3IDEuMTcgMCAwIDEgMS41MiAwQzE0LjUxIDMuODEgMTcgNSAxOSA1YTEgMSAwIDAgMSAxIDF6Ii8+PC9zdmc+"
      title="Eu sou apaixonado por type-safety"
    >
      <p>
        Eu escrevo <GlowingText>TypeScript</GlowingText>, não JavaScript com
        alguns tipos.
      </p>
      <p>
        <GlowingText>Não</GlowingText> adicionarei nenhum{" "}
        <code>
          <GlowingText>any</GlowingText>
        </code>{" "}
        em sua codebase.
      </p>
    </Highlight>
  );
}
