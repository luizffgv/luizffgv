import styles from "./autism.module.scss";
import { InfinityIcon, SparkleIcon } from "lucide-react";
import LookingAtCursor from "./looking-at-cursor";

export default function Autism() {
  return (
    <section className="relative text-primary">
      <div
        className={styles.container}
        aria-label="Símbolo de infinito, representando o autismo"
      >
        <LookingAtCursor>
          <InfinityIcon className={styles.infinity5} height={120} width={120} />
          <InfinityIcon className={styles.infinity4} height={120} width={120} />
          <InfinityIcon className={styles.infinity3} height={120} width={120} />
          <InfinityIcon className={styles.infinity2} height={120} width={120} />
          <InfinityIcon className={styles.infinity1} height={120} width={120} />
          <InfinityIcon className={styles.infinity} height={120} width={120} />
        </LookingAtCursor>
        <div className={styles.sparkles}>
          <SparkleIcon className={styles.sparkle1} />
          <SparkleIcon className={styles.sparkle2} />
        </div>
      </div>
    </section>
  );
}
