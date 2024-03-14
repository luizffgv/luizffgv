import { useEffect, useRef } from "react";
import styles from "./modal.module.scss";
import Button from "./button";

export default function Modal({
  children,
  onDismiss,
  noCard,
}: {
  children: React.ReactNode;
  onDismiss?: () => void;
  noCard?: boolean;
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
      className={`${styles["modal-container"]} raiar flex-col align-items-center justify-content-safe-center gap`}
      onClose={() => onDismiss?.()}
    >
      {onDismiss ? (
        <div className={styles.dismiss}>
          <Button onClick={onDismiss} aria-label="Fechar modal">
            <span className="material-symbols-outlined" aria-hidden>
              close
            </span>
          </Button>
        </div>
      ) : (
        <></>
      )}
      <div className={`${styles["modal"]} ${noCard ? "" : "raiar-card"}`}>
        {children}
      </div>
    </dialog>
  );
}
