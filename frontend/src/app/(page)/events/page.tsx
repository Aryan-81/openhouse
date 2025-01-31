"use client";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const EventsPage: React.FC = () => {
    // Unified data structure for events
    const events = [
        {
            id: 1,
            name: 'Science Exhibition',
            shortDescription: 'Explore the wonders of science.',
            longDescription: 'A detailed exploration of scientific concepts and innovations.',
            eventHead: 'Dr. John Doe',
            helpContact: {
                phone: ['+91 9876543210', '+91 1234567890'],
                email: ['science@example.com', 'support@example.com'],
            },
            teamMembers: ['Alice', 'Bob', 'Charlie'],
            isPreRegistered: true,
            registeredStudents: 120,
            eventLocation: 'Main Auditorium',
            category: 'Open Events',
        },
        {
            id: 2,
            name: 'Robotics Workshop',
            shortDescription: 'Hands-on session on building robots.',
            longDescription: 'Learn to design, build, and program robots from scratch.',
            eventHead: 'Dr. Jane Smith',
            helpContact: {
                phone: ['+91 5555555555', '+91 6666666666'],
                email: ['robotics@example.com', 'help@example.com'],
            },
            teamMembers: ['David', 'Eva', 'Frank'],
            isPreRegistered: false,
            registeredStudents: 80,
            eventLocation: 'Tech Lab 1',
            category: 'Registered Events',
        },
        // Add more events as needed
    ];

    // State to manage the selected event for the modal
    const [selectedEvent, setSelectedEvent] = useState<any>(null);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Events and Stalls</h1>

            {/* Display all events in a single list */}
            <div className="row">
                {events.map((event) => (
                    <div key={event.id} className="col-md-6 mb-4">
                        <div
                            className="card h-100 shadow-sm"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setSelectedEvent(event)}
                        >
                            <div className="card-body">
                                <h5 className="card-title">{event.name}</h5>
                                <p className="card-text">{event.shortDescription}</p>
                                <small className="text-muted">
                                    <strong>Category:</strong> {event.category}
                                </small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal to show event details */}
            {selectedEvent && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedEvent.name}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setSelectedEvent(null)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Long Description:</strong> {selectedEvent.longDescription}</p>
                                <p><strong>Event Head:</strong> {selectedEvent.eventHead}</p>
                                <p>
                                    <strong>Help Contact:</strong>
                                    <ul>
                                        {selectedEvent.helpContact.phone.map((phone: string, index: number) => (
                                            <li key={index}>Phone: {phone}</li>
                                        ))}
                                        {selectedEvent.helpContact.email.map((email: string, index: number) => (
                                            <li key={index}>Email: {email}</li>
                                        ))}
                                    </ul>
                                </p>
                                <p>
                                    <strong>Team Members:</strong>
                                    <ul>
                                        {selectedEvent.teamMembers.map((member: string, index: number) => (
                                            <li key={index}>{member}</li>
                                        ))}
                                    </ul>
                                </p>
                                <p><strong>Pre-Registered:</strong> {selectedEvent.isPreRegistered ? 'Yes' : 'No'}</p>
                                <p><strong>Registered Students:</strong> {selectedEvent.registeredStudents}</p>
                                <p><strong>Event Location:</strong> {selectedEvent.eventLocation}</p>
                                <p><strong>Category:</strong> {selectedEvent.category}</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setSelectedEvent(null)}
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => setSelectedEvent(null)}
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventsPage;