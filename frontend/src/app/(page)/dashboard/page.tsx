import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const DashboardPage: React.FC = () => {
    // Hardcoded data for demonstration
    const schoolDetails = {
        school_id: '234', // Not displayed
        name: 'Green Valley High School',
        address: '123 Education Lane, Knowledge City',
        contact: 'contact@greenvalley.edu | +91 9876543210',
        district: 'Boya',
        state: 'UP',
        affiliation_no: '234322342',
        email: 'sometion@email.com',
        phone_no: '2321312312',
        landline: '234-23423',
        typeofschool: 'Public/Gov/Private/Funded/Other',
        isATL: 'Yes', // Either they have ATL lab or not
        isTinker: 'No', // Either they have Tinker lab
        isPMShri: 'Yes', // Is that school fall under PM Shri
        isprevious: 'No', // Whether they have previous interaction with us or not
        isverified: 'No'
    };

    const scheduled_slot = {
        date: '2023-11-10',
        from_time: '10:00 AM',
        to_time: '12:00 PM',
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">School Dashboard</h1>

            {/* School Details Section */}
            <div className="card mb-4 shadow-sm">
                <div className="card-header bg-primary text-white">
                    <h5 className="card-title mb-0">School Details</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        <strong>Name:</strong> {schoolDetails.name}
                    </p>
                    <p className="card-text">
                        <strong>Address:</strong> {schoolDetails.address}
                    </p>
                    <p className="card-text">
                        <strong>Contact:</strong> {schoolDetails.contact}
                    </p>
                    <p className="card-text">
                        <strong>District:</strong> {schoolDetails.district}
                    </p>
                    <p className="card-text">
                        <strong>State:</strong> {schoolDetails.state}
                    </p>
                    <p className="card-text">
                        <strong>Affiliation No:</strong> {schoolDetails.affiliation_no}
                    </p>
                    <p className="card-text">
                        <strong>Email:</strong> {schoolDetails.email}
                    </p>
                    <p className="card-text">
                        <strong>Phone No:</strong> {schoolDetails.phone_no}
                    </p>
                    <p className="card-text">
                        <strong>Landline:</strong> {schoolDetails.landline}
                    </p>
                    <p className="card-text">
                        <strong>Type of School:</strong> {schoolDetails.typeofschool}
                    </p>
                    <p className="card-text">
                        <strong>ATL Lab:</strong> {schoolDetails.isATL}
                    </p>
                    <p className="card-text">
                        <strong>Tinker Lab:</strong> {schoolDetails.isTinker}
                    </p>
                    <p className="card-text">
                        <strong>PM Shri School:</strong> {schoolDetails.isPMShri}
                    </p>
                    <p className="card-text">
                        <strong>Previous Interaction:</strong> {schoolDetails.isprevious}
                    </p>
                    <p className="card-text">
                        <strong>Verified:</strong> {schoolDetails.isprevious}
                    </p>
                </div>
            </div>

            {/* Scheduled Slot Section */}
            <div className="card mb-4 shadow-sm">
                <div className="card-header bg-success text-white">
                    <h5 className="card-title mb-0">Scheduled Slot</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        <strong>Date:</strong> {scheduled_slot.date}
                    </p>
                    <p className="card-text">
                        <strong>From:</strong> {scheduled_slot.from_time}
                    </p>
                    <p className="card-text">
                        <strong>To:</strong> {scheduled_slot.to_time}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;