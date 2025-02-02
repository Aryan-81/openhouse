"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './EventPage.css';

// Importing the image
import photo from './photo.jpg';

// Import Header and Footer
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import the usePathname hook to get the current path
import { usePathname } from "next/navigation";
import { StaticImageData } from "next/image";

// Define the Event interface
interface Event {
    Event_id: string;
    Event_Name: string;
    Event_des_short: string;
    Event_des_long: string;
    Event_Head: string;
    Event_Team: string;
    Contact_Phone_number1: string;
    Contact_Email1: string;
    Contact_Phone_number2: string;
    Contact_Email2: string;
    Pre_Registered: boolean;
    Number_Registered: number;
    Space_Location: string;
    Category: string;
    image?: string | StaticImageData; // Optional image property
}

const templateEvents: Event[] = [
    {
        Event_id: "E001",
        Event_Name: "Tech Symposium",
        Event_des_short: "Annual tech meet-up",
        Event_des_long: "A gathering of technology enthusiasts, developers, and industry experts to discuss the latest advancements in technology.",
        Event_Head: "John Doe",
        Event_Team: "Alice, Bob, Charlie, David",
        Contact_Phone_number1: "+1234567890",
        Contact_Email1: "event.head@example.com",
        Contact_Phone_number2: "+0987654321",
        Contact_Email2: "support@example.com",
        Pre_Registered: true,
        Number_Registered: 150,
        Space_Location: "Hall A1",
        Category: "Technical",
        image: photo, // Example image
    },
    {
        Event_id: "E002",
        Event_Name: "Art Exhibition",
        Event_des_short: "Showcasing contemporary art",
        Event_des_long: "An exhibition featuring modern and classical artworks from renowned artists.",
        Event_Head: "Emily Smith",
        Event_Team: "Sophia, James, Michael",
        Contact_Phone_number1: "+1122334455",
        Contact_Email1: "art.events@example.com",
        Contact_Phone_number2: "+5566778899",
        Contact_Email2: "info@example.com",
        Pre_Registered: false,
        Number_Registered: 80,
        Space_Location: "Gallery B",
        Category: "Off-Stage",
        image: photo, // Example image
    },
    {
        Event_id: "E003",
        Event_Name: "AI Conference",
        Event_des_short: "AI innovations and trends",
        Event_des_long: "A conference exploring artificial intelligence, machine learning, and deep learning technologies.",
        Event_Head: "Robert Johnson",
        Event_Team: "Anna, Kevin, Laura",
        Contact_Phone_number1: "+9876543210",
        Contact_Email1: "ai.conference@example.com",
        Contact_Phone_number2: "+1029384756",
        Contact_Email2: "contact@example.com",
        Pre_Registered: true,
        Number_Registered: 200,
        Space_Location: "Hall C3",
        Category: "Technical",
        image: photo, // Example image
    }
];

const EventPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>(templateEvents);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null); // Selected event for pop-up
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false); // For showing/hiding the pop-up

    // Derive categories dynamically from the events array
    const categories = Array.from(new Set(events.map(event => event.Category)));

    // Get the current pathname
    const pathname = usePathname();

    useEffect(() => {
        // axios.get("http://127.0.0.1:8000/api/events/") // Replace with your Django server URL
        //     .then(response => setEvents(response.data))
        //     .catch(error => console.error("Error fetching events:", error));
    }, []);


    const handleViewMore = (event: Event) => {
        setSelectedEvent(event);
        setIsPopupVisible(true); // Show the pop-up card when "View More" is clicked
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false); // Close the pop-up card
        setSelectedEvent(null); // Clear the selected event
    };

    const renderHeaderFooter = pathname === "/event";

    return (
        <>
            {/* Conditionally render Header */}
            {renderHeaderFooter && <Header />}

            <div className="event-container">
                {categories.map(category => (
                    <div key={category} className="event-category">
                        <div className="category-header">
                            <h2 className="category-title">{category} Events</h2>
                        
                        </div>


                        <div className="full-list">
                            {events.filter(event => event.Category === category).map(event => (
                                <div key={event.Event_id} className="event-card">
                                    {event.image && (
                                        <img
                                            src={typeof event.image === 'string' ? event.image : event.image.src}
                                            alt={event.Event_Name}
                                            className="event-image"
                                        />
                                    )}
                                    <h3 className="event-name">{event.Event_Name}</h3>
                                    <p className="event-description">{event.Event_des_short}</p>
                                    <button className="view-more-button" onClick={() => handleViewMore(event)}>
                                        View More
                                    </button>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>

            {/* Pop-up for full event details */}
            {isPopupVisible && selectedEvent && (
                <>
                    <div className="popup-backdrop" onClick={handleClosePopup}></div>
                    <div className="event-popup">
                        <button className="close-popup" onClick={handleClosePopup}>×</button>
                        <h2>{selectedEvent.Event_Name}</h2>
                        <p>{selectedEvent.Event_des_long}</p>
                        <div className="contact-info">
                            <p><strong>Contact:</strong> {selectedEvent.Contact_Phone_number1}</p>
                            <p><strong>Email:</strong> {selectedEvent.Contact_Email1}</p>
                        </div>
                        <div className="registered-students">
                            <p><strong>Registered Students:</strong> {selectedEvent.Number_Registered}</p>
                        </div>
                        <p><strong>Location:</strong> {selectedEvent.Space_Location}</p>
                        <p><strong>Category:</strong> {selectedEvent.Category}</p>
                        {selectedEvent.Pre_Registered ? (
                            <button className="register-button">Register</button>
                        ) : (
                            <h3>Open for all</h3>
                        )}
                    </div>
                </>
            )}

            {/* Conditionally render Footer */}
            {renderHeaderFooter && <Footer />}
        </>
    );
};

export default EventPage;