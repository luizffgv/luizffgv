"use client";

import { HTMLAttributeAnchorTarget, ReactNode, useState } from "react";
import Link from "next/link";
import Modal from "@components/modal";
import { Variant } from "./types";
import { cva } from "class-variance-authority";

const buttonCva = cva(
  `flex flex-row items-center gap-2 rounded-md px-4 py-2 font-bold justify-center transition-all hover:brightness-110 hover:[text-shadow:_0_0_15px_currentcolor] rounded-tr-none rounded-bl-none`,
  {
    variants: {
      variant: {
        primary:
          "text-fg-on-primary bg-primary dark:text-primary dark:bg-primary/5 backdrop-blur-md dark:hover:bg-primary/10 dark:hover:border-primary/50",
        danger: "text-fg-on-primary bg-danger",
      } satisfies Record<Variant, string>,
    },
  },
);

type ModalButtonProps = {
  children: React.ReactNode;
  "aria-label"?: string;
  className?: string;
  modalContent: ReactNode;
};

function ModalButton(props: ModalButtonProps): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button
        className={props.className}
        onClick={() => {
          setModalIsOpen(true);
        }}
        aria-label={props["aria-label"]}
      >
        {props.children}
      </button>
      {modalIsOpen ? (
        <Modal
          onDismiss={() => {
            setModalIsOpen(false);
          }}
        >
          {props.modalContent}
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}

export type Props = {
  children: React.ReactNode;
  "aria-label"?: string;
  variant?: Variant | undefined;
} & (
  | {
      /** Handler for clicks on the button. */
      onClick: React.MouseEventHandler;
    }
  | {
      /** Link the button will send you to. */
      href: string;
      /** Same as <a>'s target. */
      target?: HTMLAttributeAnchorTarget;
    }
  | {
      modalContent: ReactNode;
      noCard?: boolean;
    }
);

export default function Button({
  variant = "primary",
  ...rest
}: Props): JSX.Element {
  const className = buttonCva({ variant });

  return (
    <>
      {"onClick" in rest ? (
        <button {...rest} type="button" className={className}></button>
      ) : "href" in rest ? (
        <Link {...rest} className={className}></Link>
      ) : (
        <ModalButton {...rest} className={className}></ModalButton>
      )}
    </>
  );
}
