"use client"
import styles from './Footer.module.css';
import { FaYoutube, FaFacebook, FaInstagram, FaHeart, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {

    return (
        <footer className={`${styles.ftcoFooter} ftco-bg-dark ftco-section`}>
            <div className="container">
                <div className="row mb-5">
                    {/* About Section */}
                    <div className="col-md">
                        <div className={`${styles.ftcoFooterWidget} mb-4`}>
                            <h2 className={styles.ftcoHeading2}>PRAGYAAN</h2>
                            <p className={styles.footerText}>
                                 
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
                                            <span className={styles.text}>+91 9596917316</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className={styles.icon}>
                                                <FaEnvelope />
                                            </span>
                                            <span className={styles.text}>2022ucs0083@iitjammu.ac.in</span>
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