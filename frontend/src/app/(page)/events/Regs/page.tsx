'use client'
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Use next/navigation for App Router
import styles from "./EventRegistration.module.css";

const EventRegistration: React.FC = () => {
    const router = useRouter(); // Correct initialization of router for App Router
    const searchParams = useSearchParams(); // Use useSearchParams to access query parameters
    const eventId = searchParams.get("eventId"); // Get eventId from query params
    const eventName = searchParams.get("eventName"); // Get eventName from query params
    
    const [studentNum, setStudentNum] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Simulating successful registration with a variable
        setTimeout(() => {
            alert("Registration successful!");
            router.push("/events"); // Redirect after registration
            setLoading(false);
        }, 1000);
    };

    return (
        <div className={styles.registrationContainer}>
            <h2>Register for {eventName}</h2>
            <form onSubmit={handleRegister} className={styles.registrationForm}>
                <div className={styles.formGroup}>
                    <label>Event</label>
                    <input type="text" value={eventName || ''} disabled className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                    <label>School</label>
                    <input type="text" value={'sample name'} disabled className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                    <label>Student Number</label>
                    <input 
                        type="text" 
                        value={studentNum} 
                        onChange={(e) => setStudentNum(e.target.value)} 
                        required 
                        className={styles.inputField}
                    />
                </div>
                {error && <p className={styles.errorMessage}>{error}</p>}
                <button type="submit" disabled={loading} className={styles.registerButton}>
                    {loading ? "Registering..." : "Register"}
                </button>
            </form>
        </div>
    );
};

export default EventRegistration;
