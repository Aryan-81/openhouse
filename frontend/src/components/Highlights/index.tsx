import { FaUsers, FaSchool, FaChalkboardTeacher, FaBoxOpen, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./HighlightsSection.module.css";

const highlights = [
    { icon: <FaUsers className={`${styles.icon} ${styles.iconBlue}`} />, text: "Attended by 4000+ Students" },
    { icon: <FaSchool className={`${styles.icon} ${styles.iconGreen}`} />, text: "Joined by 100+ Schools" },
    { icon: <FaChalkboardTeacher className={`${styles.icon} ${styles.iconYellow}`} />, text: "Principal’s Conclave" },
    { icon: <FaBoxOpen className={`${styles.icon} ${styles.iconRed}`} />, text: "500+ Items on 100+ Stalls" },
    { icon: <FaLightbulb className={`${styles.icon} ${styles.iconPurple}`} />, text: "Experience the power of STEAM" },
];

export default function HighlightsSection() {
    return (
        <section className={styles.highlightsSection}>
            <div className={styles.container}>
                {/* <h2 className={styles.title}>🚀 Event Highlights</h2> */}
                <div className={styles.grid}>
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {item.icon}
                            <p className={styles.text}>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}