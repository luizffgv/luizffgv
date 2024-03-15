"use client";

import styles from "./theme-switcher.module.scss";
import Button from "./button";

export default function ThemeSwitcher() {
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
          modalContent={
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
          }
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            brush
          </span>
        </Button>
      </div>
    </div>
  );
}
