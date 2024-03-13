"use client";

import styles from "./theme-switcher.module.css";

export default function ThemeSwitcher() {
  return (
    <div className="raiar flex-col gap align-center raiar-card text-center width-fit">
      <h2>Mudar tema</h2>
      <div className="raiar flex-row justify-center gap flex-wrap">
        <button
          id="button-theme-toggle"
          aria-label="Mudar tema"
          onClick={() => {
            localStorage.setItem(
              "theme-dark",
              String(document.documentElement.classList.toggle("raiar-dark"))
            );
          }}
        >
          <span className={styles["toggle-button-text"]}></span>
        </button>
        <button
          id="button-primary-choose"
          aria-label="Escolher cor primária"
          disabled
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            brush
          </span>
        </button>
      </div>
    </div>
  );
}
