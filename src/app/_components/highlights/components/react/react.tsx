import GlowingText from "@components/glowing-text";
import Highlight from "@components/highlight";

export default function React(): JSX.Element {
  return (
    <Highlight
      iconUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJsb2NrcyI+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMTQiIHk9IjMiIHJ4PSIxIi8+PHBhdGggZD0iTTEwIDIxVjhhMSAxIDAgMCAwLTEtMUg0YTEgMSAwIDAgMC0xIDF2MTJhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xdi01YTEgMSAwIDAgMC0xLTFIMyIvPjwvc3ZnPg=="
      title="Eu entendo React"
    >
      <p>
        Eu sei como funciona a <GlowingText>renderização</GlowingText>,{" "}
        <GlowingText>reconciliação</GlowingText>, e como o React é implementado
        em <GlowingText>fibers</GlowingText>. Por isso, tenho facilidade em
        encontrar e evitar várias categorias de bugs.
      </p>
    </Highlight>
  );
}
