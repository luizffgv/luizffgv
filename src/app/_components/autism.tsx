import styles from "./autism.module.scss";
import { InfinityIcon, SparkleIcon } from "lucide-react";

export default function Autism() {
  return (
    <section className="relative text-primary">
      <div aria-label="Símbolo de infinito, representando o autismo">
        <SparkleIcon className={styles.sparkle1} />
        <InfinityIcon height={120} width={120} />
        <SparkleIcon className={styles.sparkle2} />
      </div>
    </section>
  );
}
