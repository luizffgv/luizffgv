"use client";

export default function Page() {
  return (
    <div className="raiar gap flex-col align-items-center">
      <h2>Escolher cor primária</h2>
      <input
        type="color"
        onInput={(e) => {
          localStorage.setItem("theme-color-primary", e.currentTarget.value);

          document.documentElement.style.setProperty(
            "--raiar-color-primary",
            e.currentTarget.value
          );
        }}
      />
      <button
        type="button"
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
      </button>
    </div>
  );
}
