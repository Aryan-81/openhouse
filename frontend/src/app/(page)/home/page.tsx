'use client';
import HeroSection from '@/components/HeroSection';
import styles from './home.module.css';
import HighlightsSection from '@/components/Highlights';
// import Testimonials from '@/components/Testmonial';
import ChiefGuestSection from '@/components/ChiefGuestSection';
import KeyAttractions from '@/components/KeyAttractions';
import { relative } from 'path';

const Home = () => {
    return (
        <><div style={{position:'relative'}}>

        
            <HeroSection />

            <section className={`${styles.sec} ${styles.highlights}`}>
                <HighlightsSection />
            </section>

            <section className={`${styles.sec}`}>
                <ChiefGuestSection/>
            </section>
            
            
            <section className={styles.about}>
                <h2>About Pragyaan</h2>
                <p>An Open Day is a unique initiative aimed at fostering scientific curiosity and technological innovation among school students. Organized at IIT Jammu, this two-day event provides an immersive learning experience through interactive exhibits, hands-on activities, and thought-provoking discussions.
                    With 100+ schools and 4000+ students expected to participate, Pragyaan serves as a platform to bridge the gap between academia, industry, and young minds. The event promotes STEAM education (Science, Technology, Engineering, Arts, and Mathematics) and encourages students to explore emerging fields like Artificial Intelligence, Robotics, Drones, AR/VR, and Astronomy.
                    Additionally, students can engage in artistic, literary, and scientific activities, interact with experts, and witness cutting-edge innovations. The presence of esteemed dignitaries, including the Honourable Minister of Science and Technology, Dr. Jitendra Singh, makes this event an unparalleled opportunity for inspiration and learning.
                    Join us at Pragyaan and step into a world of creativity, knowledge, and discovery! 🚀</p>
            </section>
            <section className={`${styles.sec}`}>
                <KeyAttractions/>
            </section>
            <section className={styles.whyAttend}>
                <h2>WHY ATTEND?</h2>
                <ul>
                    <li>Increase awareness and enthusiasm among students about emerging technologies and STEM careers.</li>
                    <li>Strengthened collaboration between IIT Jammu and schools in the region.</li>
                    <li>Hands-on learning opportunities fostering innovation and scientific curiosity.</li>
                    <li>Exposure to research and mentorship programs for both students & educators.</li>
                </ul>
            </section>

            <section>
                {/* <Testimonials /> */}
                <br />
            </section>
            <section>

            </section>

            <br /><br /><br /><br /><br />
            </div>
        </>
    );
};

export default Home;
