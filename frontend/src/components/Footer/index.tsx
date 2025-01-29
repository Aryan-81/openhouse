"use client"
import Link from 'next/link';
import styles from './Footer.module.css'; // Import the CSS module
import { useEffect } from 'react';
import { FaYoutube, FaFacebook, FaInstagram, FaHeart, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    // Dynamically load Bootstrap CSS
    useEffect(() => {
        import('bootstrap/dist/css/bootstrap.min.css');
    }, []);

    return (
        <footer className={`${styles.ftcoFooter} ftco-bg-dark ftco-section`}>
            <div className="container">
                <div className="row mb-5">
                    {/* About Section */}
                    <div className="col-md">
                        <div className={`${styles.ftcoFooterWidget} mb-4`}>
                            <h2 className={styles.ftcoHeading2}>CSE</h2>
                            <p className={styles.footerText}>
                                The Department of CSE will create high-quality professionals in Computer Science & Engineering and foster leading-edge research to equip students to succeed and contribute to industry and society.
                            </p>
                            <ul className={`${styles.ftcoFooterSocial} list-unstyled float-md-left float-lft mt-5`}>
                                <li className="ftco-animate">
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <FaYoutube />
                                    </a>
                                </li>
                                <li className="ftco-animate">
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook />
                                    </a>
                                </li>
                                <li className="ftco-animate">
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Events Section */}
                    <div className="col-md">
                        <div className={`${styles.ftcoFooterWidget} mb-4 ml-md-5`}>
                            <h2 className={styles.ftcoHeading2}>Events</h2>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#technical" className={`${styles.footerLink} py-2 d-block`}>
                                        Technical
                                    </a>
                                </li>
                                <li>
                                    <a href="#gaming" className={`${styles.footerLink} py-2 d-block`}>
                                        Gaming
                                    </a>
                                </li>
                                <li>
                                    <a href="#onstage" className={`${styles.footerLink} py-2 d-block`}>
                                        On Stage
                                    </a>
                                </li>
                                <li>
                                    <a href="#offstage" className={`${styles.footerLink} py-2 d-block`}>
                                        Off Stage
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Customer Support Section */}
                    <div className="col-md">
                        <div className={`${styles.ftcoFooterWidget} mb-4`}>
                            <h2 className={styles.ftcoHeading2}>Customer Support</h2>
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="/registration" className={`${styles.footerLink} py-2 d-block`}>
                                        Registration
                                    </Link>
                                </li>
                                <li>
                                    <a href="#events" className={`${styles.footerLink} py-2 d-block`}>
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <Link href="/about" className={`${styles.footerLink} py-2 d-block`}>
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md">
                        <div className={`${styles.ftcoFooterWidget} mb-4`}>
                            <h2 className={styles.ftcoHeading2}>Have a Question?</h2>
                            <div className={`${styles.block23} mb-3`}>
                                <ul>
                                    <li>
                                        <span className={styles.icon}>
                                            <FaMapMarkerAlt />
                                        </span>
                                        <span className={styles.text}>
                                            IIT Jammu
                                            <br />
                                            Jagti, PO Nagrota
                                            <br />
                                            NH-44 ,Jammu - 181 221,
                                            <br />
                                            J&K, India.
                                        </span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className={styles.icon}>
                                                <FaPhone />
                                            </span>
                                            <span className={styles.text}>+91 1233221123</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className={styles.icon}>
                                                <FaEnvelope />
                                            </span>
                                            <span className={styles.text}>iitjammu@gmail.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className={styles.copyrightText}>
                            Copyright &copy;{new Date().getFullYear()} All rights reserved | This website is made with{' '}
                            <FaHeart /> by{' '}
                            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                                IIT Jammu Student
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;