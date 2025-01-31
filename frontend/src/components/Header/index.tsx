"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css"; // Import CSS Module

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          PRAGYAAN
        </Link>

        <button className={styles.menuButton} onClick={toggleNav} aria-label="Toggle navigation">
          ☰
        </button>

        <div className={`${styles.navLinks} ${isNavOpen ? styles.show : ""}`}>
          <ul>
            <li>
              <Link href="/" className={styles.navItem}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/event" className={styles.navItem}>
                Events
              </Link>
            </li>
            <li>
              <a href="#about" className={styles.navItem}>
                About
              </a>
            </li>
            <li className="nav-item cta">
              <Link href="/register?event_id=1" className="nav-link">
                <span>Login</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;