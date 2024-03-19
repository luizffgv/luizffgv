import styles from "./header.module.scss";
import Button from "./button";

const ENTRIES = [
  { name: "Início", href: "/" },
  { name: "Projetos", href: "/projetos" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Button
        modalContent={
          <>
            <nav className="raiar flex-col gap">
              {ENTRIES.map(({ name, href }) => (
                <Button key={href} href={href}>
                  {name}
                </Button>
              ))}
            </nav>
          </>
        }
        className={styles["menu-button"]}
      >
        <span className="material-symbols-outlined">menu</span>
      </Button>
      <nav
        className={`${styles.entries} raiar flex-row gap justify-content-center`}
      >
        {ENTRIES.map(({ name, href }) => (
          <Button key={href} href={href}>
            {name}
          </Button>
        ))}
      </nav>
    </header>
  );
}
