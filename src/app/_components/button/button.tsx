"use client";

import { HTMLAttributeAnchorTarget, ReactNode, useState } from "react";
import Link from "next/link";
import Modal from "@components/modal";

const HOVER_CLASSNAME =
  "hover:dark:bg-primary hover:bg-primary hover:text-fg-on-primary hover:brightness-110 hover:[text-shadow:_0_0_15px_currentcolor]";

const CLASSNAME = `flex flex-row text-primary items-center gap-2 rounded-3xl bg-primary/15 px-4 py-2 font-bold justify-center transition-all ${HOVER_CLASSNAME}`;

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
        className={CLASSNAME}
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
  return (
    <>
      {"onClick" in props ? (
        <button {...props} type="button" className={CLASSNAME}></button>
      ) : "href" in props ? (
        <Link {...props} className={CLASSNAME}></Link>
      ) : (
        <ModalButton {...props} className={CLASSNAME}></ModalButton>
      )}
    </>
  );
}
