import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Your Logo</div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Home</li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
