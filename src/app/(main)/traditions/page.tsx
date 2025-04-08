import Link from "next/link";
import { traditions } from "../data";
import styles from "./page.module.css";

const truncateDescription = (text: string, maxLines = 3) => {
  const lines = text.split("\n");
  if (lines.length <= maxLines) return text;

  const truncated = lines.slice(0, maxLines).join("\n");
  return `${truncated}...`;
};

export default function TraditionsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Пасхальные Традиции</h1>
      <div className={styles.grid}>
        {traditions.map((tradition) => (
          <Link
            href={`/traditions/${tradition.id}`}
            key={tradition.id}
            className={styles.card}
          >
            <h2>{tradition.title}</h2>
            {/* <p>{tradition.description}</p> */}
            <p className={styles.truncatedText}>
              {truncateDescription(tradition.description)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
