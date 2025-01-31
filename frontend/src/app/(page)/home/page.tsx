'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventPage from "../event/page";
import { useEffect, useState } from 'react';
import styles from './home.module.css'; // Import your CSS module

interface EventType {
    type_id: number;
    type_title: string;
}

interface HomeProps {
    eventTypes: EventType[];
}

const Home: React.FC<HomeProps> = ({ eventTypes }) => {
    // State to store the countdown time
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Target date for the countdown (replace with your fest start date)
    const targetDate = new Date('2025-02-16T00:00:00').getTime();

    useEffect(() => {
        // Update the countdown every second
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                // Calculate days, hours, minutes, and seconds
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                // Update the state
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                // If the countdown is over, clear the interval
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <>
            <Header />
            <section className={styles.heroSection} style={{ backgroundImage: 'url(/homebg.jpeg)' }} aria-label="Hero Section">
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <h1 className={styles.mainTitle}>Pragyaan</h1>
                        <h2 className={styles.subtitle}>Open Day Outreach Program</h2>
                    </div>

                    <div className={styles.countdownSection}>
                        <p className={styles.countdownText}>Fest starts in</p>
                        <h1 className={styles.countdown}>
                            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
                        </h1>
                    </div>
                </div>
            </section>
            <EventPage />

            <Footer />
        </>
    );
};

export default Home;
