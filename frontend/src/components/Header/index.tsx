"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import { useAuth } from "@/context/AuthContext"; 

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { token, logout } = useAuth(); // Get token and logout function
  const router = useRouter();

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleLogoutClick = () => {
    // logout(); // Clear token

    router.push("/dashboard"); // Redirect to homepage after logout
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
              <Link href="/" className={styles.navItem}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" className={styles.navItem}>
                Events
              </Link>
            </li>
            <li>
              <a href="/about" className={styles.navItem}>
                About
              </a>
            </li>
            <li>
              <div className={styles.registerContainer}>
                {token ? (
                  <Link href='/dashboard' className={styles.registerButton} onClick={handleLogoutClick}>
                    Dashboard
                  </Link>
                ) : (
                  <Link href='/login' className={styles.registerButton} onClick={handleLoginClick}>
                    Login
                  </Link>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
