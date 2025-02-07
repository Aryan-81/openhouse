"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // Import useAuth

const api = process.env.NEXT_PUBLIC_API_URL;

const LoginPage: React.FC = () => {
    const router = useRouter();
    const { setToken } = useAuth(); // Get setToken from context
    const [email, setEmail] = useState<string>("");
    const [otp, setOtp] = useState<string>("");
    const [showOtpField, setShowOtpField] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const sendOTP = async (email: string) => {
        if (!api) {
            console.error("API URL is not defined.");
            return;
        }

        const mailApi = `${api}/mail/send/`;

        try {
            setLoading(true);
            const response = await fetch(mailApi, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (response.ok && result.message === "OTP sent successfully") {
                setShowOtpField(true);
            } else {
                alert(result.message || "Failed to send OTP.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const submitOTP = async () => {
        if (!api) {
            console.error("API URL is not defined.");
            return;
        }

        const authApi = `${api}/auth/validate/`;
        let role = email.endsWith("iitjammu.ac.in") ? "event_head" : "school";

        try {
            setLoading(true);
            const response = await fetch(authApi, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp, role_id: role }),
            });

            const result = await response.json();

            if (response.ok && result.idToken) {
                setToken(result.idToken); // Store token in context
                router.push("/");
            } else {
                alert(result.message || "Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4" style={{ width: "400px" }}>
                <h1 className="text-center mb-4">Pragyaan</h1>
                {!showOtpField ? (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            sendOTP(email);
                        }}
                    >
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
                        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                            {loading ? "Sending OTP..." : "Submit"}
                        </button>
                    </form>
                ) : (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            submitOTP();
                        }}
                    >
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
                        <button type="submit" className="btn btn-success w-100" disabled={otp.length !== 6 || loading}>
                            {loading ? "Verifying..." : "Login"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginPage;
