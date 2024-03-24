import Button from "./button";

/** Buttons to contact me, without a container. */
export default function ContactButtons() {
  return (
    <>
      <div className="grow">
        <Button href="https://www.linkedin.com/in/luizffgv/" target="_blank">
          <span
            className="material-symbols-outlined"
            aria-hidden
            translate="no"
          >
            work
          </span>{" "}
          LinkedIn
        </Button>
      </div>
      <address className="contents not-italic *:grow">
        <div>
          <Button href="tel:+5533991262949" target="_blank">
            <span
              className="material-symbols-outlined"
              aria-hidden
              translate="no"
            >
              phone
            </span>{" "}
            +55 (33) 99126-2949
          </Button>
        </div>
        <div>
          <Button href="mailto:luizffgv10@gmail.com" target="_blank">
            <span
              className="material-symbols-outlined"
              aria-hidden
              translate="no"
            >
              mail
            </span>{" "}
            E-mail
          </Button>
        </div>
      </address>
    </>
  );
}
