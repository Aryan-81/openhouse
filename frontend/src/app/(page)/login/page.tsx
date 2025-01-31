"use client";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [otp, setOtp] = useState<string>('');
    const [showOtpField, setShowOtpField] = useState<boolean>(false);

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validate email (basic validation)
        if (email.includes('@gmail.com')) {
            setShowOtpField(true);
            console.log('Email submitted:', email);
            // Simulate sending OTP to the user's email
            alert('OTP sent to your email!');
        } else {
            alert('Please enter a valid Gmail address.');
        }
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validate OTP (basic validation)
        if (otp.length === 6) {
            console.log('OTP submitted:', otp);
            alert('Login successful!');
            // Redirect or perform further actions
        } else {
            alert('Please enter a valid 6-digit OTP.');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4" style={{ width: '400px' }}>
                <h1 className="text-center mb-4">Pragyaan</h1>
                {!showOtpField ? (
                    <form onSubmit={handleEmailSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Enter your Gmail:
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="example@gmail.com"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Submit
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleOtpSubmit}>
                        <div className="mb-3">
                            <label htmlFor="otp" className="form-label">
                                Enter OTP:
                            </label>
                            <input
                                type="text"
                                id="otp"
                                className="form-control"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="123456"
                                maxLength={6}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100">
                            Login
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginPage;