// components/Navbar.tsx
// components/Navbar.tsx
"use client"; // Важно для использования хуков

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span>🐰</span> Пасхальные Традиции
        </Link>

        <div className={styles.navLinks}>
          <Link
            href="/"
            className={`${styles.link} ${
              pathname === "/" ? styles.activeLink : ""
            }`}
          >
            Главная
          </Link>
          <Link
            href="/traditions"
            className={`${styles.link} ${
              pathname.startsWith("/traditions") ? styles.activeLink : ""
            }`}
          >
            Традиции
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
