"use client";

import { useState } from "react";
import styles from "./theme-switcher.module.scss";
import Modal from "./modal";
import Button from "./button";

export default function ThemeSwitcher() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="raiar flex-col gap align-center raiar-card text-center width-fit">
      <h2>Mudar tema</h2>
      <div className="raiar flex-row justify-center gap flex-wrap">
        <Button
          aria-label="Mudar tema"
          onClick={() => {
            localStorage.setItem(
              "theme-dark",
              String(document.documentElement.classList.toggle("raiar-dark"))
            );
          }}
        >
          <span className={styles["toggle-button-text"]}></span>
        </Button>
        <Button
          aria-label="Escolher cor primária"
          onClick={() => setModalOpen(true)}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            brush
          </span>
        </Button>
      </div>
      {modalOpen ? (
        <Modal onDismiss={() => setModalOpen(false)}>
          <div className="raiar flex-col gap align-items-center">
            <h2>Escolher cor primária</h2>
            <input
              type="color"
              onInput={(e) => {
                localStorage.setItem(
                  "theme-color-primary",
                  e.currentTarget.value
                );

                document.documentElement.style.setProperty(
                  "--raiar-color-primary",
                  e.currentTarget.value
                );
              }}
            />
            <Button
              onClick={() => {
                localStorage.removeItem("theme-color-primary");

                document.documentElement.style.setProperty(
                  "--raiar-color-primary",
                  null
                );
              }}
            >
              <span className="material-symbols-outlined" aria-hidden>
                history
              </span>{" "}
              Redefinir
            </Button>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
}
