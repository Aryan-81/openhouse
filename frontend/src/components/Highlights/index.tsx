import Image from "next/image";
import styles from "./HighlightsSection.module.css";

const highlights = [
    { icon: <Image src={'/highlights/sch.png'} layout="fill" objectFit="cover" className={`${styles.icon} ${styles.iconBlue}`} alt="School Highlights" />, text: "Attended by 4000+ Students" },
    { icon: <Image src={'/highlights/stm.png'} layout="fill" objectFit="cover" className={`${styles.icon} ${styles.iconBlue}`} alt="School Highlights" />, text: "Experience the power of STEAM" },
    { icon: <Image src={'/highlights/cls.png'} layout="fill" objectFit="cover" className={`${styles.icon} ${styles.iconBlue}`} alt="School Highlights" />, text: "Joined by 100+ Schools" },
    { icon: <Image src={'/highlights/prs.png'} layout="fill" objectFit="cover" className={`${styles.icon} ${styles.iconBlue}`} alt="School Highlights" />, text: "Principal’s Conclave" },
    { icon: <Image src={'/highlights/tech.png'} layout="fill" objectFit="cover" className={`${styles.icon} ${styles.iconBlue}`} alt="School Highlights" />, text: "500+ Items on 100+ Stalls" },
];

export default function HighlightsSection() {
    return (
        <section className={styles.highlightsSection}>
            <div className={styles.container}>
                {/* <h2 className={styles.title}>🚀 Event Highlights</h2> */}
                <div className={styles.grid}>
                    {highlights.map((item, index) => (
                        <div key={index} className={styles.card}>
                            {item.icon}
                            <p className={styles.text}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}