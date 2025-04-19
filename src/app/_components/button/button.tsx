"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode, useState } from "react";

import Modal from "@components/modal";

import { Variant } from "./types";

const buttonCva = cva(
  `flex flex-row items-center gap-2 rounded-lg justify-center transition-all`,
  {
    variants: {
      icon: {
        true: "p-2",
        false: "px-4 py-2",
      },
      variant: {
        primary:
          "text-primary bg-bg-button dark:bg-primary/5 backdrop-blur-md dark:hover:bg-primary hover:bg-primary hover:text-fg-on-primary",
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
        title={props["aria-label"]}
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
  isIcon?: boolean;
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
  isIcon = false,
  variant = "primary",
  ...rest
}: Props): JSX.Element {
  const className = buttonCva({ icon: isIcon, variant });

  return (
    <>
      {"onClick" in rest ? (
        <button
          {...rest}
          title={rest["aria-label"]}
          type="button"
          className={className}
        ></button>
      ) : "href" in rest ? (
        <Link {...rest} title={rest["aria-label"]} className={className}></Link>
      ) : (
        <ModalButton {...rest} className={className}></ModalButton>
      )}
    </>
  );
}
