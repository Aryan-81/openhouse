import styles from './ServicesSection.module.css';

const servicesData = [
    {
        icon: '💡', // Represents creativity & new ideas
        heading: 'Innovation Zone',
        description: 'Stalls by vendors associated with schools.',
    },
    {
        icon: '📚', // Represents books & reading
        heading: 'Book Zone',
        description: 'Stalls by publishers and booksellers.',
    },
    {
        icon: '👨‍🎓', // Represents students & learning
        heading: 'Student Zone',
        description: 'Stalls showcasing multiple projects by school students.',
    },
    {
        icon: '🔬', // Represents science & research
        heading: 'Science Zone',
        description: 'Stalls by educators involved in school education.',
    },
    {
        icon: '🤖', // Represents technology & STEM fields
        heading: 'STEM Zone',
        description: 'Exhibits on Robotics, AR/VR, AI, Drones, ATL Expo, and Astronomy.',
    },
    {
        icon: '🎨', // Represents arts & creativity
        heading: 'Arts Zone',
        description: 'Activities including Painting, Elocution, Beadwork, Documentary Shows, and Jigsaw Puzzles.',
    },
];


const ServicesSection: React.FC = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.container}>
                <div className={styles.row}>
                    {servicesData.map((service, index) => (
                        <div key={index} className={styles.colMd3}>
                            <div className={styles.mediaBlock}>
                                <div className={styles.iconContainer}>
                                    <span className={styles.icon}>{service.icon}</span>
                                </div>
                                <div className={styles.mediaBody}>
                                    <h3 className={styles.heading}>{service.heading}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;