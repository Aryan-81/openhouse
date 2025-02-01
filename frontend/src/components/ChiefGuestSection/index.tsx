import styles from './ChiefGuestSection.module.css';
import Image from 'next/image';

const ChiefGuestSection: React.FC = () => {
    return (
        <section className={styles.chiefGuestSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Chief Guest</h2>
                <div className={styles.guestInfo}>
                    <div className={styles.guestImageContainer}>
                        <Image
                            src="/dr-jitendra-singh.png" 
                            alt="Dr. Jitendra Singh"
                            width={300} 
                            height={300} 
                            className={styles.guestImage}
                        />
                    </div>
                    <div className={styles.guestDetails}>
                        <h3 className={styles.guestName}>Dr. Jitendra Singh</h3>
                        <p className={styles.guestDesignation}>
                            The Honorable Minister of Science and Technology, Government of India
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChiefGuestSection;