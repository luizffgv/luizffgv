"use client";

import { HTMLAttributeAnchorTarget, ReactNode, useState } from "react";
import Link from "next/link";
import Modal from "@components/modal";

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
        className="flex flex-row items-center justify-center gap-2 rounded-3xl bg-primary px-4 py-2 font-bold text-fg-on-primary transition-all hover:shadow-[0_0_50px_theme(colors.primary_/_25%)] hover:brightness-110 hover:[text-shadow:_0_0_15px_currentcolor]"
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

export default function Button(props: Props): JSX.Element {
  const className =
    "flex flex-row items-center gap-2 rounded-3xl bg-primary px-4 py-2 font-bold text-fg-on-primary justify-center transition-all hover:brightness-110 hover:shadow-[0_0_50px_theme(colors.primary_/_25%)] hover:[text-shadow:_0_0_15px_currentcolor]";

  return (
    <>
      {"onClick" in props ? (
        <button {...props} type="button" className={className}></button>
      ) : "href" in props ? (
        <Link {...props} className={className}></Link>
      ) : (
        <ModalButton {...props} className={className}></ModalButton>
      )}
    </>
  );
}
