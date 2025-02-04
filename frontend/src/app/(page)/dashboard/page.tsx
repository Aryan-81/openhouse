"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "@/context/AuthContext";
import styles from "./dashboard.module.css";
import Link from "next/link";

interface SchoolDetails {
    School_Name: string;
    address: string;
    district: string;
    state: string;
    zipcode: string;
    email: string;
    phone_no: string;
    landline: string;
    affiliation_no: string;
    typeofschool: string;
    isATL: boolean;
    isTinker: boolean;
    isPMShri: boolean;
    isprevious: boolean;
    isverified: boolean;
}

const DashboardPage: React.FC = () => {
    const { token } = useAuth();
    const [schoolDetails, setSchoolDetails] = useState<SchoolDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const api = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        if (!token) return;

        const fetchSchoolProfile = async () => {
            try {
                const response = await fetch(`${api}/school/sch_profile`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `idToken ${token}`,
                    },
                });
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

                const data = await response.json();
                setSchoolDetails(data.profile);
            } catch (error) {
                console.error("Error fetching school profile:", error);
                setSchoolDetails(null);
            } finally {
                setLoading(false);
            }
        };

        fetchSchoolProfile();
    }, [token]);

    if (loading) return <div className="container mt-5 text-center">Loading...</div>;
    if (!schoolDetails) return <div className="container mt-5 text-center text-danger">Failed to load school details.</div>;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.backImage}>
                <img src="https://iitjammu.ac.in/slider/slider3.jpg" alt="Background Image" />
            </div>

            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardImage}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2GINCiqV-9Uw2MbxevQjiJGD2fdO6WKaGBQ&s"
                        alt={`${schoolDetails?.School_Name} Logo`}
                    /> 
                </div>

                <div className={styles.dashboardContent}>
                    <div className={styles.eventdets}>
                        <div className={styles.card}>
                            <h4>XX</h4>
                            <p>Events Registered</p>
                        </div>
                        <div className={styles.card}>
                            <h4>XX</h4>
                            <p>Students Registered</p>
                        </div>
                    </div>
                    <Link className={styles.editbtn} href="/dashboard/form">Edit</Link>

                    <h3>{schoolDetails?.School_Name}</h3>
                    <div className={styles.dets}>
                        <div className={styles.detsLeft}>
                            <p><span>Address:</span> {schoolDetails?.address}</p>
                            <p><span>District:</span> {schoolDetails?.district}, <span>State:</span> {schoolDetails?.state}</p>
                            <p><span>Zipcode:</span> {schoolDetails?.zipcode}</p>
                            <p><span>Email:</span> {schoolDetails?.email}</p>
                            <p><span>Phone No:</span> {schoolDetails?.phone_no}</p>
                            <p><span>Landline:</span> {schoolDetails?.landline}</p>
                            <p><span>Affiliation No:</span> {schoolDetails?.affiliation_no}</p>
                        </div>
                        <div className={styles.detsRight}>
                            <p><span>Type of School:</span> {schoolDetails?.typeofschool}</p>
                            <p><span>ATL Lab:</span> {schoolDetails?.isATL ? "Yes" : "No"}</p>
                            <p><span>Tinker Lab:</span> {schoolDetails?.isTinker ? "Yes" : "No"}</p>
                            <p><span>PM Shri School:</span> {schoolDetails?.isPMShri ? "Yes" : "No"}</p>
                            <p><span>Previous Interaction:</span> {schoolDetails?.isprevious ? "Yes" : "No"}</p>
                            <p><span>Verified:</span> {schoolDetails?.isverified ? "Yes" : "No"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
