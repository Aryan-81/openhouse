"use client";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useAuth } from '@/context/AuthContext'; // Import Auth Context

const DashboardPage: React.FC = () => {
    const { token } = useAuth(); // Get stored token
    const [schoolDetails, setSchoolDetails] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const api = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const fetchSchoolProfile = async () => {
            if (!token) return;

            try {
                const response = await fetch(`${api}/school/sch_profile`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `idToken ${token}`,
                    },
                });

                const data = await response.json();
                console.log("School Profile Data:", data); // Log API response
                setSchoolDetails(data.profile);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching school profile:", error);
                setLoading(false);
            }
        };

        fetchSchoolProfile();
    }, [token]);

    if (loading) {
        return <div className="container mt-5 text-center">Loading...</div>;
    }

    if (!schoolDetails) {
        return <div className="container mt-5 text-center text-danger">Failed to load school details.</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">School Dashboard</h1>

            {/* School Details Section */}
            <div className="card mb-4 shadow-sm">
                <div className="card-header bg-primary text-white">
                    <h5 className="card-title mb-0">School Details</h5>
                </div>
                <div className="card-body">
                    <p className="card-text"><strong>Name:</strong> {schoolDetails.School_Name}</p>
                    <p className="card-text"><strong>Address:</strong> {schoolDetails.address}</p>
                    <p className="card-text"><strong>Contact:</strong> {schoolDetails.contact}</p>
                    <p className="card-text"><strong>District:</strong> {schoolDetails.district}</p>
                    <p className="card-text"><strong>State:</strong> {schoolDetails.state}</p>
                    <p className="card-text"><strong>Affiliation No:</strong> {schoolDetails.affiliation_no}</p>
                    <p className="card-text"><strong>Email:</strong> {schoolDetails.email}</p>
                    <p className="card-text"><strong>Phone No:</strong> {schoolDetails.phone_no}</p>
                    <p className="card-text"><strong>Landline:</strong> {schoolDetails.landline}</p>
                    <p className="card-text"><strong>Type of School:</strong> {schoolDetails.typeofschool}</p>
                    <p className="card-text"><strong>ATL Lab:</strong> {schoolDetails.isATL}</p>
                    <p className="card-text"><strong>Tinker Lab:</strong> {schoolDetails.isTinker}</p>
                    <p className="card-text"><strong>PM Shri School:</strong> {schoolDetails.isPMShri}</p>
                    <p className="card-text"><strong>Previous Interaction:</strong> {schoolDetails.isprevious}</p>
                    <p className="card-text"><strong>Verified:</strong> {schoolDetails.status}</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
