import { AtSignIcon, LinkedinIcon, PhoneIcon } from "lucide-react";
import Button from "@components/button";

/** Buttons to contact me, without a container. */
export default function ContactButtons(): JSX.Element {
  return (
    <>
      <div className="grow">
        <Button href="https://www.linkedin.com/in/luizffgv/" target="_blank">
          <LinkedinIcon />
          LinkedIn
        </Button>
      </div>
      <address className="contents not-italic *:grow">
        <div>
          <Button href="tel:+5533991262949" target="_blank">
            <PhoneIcon />
            +55 (33) 99126-2949
          </Button>
        </div>
        <div>
          <Button href="mailto:hireme@luizf.dev" target="_blank">
            <AtSignIcon />
            hireme@luizf.dev
          </Button>
        </div>
      </address>
    </>
  );
}
