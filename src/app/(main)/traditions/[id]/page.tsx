"use client";

import { notFound } from "next/navigation";
import { traditions, Tradition } from "../../data";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";

export default function TraditionPage({ params }: { params: { id: string } }) {
  const tradition: Tradition | undefined = traditions.find(
    (t: Tradition) => t.id === params.id
  );
  if (!tradition) {
    notFound();
  }

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{tradition.title}</h1>
      <div className={styles.content}>
        <p>{tradition.description}</p>
      </div>
      <div className={styles.actionContainer}>
        <Link href="/traditions" className={styles.backLink}>
          ← Назад к традициям
        </Link>

        <button
          className={`${styles.likeButton} ${liked ? styles.liked : ""}`}
          onClick={handleLike}
        >
          {liked ? "❤️ Нравится" : "🤍 Нравится"}
        </button>
      </div>
    </article>
  );
}
