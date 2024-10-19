import GlowingText from "@components/glowing-text";
import Highlight from "@components/highlight";

export default function Css(): JSX.Element {
  return (
    <Highlight
      iconUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNxdWFyZS1zdGFjayI+PHBhdGggZD0iTTQgMTBjLTEuMSAwLTItLjktMi0yVjRjMC0xLjEuOS0yIDItMmg0YzEuMSAwIDIgLjkgMiAyIi8+PHBhdGggZD0iTTEwIDE2Yy0xLjEgMC0yLS45LTItMnYtNGMwLTEuMS45LTIgMi0yaDRjMS4xIDAgMiAuOSAyIDIiLz48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4PSIxNCIgeT0iMTQiIHJ4PSIyIi8+PC9zdmc+"
      title="Familiar com arquitetura de microfrontends"
    >
      <p>
        Tenho familiaridade para trabalhar em websites baseados em
        microfrontends com <GlowingText>single-spa</GlowingText>.
      </p>
    </Highlight>
  );
}
