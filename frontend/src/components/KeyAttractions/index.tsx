import Image from "next/image";
import styles from "./KeyAttractions.module.css";

const attractions = [
    { icon: <Image src={'/keyatt/ino.png'} layout="fill" objectFit="cover" className={`${styles.icon} ${styles.iconBlue}`} alt="keyAttraction" />, title: "Innovation Zone", description: "Industry partners showcasing STEAM innovations." },
    { icon: <Image src={'/keyatt/stm.png'} layout="fill" objectFit="cover" className={`${styles.icon} ${styles.iconBlue}`} alt="keyAttraction" />, title: "STEM Zone", description: "Hands-on experiments with AI, Drones, AR/VR and more." },
    { icon: <Image src={'/keyatt/art.png'} layout="fill" objectFit="cover" className={`${styles.icon} ${styles.iconBlue}`} alt="keyAttraction" />, title: "Arts Zone", description: "Elocution, Documentary Shows, IITian Intraction and more." },
    { icon: <Image src={'/keyatt/std.png'} layout="fill" objectFit="cover" className={`${styles.icon} ${styles.iconBlue}`} alt="keyAttraction" />, title: "Student Zone", description: "Project exhibitions by young innovators." },
    { icon: <Image src={'/keyatt/bok.png'} layout="fill" objectFit="cover" className={`${styles.icon} ${styles.iconBlue}`} alt="keyAttraction" />, title: "Book Zone", description: "Browse books on science, technology, arts, and literature." },
    { icon: <Image src={'/keyatt/tch.png'} layout="fill" objectFit="cover" className={`${styles.icon} ${styles.iconBlue}`} alt="keyAttraction" />, title: "Science Zone", description: "Explore innovation through interactive stalls and IIT Jammu's labs." },
];

export default function KeyAttractions() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>🎯 Key Attractions</h2>
                <div className={styles.grid}>
                    {attractions.map((item, index) => (
                        <div
                            key={index}
                            className={styles.card}
                        >
                            {item.icon}
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDescription}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}