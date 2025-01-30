import React from 'react';
import styles from './ServicesSection.module.css';

const ServicesSection: React.FC = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.colMd3}>
                        <div className={styles.mediaBlock}>
                            <div className={styles.iconContainer}>
                                <span className={styles.icon}>🏷️</span>
                            </div>
                            <div className={styles.mediaBody}>
                                <h3 className={styles.heading}>Best Price Guarantee</h3>
                                <p>A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.colMd3}>
                        <div className={styles.mediaBlock}>
                            <div className={styles.iconContainer}>
                                <span className={styles.icon}>❤️</span>
                            </div>
                            <div className={styles.mediaBody}>
                                <h3 className={styles.heading}>Travellers Love Us</h3>
                                <p>A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.colMd3}>
                        <div className={styles.mediaBlock}>
                            <div className={styles.iconContainer}>
                                <span className={styles.icon}>🕵️</span>
                            </div>
                            <div className={styles.mediaBody}>
                                <h3 className={styles.heading}>Best Travel Agent</h3>
                                <p>A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.colMd3}>
                        <div className={styles.mediaBlock}>
                            <div className={styles.iconContainer}>
                                <span className={styles.icon}>📞</span>
                            </div>
                            <div className={styles.mediaBody}>
                                <h3 className={styles.heading}>Our Dedicated Support</h3>
                                <p>A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;