"use client";

import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode, useState } from "react";
import styles from "./button.module.scss";
import Modal from "./modal";

type ModalButtonProps = {
  children: React.ReactNode;
  "aria-label"?: string;
  className?: string;
  modalContent: ReactNode;
  noCard?: boolean;
};

function ModalButton(props: ModalButtonProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button
        className={`${props.className} ${styles.button}`}
        onClick={() => setModalIsOpen(true)}
        aria-label={props["aria-label"]}
      >
        {props.children}
      </button>
      {modalIsOpen ? (
        <Modal onDismiss={() => setModalIsOpen(false)} noCard={props.noCard}>
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
  className?: string;
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

export default function Button(props: Props) {
  return (
    <>
      {"onClick" in props ? (
        <button
          {...props}
          className={`${props.className ?? ""} ${styles.button} button`}
          type="button"
        ></button>
      ) : "href" in props ? (
        <Link
          {...props}
          className={`${props.className ?? ""} ${styles.button} button`}
        ></Link>
      ) : (
        <ModalButton {...props}></ModalButton>
      )}
    </>
  );
}
