"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";
import { Modal, Button } from "react-bootstrap"; // Import Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default link behavior
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  const closeNavMenu = () => {
    setIsNavOpen(false); // Close the navigation menu
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <img src="/logo.jpg" alt="Logo" /> {/* Add the path to your logo */}
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
              <a href="#about" className={styles.navItem} onClick={closeNavMenu}>
                About
              </a>
            </li>
            <li>
              <div className={styles.registerContainer}>
                <Link
                  href="#"
                  className={styles.registerButton}
                  onClick={handleRegisterClick}
                  onMouseEnter={(e) => {
                    // Show hover message
                    const hoverMessage = e.currentTarget.querySelector(
                      `.${styles.hoverMessage}`
                    ) as HTMLElement;
                    if (hoverMessage) {
                      hoverMessage.style.visibility = "visible";
                      hoverMessage.style.opacity = "1";
                    }
                  }}
                  onMouseLeave={(e) => {
                    // Hide hover message
                    const hoverMessage = e.currentTarget.querySelector(
                      `.${styles.hoverMessage}`
                    ) as HTMLElement;
                    if (hoverMessage) {
                      hoverMessage.style.visibility = "hidden";
                      hoverMessage.style.opacity = "0";
                    }
                  }}
                >
                  Register
                  <div className={styles.hoverMessage}>
                    Registration will start soon!
                  </div>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bootstrap Modal for Click Event */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>Registration will start soon!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};

export default Header;
