import { motion } from "framer-motion";
import styles from "./ChiefGuestSection.module.css";

export default function ChiefGuestSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Honoring Our Chief Guest</h2>

                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Chief Guest Image */}
                    <img
                        src="/dr-jitendra-singh.png"
                        alt="Dr. Jitendra Singh"
                        className={styles.image}
                    />

                    {/* Chief Guest Details */}
                    <div className={styles.details}>
                        <h3 className={styles.name}>Dr. Jitendra Singh</h3>
                        <p className={styles.role}>Hon. Minister of Science & Technology, Govt. of India</p>
                        <p className={styles.description}>
                        We are honored to welcome Dr. Jitendra Singh as our Chief Guest at Pragyaan 2025. 
                        His invaluable contributions to science, technology, and education inspire the next generation of innovators. Join us as he shares insights on the future of STEM and education in India.
                        </p>

                        {/* Key Highlights */}
                        {/* <ul className={styles.highlights}>
                            <li>Special Address on STEAM & Future Careers</li>
                            <li>Interaction with Students & Educators</li>
                            <li>Insights into Emerging Technologies</li>
                        </ul> */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}