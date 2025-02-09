"use client";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";
import styles from "./Testimonial.module.css";

export default function TestimonialSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Message</h2>

                <motion.div
                    className={styles.testimonialCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <FaQuoteLeft className={styles.quoteIcon} />

                    <p className={styles.testimonialText}>
                        "Pragyaan is not just an event; it is a vision to bridge the gap between school education and real-world technology.
                        Through hands-on learning and STEAM-driven experiences, we aim to inspire the next generation of innovators
                        and critical thinkers. IIT Jammu is proud to host this initiative, bringing together students, educators, and
                        industry experts to create a transformative learning experience."
                    </p>

                    <FaQuoteRight className={styles.quoteIcon} />

                    {/* Image and Name */}
                    <div className={styles.imageContainer}>
                        <Image src={'/direc.png'} alt="Dr. Manoj Singh Gaur" width={80} height={80} className={styles.image} />
                        <h3 className={styles.name}>Dr. Manoj Singh Gaur</h3>
                        <p className={styles.role}>Founding Director, IIT Jammu</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}