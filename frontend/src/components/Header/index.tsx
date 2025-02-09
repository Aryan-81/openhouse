"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };



  const closeNavMenu = () => {
    setIsNavOpen(false); // Close the navigation menu
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <Image src="/logo.svg" alt="Logo" className={styles.logo} width={50} height={50} />

          PRAGYAAN
        </Link>

        <button className={styles.menuButton} onClick={toggleNav} aria-label="Toggle navigation">
          ☰
        </button>

        <div className={`${styles.navLinks} ${isNavOpen ? styles.show : ""}`}>
          <ul>
            <li>
              <Link href="/" className={styles.navItem} onClick={closeNavMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" className={styles.navItem} onClick={closeNavMenu}>
                Events
              </Link>
            </li>
            <li>
              <a href="/about" className={styles.navItem}>
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
