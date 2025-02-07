'use client'
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Use next/navigation for App Router
import styles from "./EventRegistration.module.css";
import { useAuth } from "@/context/AuthContext"; // Import authentication context

const EventRegistration: React.FC = () => {
    const { token } = useAuth();
    const router = useRouter(); // Correct initialization of router for App Router
    const searchParams = useSearchParams(); // Use useSearchParams to access query parameters
    const eventId = searchParams.get("eventId"); // Get eventId from query params
    const eventName = searchParams.get("eventName"); // Get eventName from query params
    const [studentNum, setStudentNum] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    

    const api = process.env.NEXT_PUBLIC_API_URL;
    const register = async () => {
        try {
            const response = await fetch(`${api}register_event/RegisterEventList/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `idToken ${token}`,
                },
                body: JSON.stringify({'Event_id':eventId,'RStudent_Num':studentNum})
            });
            
            console.log(response.body)
            
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };
   


    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        register();
        alert("Registration Successful")
        router.push("/events"); 
        setLoading(false);
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
