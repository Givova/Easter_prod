// import Link from "next/link";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.hero}>
//         {/* Добавим декоративные элементы */}
//         <div className={styles.eggDecoration}>🥚</div>
//         <div className={styles.eggDecoration2}>🐣</div>

//         <h1 className={styles.title}>
//           Добро пожаловать в мир пасхальных традиций
//         </h1>
//         <p className={styles.subtitle}>
//           Откройте для себя красоту и глубину многовековых обычаев праздника
//           Пасхи
//         </p>

//         {/* Блок с интересным фактом */}
//         <div className={styles.factCard}>
//           <p>
//             Знаете ли вы? Самое большое пасхальное яйцо находится в Канаде и
//             весит более 2 тонн!
//           </p>
//         </div>

//         <Link href="/traditions" className={styles.cta}>
//           Исследовать традиции
//         </Link>
//       </div>

//       {/* Блок с предпросмотром традиций */}
//       <div className={styles.previewSection}>
//         <h2>Популярные традиции</h2>
//         <div className={styles.previewGrid}>
//           <div className={styles.previewItem}>
//             <span>🥚</span>
//             <h3>Покраска яиц</h3>
//           </div>
//           <div className={styles.previewItem}>
//             <span>🍞</span>
//             <h3>Выпечка куличей</h3>
//           </div>
//           <div className={styles.previewItem}>
//             <span>🔔</span>
//             <h3>Колокольный звон</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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

        {/* Таймер до Пасхи */}
        <EasterCountdown />

        {/* Интересный факт */}
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
