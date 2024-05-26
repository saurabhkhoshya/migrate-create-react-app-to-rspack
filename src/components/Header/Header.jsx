import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Your Logo</div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>About</li>
          <li className={styles.navItem}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
