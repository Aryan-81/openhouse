'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react'; // Import useEffect and useState
import styles from './HeroSection.module.css'; // Import CSS Module



const HeroSection = () => {
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
        <section 
            className={styles.heroSection} 
            style={{ backgroundImage: "url('/homebg.jpeg')" }}
            aria-label="Hero Section"
        >
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                {/* Main Title and Subtitle */}
                <div className={styles.heading}>
                    <h1 className={styles.mainTitle}>Pragyaan</h1>
                    <h2 className={styles.subtitle}>Ignite Curiosity, Inspire Innovation!</h2>
                    <p className={styles.para}>A unique Open Day at IIT Jammu, bringing together students, educators, and industry leaders to explore the future of education, technology, and creativity.</p>
                    
                </div>

                {/* Countdown Section */}
                <div className={styles.countdownSection}>
                    <p className={styles.countdownText}>Fest starts in</p>
                    <h1 className={styles.countdown} id="demo">
                        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;