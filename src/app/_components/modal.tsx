import { useEffect, useRef } from "react";
import styles from "./modal.module.scss";
import Button from "./button";

export default function Modal({
  children,
  onDismiss,
}: {
  children: React.ReactNode;
  onDismiss?: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current == null) {
      console.error("dialogRef.current is null.");
      return;
    }

    dialogRef.current.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={`${styles["modal-container"]} fixed flex h-[100dvh] max-h-none w-[100dvw] max-w-none flex-col items-center justify-center gap-4 bg-transparent p-4 text-inherit`}
      onClose={() => onDismiss?.()}
    >
      {onDismiss ? (
        <div className={styles.dismiss}>
          <Button onClick={onDismiss} aria-label="Fechar modal">
            <span
              className="material-symbols-outlined"
              aria-hidden
              translate="no"
            >
              close
            </span>
          </Button>
        </div>
      ) : (
        <></>
      )}
      <div
        className={`${styles.modal} dark:bg-bg-close-dark rounded-xl bg-bg-close p-4`}
      >
        {children}
      </div>
    </dialog>
  );
}
