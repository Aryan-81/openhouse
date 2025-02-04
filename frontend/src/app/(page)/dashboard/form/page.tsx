"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext"; // Import authentication context
import styles from "./ProfileForm.module.css";

interface FormData {
    name: string;
    address: string;
    district: string;
    state: string;
    affiliation_no: string;
    email: string;
    phone_no: string;
    landline: string;
    typeofschool: string;
    isATL: boolean;
    isTinker: boolean;
    isPMShri: boolean;
    isprevious: boolean;
}
const fieldLabels: Record<string, string> = {
    isATL: "Has ATL?",
    isTinker: "Has Tinkering Lab?",
    isPMShri: "Is your school comes under PM Shri ?",
    isprevious: "Was Previously Intercted?",
};

const ProfileForm: React.FC = () => {
    const { token } = useAuth();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        address: "",
        district: "",
        state: "",
        affiliation_no: "",
        email: "",
        phone_no: "",
        landline: "",
        typeofschool: "",
        isATL: false,
        isTinker: false,
        isPMShri: false,
        isprevious: false,
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
    const api = process.env.NEXT_PUBLIC_API_URL;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: ["isATL", "isTinker", "isPMShri", "isprevious"].includes(name) ? value === "yes" : value,
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

        try {
            const response = await fetch(`${api}/school/update_profile`, {
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
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Profile Form</h1>

            {message && <div className={message.type === "success" ? styles.success : styles.error}>{message.text}</div>}

            <form onSubmit={handleSubmit} className={styles.form}>
                {/* Name */}
                <div className={styles.formGroup}>
                    <label className={styles.label}>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className={styles.input} required />
                </div>

                {/* Address and District */}
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Address:</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>District:</label>
                        <input type="text" name="district" value={formData.district} onChange={handleChange} className={styles.input} required />
                    </div>
                </div>

                {/* Affiliation No. and State */}
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Affiliation No:</label>
                        <input type="text" name="affiliation_no" value={formData.affiliation_no} onChange={handleChange} className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>State:</label>
                        <select name="state" value={formData.state} onChange={handleChange} className={styles.select} required>
                            <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                            <option value="Ladakh">Ladakh</option>
                        </select>
                    </div>
                </div>

                {/* Contact 1 and Landline */}
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Phone No:</label>
                        <input type="tel" name="phone_no" value={formData.phone_no} onChange={handleChange} className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Landline:</label>
                        <input type="tel" name="landline" value={formData.landline} onChange={handleChange} className={styles.input} />
                    </div>
                </div>

                {/* Email and Type of School */}
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Type of School:</label>
                        <select name="typeofschool" value={formData.typeofschool} onChange={handleChange} className={styles.select} required>
                            <option value="">Select Type</option>
                            <option value="Goverment">Goverment</option>
                            <option value="Public">Public</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>

                {/* Additional Fields */}
                {["isATL", "isTinker", "isPMShri", "isprevious"].map((field) => (
                    <div className={styles.formGroup} key={field}>
                        <label className={styles.label}>{fieldLabels[field]}</label>
                        <select name={field} value={formData[field as keyof FormData] ? "yes" : "no"} onChange={handleChange} className={styles.select}>
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
