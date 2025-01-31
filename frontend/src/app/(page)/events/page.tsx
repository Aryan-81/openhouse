"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./EventPage.css";

// Importing the image
import photo from './photo.jpg';

// Import Header and Footer
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import the usePathname hook to get the current path
import { usePathname } from "next/navigation";
import { StaticImageData } from "next/image";

// Update the interface to accept imported images or string URLs
interface Event {
    id: string;
    name: string;
    description: string;
    image: string | StaticImageData;
    category: string;
    longDescription: string;
    contactInfo: {
        phone: string;
        email: string;
    };
    registeredStudentsCount: number; // Updated to hold the count of registered students
    location: string;
}

const categories = ["Technical", "Gaming", "Off-Stage", "On-Stage"];

const templateEvents: Event[] = [
    { 
        id: "1", 
        name: "Hackathon", 
        description: "A coding competition.", 
        image: photo, 
        category: "Technical", 
        longDescription: "A full day event where coders compete to solve complex problems.", 
        contactInfo: { phone: "123-456-7890", email: "contact@hackathon.com" },
        registeredStudentsCount: 50, 
        location: "Room 101"
    },
    { 
        id: "2", 
        name: "LAN Gaming", 
        description: "Multiplayer gaming event.", 
        image: photo, 
        category: "Gaming", 
        longDescription: "A fast-paced multiplayer gaming event where teams compete for glory.", 
        contactInfo: { phone: "987-654-3210", email: "gaming@event.com" },
        registeredStudentsCount: 90, 
        location: "Hall A"
    },
    { 
        id: "3", 
        name: "Singing Competition", 
        description: "Showcase your singing talent.", 
        image: photo, 
        category: "Off-Stage", 
        longDescription: "A stage to show your vocal talent, compete with other amazing singers.", 
        contactInfo: { phone: "234-567-8901", email: "singing@event.com" },
        registeredStudentsCount: 30, 
        location: "Room 202"
    },
    { 
        id: "4", 
        name: "Drama Performance", 
        description: "Live stage drama.", 
        image: photo, 
        category: "On-Stage", 
        longDescription: "A live drama performance showcasing amazing acting skills and creativity.", 
        contactInfo: { phone: "345-678-9012", email: "drama@event.com" },
        registeredStudentsCount: 12, 
        location: "Auditorium"
    },
    { 
        id: "5", 
        name: "Code Jam", 
        description: "Competitive coding event.", 
        image: photo, 
        category: "Technical", 
        longDescription: "Test your coding skills and solve challenging problems in a time-constrained environment.", 
        contactInfo: { phone: "456-789-0123", email: "codejam@event.com" },
        registeredStudentsCount: 70, 
        location: "Lab 305"
    },
    { 
        id: "6", 
        name: "VR Gaming Tournament", 
        description: "Virtual reality gaming competition.", 
        image: photo, 
        category: "Gaming", 
        longDescription: "Experience the future of gaming with immersive VR experiences in this tournament.", 
        contactInfo: { phone: "567-890-1234", email: "vrgaming@event.com" },
        registeredStudentsCount: 50, 
        location: "VR Hall"
    },
    { 
        id: "7", 
        name: "Dance Battle", 
        description: "A dance competition for all styles.", 
        image: photo, 
        category: "Off-Stage", 
        longDescription: "Bring your best moves to the stage in a battle against other dancers.", 
        contactInfo: { phone: "678-901-2345", email: "dancebattle@event.com" },
        registeredStudentsCount: 40, 
        location: "Dance Studio"
    },
    { 
        id: "8", 
        name: "Comedy Night", 
        description: "Stand-up comedy performances.", 
        image: photo, 
        category: "On-Stage", 
        longDescription: "A night filled with laughter as stand-up comedians perform live.", 
        contactInfo: { phone: "789-012-3456", email: "comedynight@event.com" },
        registeredStudentsCount: 20, 
        location: "Comedy Stage"
    },
    { 
        id: "9", 
        name: "AI Challenge", 
        description: "Build AI models in a race against time.", 
        image: photo, 
        category: "Technical", 
        longDescription: "Compete to build the most efficient AI model within a limited time frame.", 
        contactInfo: { phone: "890-123-4567", email: "aichallenge@event.com" },
        registeredStudentsCount: 100, 
        location: "Room 401"
    },
    { 
        id: "10", 
        name: "E-sports Tournament", 
        description: "A competitive e-sports tournament.", 
        image: photo, 
        category: "Gaming", 
        longDescription: "Battle it out in a competitive e-sports tournament with exciting prizes.", 
        contactInfo: { phone: "901-234-5678", email: "esports@event.com" },
        registeredStudentsCount: 80, 
        location: "Gaming Arena"
    },
    { 
        id: "11", 
        name: "Poetry Slam", 
        description: "Express yourself in poetry.", 
        image: photo, 
        category: "Off-Stage", 
        longDescription: "A stage to perform your poetry and express your emotions through words.", 
        contactInfo: { phone: "123-890-1234", email: "poetryslam@event.com" },
        registeredStudentsCount: 25, 
        location: "Room 302"
    },
    { 
        id: "12", 
        name: "Talent Show", 
        description: "Show off your hidden talent.", 
        image: photo, 
        category: "On-Stage", 
        longDescription: "An event to showcase any talent you have, be it singing, dancing, or any other skill.", 
        contactInfo: { phone: "234-567-8901", email: "talentshow@event.com" },
        registeredStudentsCount: 60, 
        location: "Main Stage"
    },
    { 
        id: "13", 
        name: "Coding Bootcamp", 
        description: "Learn coding in a day.", 
        image: photo, 
        category: "Technical", 
        longDescription: "An intensive one-day coding bootcamp for beginners to intermediate programmers.", 
        contactInfo: { phone: "999-999-9999", email: "codingbootcamp@event.com" },
        registeredStudentsCount: 120, 
        location: "Room 202"
    }
];


const EventPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>(templateEvents);
    const [showFullList, setShowFullList] = useState<string | null>(null); // To track which category's full list to show
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null); // Selected event for pop-up
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false); // For showing/hiding the pop-up

    // Get the current pathname
    const pathname = usePathname();

    useEffect(() => {
        // Uncomment the API call if you're using live data
        // axios.get("https://your-backend-api.com/events") // Replace with actual API
        //   .then(response => setEvents(response.data))
        //   .catch(error => console.error("Error fetching events:", error));
    }, []);

    const handleViewFullList = (category: string) => {
        // Toggle visibility of full list
        if (showFullList === category) {
            setShowFullList(null); // Close the list if it's already open
        } else {
            setShowFullList(category); // Open the full list for the clicked category
        }
    };

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
                            <button 
                                className="view-button" 
                                onClick={() => handleViewFullList(category)}
                            >
                                {showFullList === category ? "Close List" : "View Full List"}
                            </button>
                        </div>

                        {showFullList === category ? (
                            <div className="full-list">
                                {events.filter(event => event.category === category).map(event => (
                                    <div key={event.id} className="event-card">
                                        <img src={typeof event.image === 'string' ? event.image : event.image.src} alt={event.name} className="event-image" />
                                        <h3 className="event-name">{event.name}</h3>
                                        <p className="event-description">{event.description}</p>
                                        <button className="view-more-button" onClick={() => handleViewMore(event)}>
                                            View More
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <Carousel
                                showArrows
                                infiniteLoop
                                showThumbs={false}
                                autoPlay
                                interval={3000} // Automatic slide change every 3 seconds
                                transitionTime={500} // Smooth transition between slides
                                className="event-carousel"
                            >
                                {events.filter(event => event.category === category).map(event => (
                                    <div key={event.id} className="event-card">
                                        <img src={typeof event.image === 'string' ? event.image : event.image.src} alt={event.name} className="event-image" />
                                        <h3 className="event-name">{event.name}</h3>
                                        <p className="event-description">{event.description}</p>
                                        <button className="view-more-button" onClick={() => handleViewMore(event)}>
                                            View More
                                        </button>
                                    </div>
                                ))}
                            </Carousel>
                        )}
                    </div>
                ))}
            </div>

            {/* Pop-up for full event details */}
            {isPopupVisible && selectedEvent && (
                <>
                    <div className="popup-backdrop" onClick={handleClosePopup}></div>
                    <div className="event-popup">
                        <button className="close-popup" onClick={handleClosePopup}>×</button>
                        <h2>{selectedEvent.name}</h2>
                        <p>{selectedEvent.longDescription}</p>
                        <div className="contact-info">
                            <p><strong>Contact:</strong> {selectedEvent.contactInfo.phone}</p>
                            <p><strong>Email:</strong> {selectedEvent.contactInfo.email}</p>
                        </div>
                        <div className="registered-students">
                            <p><strong>Registered Students:</strong> {selectedEvent.registeredStudentsCount}</p>
                        </div>
                        <p><strong>Location:</strong> {selectedEvent.location}</p>
                        <p><strong>Category:</strong> {selectedEvent.category}</p>
                        <button className="register-button">Register</button>
                    </div>
                </>
            )}

            {/* Conditionally render Footer */}
            {renderHeaderFooter && <Footer />}
        </>
    );
};

export default EventPage;
