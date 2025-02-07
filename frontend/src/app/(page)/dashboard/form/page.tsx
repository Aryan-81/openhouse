"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext"; // Import authentication context
import styles from "./ProfileForm.module.css";
import { redirect } from "next/navigation";

interface FormData {
    School_Name: string;
    School_Address: string;
    School_District: string;
    School_State: string;
    School_Affiliation_number: string;
    School_Zipcode: string;
    School_Phone_number: string;
    School_Landline_number: string;
    School_IsPublic: string;
    School_IsAtl: string;
    School_IsTinkering: string;
    School_IsPmshri: string;
    School_IsPreviousEng: string;
    status: string;
}
const fieldLabels: Record<string, string> = {
    School_IsAtl: "Has ATL?",
    School_IsTinkering: "Has Tinkering Lab?",
    School_IsPmshri: "Is your school comes under PM Shri ?",
    School_IsPreviousEng: "Was Previously Interacted?",
};

const ProfileForm: React.FC = () => {
    const { token } = useAuth();
    const [formData, setFormData] = useState<FormData>({
        School_Name: "",
        School_Address: "",
        School_District: "",
        School_State: "Jammu & Kashmir",
        School_Affiliation_number: "",
        School_Zipcode: "",
        School_Phone_number: "",
        School_Landline_number: "",
        School_IsPublic: "",
        School_IsAtl: "No",
        School_IsTinkering: "No",
        School_IsPmshri: "No",
        School_IsPreviousEng: "No",
        status: "1"
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
    const api = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch(`${api}school/sch_profile`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `idToken ${token}`,
                    },
                });
                const data = await response.json();
                if (data.profile !== undefined) {
                    setFormData(data.profile);
                }
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        if (token) {
            getdata();
        }
    }, [token, api]); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: ["School_IsAtl", "School_IsTinkering", "School_IsPmshri", "School_IsPreviousEng"].includes(name) ? (value === "yes" ? "yes" : "no") : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!token) {
            setMessage({ type: "error", text: "Authentication failed. Please log in again." });
            return;
        }

        setLoading(true);
        setMessage(null);
        console.log(formData);
        try {
            const response = await fetch(`${api}school/sch_profile`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `idToken ${token}`,
                },
                body: JSON.stringify(formData),
            });
           
            const result = await response.json();
            if (!response.ok) throw new Error(result.message || "Failed to update profile");

            setMessage({ type: "success", text: "Profile updated successfully!" });
        } catch (error) {
            setMessage({ type: "error", text: (error as Error).message });
        } finally {
            setLoading(false);
        }
        redirect('/dashboard')
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Profile Form</h1>

            {message && <div className={message.type === "success" ? styles.success : styles.error}>{message.text}</div>}

            <form onSubmit={handleSubmit} className={styles.form}>
                {/* Other fields remain unchanged */}
                 {/* Name */}
                 <div className={styles.formGroup}>
                    <label className={styles.label}>Name:</label>
                    <input type="text" name="School_Name" value={formData.School_Name} onChange={handleChange} className={styles.input} required />
                </div>

                {/* Address and District */}
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Address:</label>
                        <input type="text" name="School_Address" value={formData.School_Address} onChange={handleChange} className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>District:</label>
                        <input type="text" name="School_District" value={formData.School_District} onChange={handleChange} className={styles.input} required />
                    </div>
                </div>

                {/* Affiliation No. and State */}
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Affiliation No:</label>
                        <input type="text" name="School_Affiliation_number" value={formData.School_Affiliation_number} onChange={handleChange} className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>State:</label>
                        <select name="School_State" value={formData.School_State} onChange={handleChange} className={styles.select} required>
                            <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                            <option value="Ladakh">Ladakh</option>
                        </select>
                    </div>
                </div>

                {/* Contact 1 and Landline */}
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Phone No:</label>
                        <input type="tel" name="School_Phone_number" value={formData.School_Phone_number} onChange={handleChange} className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Landline:</label>
                        <input type="tel" name="School_Landline_number" value={formData.School_Landline_number} onChange={handleChange} className={styles.input} />
                    </div>
                </div>

                {/* Email and Type of School */}
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Zip Code:</label>
                        <input type="text" name="School_Zipcode" value={formData.School_Zipcode} onChange={handleChange} className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Type of School:</label>
                        <select name="School_IsPublic" value={formData.School_IsPublic} onChange={handleChange} className={styles.select} required>
                            <option value="">Select Type</option>
                            <option value="Goverment">Goverment</option>
                            <option value="Public">Public</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>

                {/* Additional Fields */}
                {["School_IsAtl", "School_IsTinkering", "School_IsPmshri", "School_IsPreviousEng"].map((field) => (
                    <div className={styles.formGroup} key={field}>
                        <label className={styles.label}>{fieldLabels[field]}</label>
                        <select name={field} value={formData[field as keyof FormData]} onChange={handleChange} className={styles.select}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                ))}

                {/* Submit Button */}
                <button type="submit" className={styles.button} disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default ProfileForm;