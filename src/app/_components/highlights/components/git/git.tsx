import GlowingText from "@components/glowing-text";
import Highlight from "@components/highlight";

export default function Git(): JSX.Element {
  return (
    <Highlight
      iconUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdpdC1tZXJnZSI+PGNpcmNsZSBjeD0iMTgiIGN5PSIxOCIgcj0iMyIvPjxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSIzIi8+PHBhdGggZD0iTTYgMjFWOWE5IDkgMCAwIDAgOSA5Ii8+PC9zdmc+"
      title="Produzo históricos Git organizados"
    >
      <p>
        Prezo por <GlowingText>boas mensagens de commit</GlowingText>,{" "}
        <GlowingText>separação de commits</GlowingText> e{" "}
        <GlowingText>históricos lineares</GlowingText>.
      </p>
    </Highlight>
  );
}
