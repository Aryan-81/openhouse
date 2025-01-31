"use client";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const FormPage: React.FC = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        contact: '',
        district: '',
        state: '',
        affiliation_no: '',
        email: '',
        phone_no: '',
        landline: '',
        typeofschool: '',
        isATL: '',
        isTinker: '',
        isPMShri: '',
        isprevious: '',
    });

    const [scheduled_slot, setScheduledSlot] = useState({
        date: '',
        from_time: '',
        to_time: '',
    });

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSlotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setScheduledSlot({
            ...scheduled_slot,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        console.log('Scheduled Slot:', scheduled_slot);
        alert('Form submitted successfully!');
        // You can send the data to an API or redirect to the dashboard page
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">School Registration Form</h1>
            <form onSubmit={handleSubmit}>
                {/* School Details Section */}
                <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                        <h5 className="card-title mb-0">School Details</h5>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                School Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="form-control"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">
                                Contact
                            </label>
                            <input
                                type="text"
                                id="contact"
                                name="contact"
                                className="form-control"
                                value={formData.contact}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="district" className="form-label">
                                District
                            </label>
                            <input
                                type="text"
                                id="district"
                                name="district"
                                className="form-control"
                                value={formData.district}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="state" className="form-label">
                                State
                            </label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                className="form-control"
                                value={formData.state}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="affiliation_no" className="form-label">
                                Affiliation Number
                            </label>
                            <input
                                type="text"
                                id="affiliation_no"
                                name="affiliation_no"
                                className="form-control"
                                value={formData.affiliation_no}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone_no" className="form-label">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phone_no"
                                name="phone_no"
                                className="form-control"
                                value={formData.phone_no}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="landline" className="form-label">
                                Landline
                            </label>
                            <input
                                type="text"
                                id="landline"
                                name="landline"
                                className="form-control"
                                value={formData.landline}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="typeofschool" className="form-label">
                                Type of School
                            </label>
                            <select
                                id="typeofschool"
                                name="typeofschool"
                                className="form-select"
                                value={formData.typeofschool}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Type</option>
                                <option value="Public">Public</option>
                                <option value="Government">Government</option>
                                <option value="Private">Private</option>
                                <option value="Funded">Funded</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="isATL" className="form-label">
                                ATL Lab
                            </label>
                            <select
                                id="isATL"
                                name="isATL"
                                className="form-select"
                                value={formData.isATL}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="isTinker" className="form-label">
                                Tinker Lab
                            </label>
                            <select
                                id="isTinker"
                                name="isTinker"
                                className="form-select"
                                value={formData.isTinker}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="isPMShri" className="form-label">
                                PM Shri School
                            </label>
                            <select
                                id="isPMShri"
                                name="isPMShri"
                                className="form-select"
                                value={formData.isPMShri}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="isprevious" className="form-label">
                                Previous Interaction
                            </label>
                            <select
                                id="isprevious"
                                name="isprevious"
                                className="form-select"
                                value={formData.isprevious}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-lg">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormPage;