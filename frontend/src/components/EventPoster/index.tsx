import styles from './EventsPosters.module.css';
import Image from 'next/image';

const EventsPosters = () => {
    return (
        <section className={styles.ftcoDestination}>
            <div className={styles.container}>
                <div className={`${styles.row} ${styles.justifyContentStart} ${styles.mb5} ${styles.pb3}`}>
                    <div className={`${styles.colMd7} ${styles.headingSection} ${styles.ftcoAnimate}`}>
                        <span className={styles.subheading}>Banners</span>
                        <h2 className={styles.mb4}>
                            <strong>Events</strong> Posters
                        </h2>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.colMd12}>
                        <div className={`${styles.singleSlider} ${styles.owlCarousel} ${styles.ftcoAnimate}`}>
                            {[
                                'cs01.jpg',
                                'cs02.jpg',
                                'cs03.jpg',
                                'destination-4.jpg',
                                'destination-5.jpg',
                                'destination-6.jpg',
                            ].map((image, index) => (
                                <div key={index} className={styles.item}>
                                    <div className={styles.destination}>
                                        <a href="#" className={`${styles.img} ${styles.dFlex} ${styles.justifyContentCenter} ${styles.alignItemsCenter}`}>
                                            <Image
                                                src={`/images/${image}`}
                                                alt={`Event Poster ${index + 1}`}
                                                width={500}
                                                height={300}
                                                className={styles.img}
                                            />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsPosters;