import styles from './Card_I.module.css'; // Import your CSS module


const Card_I = () => {

    return (

        <article className={styles.card}>
            <section className={styles.card__hero}>
                <p className={styles.card__jobTitle}>Senior Backend Engineer</p>
            </section>

            <div className={styles.card__footer}>
                <div className={styles.card__jobSummary}>
                    <div className={styles.card__jobIcon}>
                        {/* Add icon here if needed */}
                    </div>
                    <div className={styles.card__job}>
                        <p className={styles.card__jobTitle}>
                            Senior Backend <br />
                            Engineer
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Card_I;
