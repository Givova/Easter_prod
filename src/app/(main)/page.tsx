import Link from "next/link";
import styles from "./page.module.css";
import EasterCountdown from "../../components/EasterCountdown";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.eggDecoration}>🥚</div>
        <div className={styles.eggDecoration2}>🐣</div>

        <h1 className={styles.title}>
          Добро пожаловать в мир пасхальных традиций
        </h1>
        <p className={styles.subtitle}>
          Откройте для себя красоту и глубину многовековых обычаев праздника
          Пасхи.
          <br />
          Узнайте, как разные культуры отмечают это светлое событие и какие
          удивительные ритуалы сохранились до наших дней.
        </p>

        <EasterCountdown />

        <div className={`${styles.factCard} ${styles.pulseAnimation}`}>
          <div className={styles.factIcon}>💡</div>
          <p>
            <strong>Знаете ли вы?</strong> В 2011 году в Италии создали самое
            большое шоколадное пасхальное яйцо высотой 10,39 метра и весом 7,200
            кг! На его изготовление ушло 700 часов работы.
          </p>
        </div>

        <Link href="/traditions" className={styles.cta}>
          Исследовать традиции
        </Link>
      </div>
    </div>
  );
}
