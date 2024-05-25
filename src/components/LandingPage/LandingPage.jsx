import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import styles from "./landingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.mainContent}>
        Migrate Create react app to Rspack
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export { LandingPage };
