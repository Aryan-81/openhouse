import { FaLightbulb, FaRobot, FaPalette, FaUserGraduate, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./KeyAttractions.module.css";

const attractions = [
    { icon: <FaLightbulb className={`${styles.icon} ${styles.iconBlue}`} />, title: "Innovation Zone", description: "Industry partners showcasing STEAM innovations." },
    { icon: <FaRobot className={`${styles.icon} ${styles.iconGreen}`} />, title: "STEM Zone", description: "Hands-on experiments with AI, Drones, and AR/VR." },
    { icon: <FaPalette className={`${styles.icon} ${styles.iconYellow}`} />, title: "Arts Zone", description: "Painting, Elocution, Documentary Shows, Jigsaw Puzzles." },
    { icon: <FaUserGraduate className={`${styles.icon} ${styles.iconRed}`} />, title: "Student Zone", description: "Project exhibitions by young innovators." },
    { icon: <FaComments className={`${styles.icon} ${styles.iconPurple}`} />, title: "IITian Interaction", description: "Q&A with IIT students for career mentorship." },
];

export default function KeyAttractions() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>🎯 Key Attractions</h2>
                <div className={styles.grid}>
                    {attractions.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {item.icon}
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDescription}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}