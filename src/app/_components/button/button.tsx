"use client";

import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, JSX, ReactNode, useState } from "react";

import Modal from "@components/modal";

import { Variant } from "./types";

const buttonCva = cva(
  "flex flex-row items-center justify-center gap-2 font-bold transition-all",
  {
    variants: {
      icon: {
        true: "p-2",
        false: "px-4 py-2",
      },
      variant: {
        primary:
          "border-2 border-border-button bg-bg-button text-primary hover:bg-primary/15",
        solid:
          "bg-primary text-fg-on-primary hover:bg-primary/85 dark:bg-fg-on-primary dark:text-bg-dark dark:hover:bg-fg-dark",
        outline:
          "border-2 border-fg/40 bg-bg text-fg hover:border-fg dark:border-fg-on-primary/50 dark:bg-bg-dark dark:text-fg-on-primary dark:hover:border-fg-on-primary",
        danger: "bg-danger text-fg-on-primary",
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
        <motion.button
          {...rest}
          title={rest["aria-label"]}
          type="button"
          className={className}
        />
      ) : "href" in rest ? (
        <Link {...rest} title={rest["aria-label"]} className={className}></Link>
      ) : (
        <ModalButton {...rest} className={className}></ModalButton>
      )}
    </>
  );
}
