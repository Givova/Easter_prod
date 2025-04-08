"use client";

import { useEffect, useState } from "react";
import styles from "../app/(main)/page.module.css";

export default function EasterCountdown() {
  const calculateEasterDate = (year: number) => {
    // Алгоритм Гаусса для вычисления даты Пасхи
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;

    return new Date(year, month - 1, day);
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const easterDate = calculateEasterDate(currentYear);

    // Если Пасха уже прошла в этом году, берем следующий год
    if (now > easterDate) {
      easterDate.setFullYear(currentYear + 1);
    }

    const updateTimer = () => {
      const now = new Date();
      const difference = easterDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Если Пасха наступила
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    updateTimer(); // Первоначальный вызов
    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className={styles.countdown}>
      <h3>До Пасхи осталось:</h3>
      <div className={styles.timer}>
        <div className={styles.timeBlock}>
          <span>{timeLeft.days.toString().padStart(2, "0")}</span>
          <small>дней</small>
        </div>
        <div className={styles.timeBlock}>
          <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
          <small>часов</small>
        </div>
        <div className={styles.timeBlock}>
          <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
          <small>минут</small>
        </div>
        <div className={styles.timeBlock}>
          <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
          <small>секунд</small>
        </div>
      </div>
    </div>
  );
}
