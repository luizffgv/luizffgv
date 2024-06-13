import { useEffect, useRef } from "react";
import Button from "@components/button";
import Card from "@components/card";
import { XIcon } from "lucide-react";
import styles from "./modal.module.scss";

export default function Modal({
  children,
  onDismiss,
}: {
  children: React.ReactNode;
  onDismiss?: () => void;
}): JSX.Element {
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
      className={`${styles["modal-container"]} fixed flex h-[100dvh] max-h-none w-[100dvw] max-w-none flex-col items-center gap-4 bg-transparent p-4 text-inherit [justify-content:safe_center]`}
      onClose={() => onDismiss?.()}
    >
      {onDismiss ? (
        <div className={styles.dismiss}>
          <Button onClick={onDismiss} aria-label="Fechar modal">
            <XIcon />
          </Button>
        </div>
      ) : (
        <></>
      )}
      <div className={styles.modal}>
        <Card>{children}</Card>
      </div>
    </dialog>
  );
}
