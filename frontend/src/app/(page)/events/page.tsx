"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext"; // Import authentication context
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./EventPage.css";
import Link from "next/link";
// Importing the image
import photo from "./photo.jpg";

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
  RStudent_Num: number;
  Space_Location: string;
  Category: string;
  image?: string | StaticImageData; // Optional image property
}

const templateEvents: Event[] = [];

const EventPage: React.FC = () => {
  const { token } = useAuth();
  const [events, setEvents] = useState<Event[]>(templateEvents);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null); // Selected event for pop-up
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false); // For showing/hiding the pop-up
  const [registeredNumberStudent, setRegisteredNumberStudent] =
    useState<number>(0);
  const [registered, setRegistered] = useState<boolean>(false);
  // Derive categories dynamically from the events array
  const categories = Array.from(new Set(events.map((event) => event.Category)));

  // Get the current pathname
  const pathname = usePathname();
  const api = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const get_data = async () => {
      try {
        const response = await fetch(`${api}event/AdminEvent`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `idToken ${token}`,
          },
        });
        const data = await response.json();
        console.log(data.events);
        setEvents(data.events);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    if (token) {
      get_data();
    }

  }, [token, api]);
  const updateSelectedEvent = (updatedFields: Partial<Event>) => {
    setSelectedEvent((prev) => (prev ? { ...prev, ...updatedFields } : null));
  };

  const get_registered_number = async (event: Event) => {
    try {
      const response = await fetch(`${api}register_event/RegisterEventList`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `idToken ${token}`,
        },
      });
      const data = await response.json();
      let flag = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i]?.REvent === event?.Event_id) {
          setRegisteredNumberStudent(data[i]?.RStudent_Num);
          setRegistered(true);
          flag = 1;
          break;
        }
      }
      if (flag == 0) setRegistered(false);
      // setEvents(data.events)
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleViewMore = (event: Event) => {
    setSelectedEvent(event);
    get_registered_number(event);
    updateSelectedEvent({ RStudent_Num:  registeredNumberStudent});
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
        {categories.map((category) => (
          <div key={category} className="event-category">
            <div className="category-header">
              <h2 className="category-title">{category}</h2>
            </div>

            <div className="full-list">
              {events
                .filter((event) => event.Category === category)
                .map((event) => (
                  <div key={event.Event_id} className="event-card">
                    {event.image && (
                      <img
                        src={
                          typeof event.image === "string"
                            ? api?.substring(0, api.length - 1) + event.image
                            : event.image.src
                        }
                        alt={event.Event_Name}
                        className="event-image"
                      />
                    )}
                    <h3 className="event-name">{event.Event_Name}</h3>
                    <p className="event-description">{event.Event_des_short}</p>
                    <button
                      className="view-more-button"
                      onClick={() => handleViewMore(event)}
                    >
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
            <button className="close-popup" onClick={handleClosePopup}>
              ×
            </button>
            <h2>{selectedEvent.Event_Name}</h2>
            <p>{selectedEvent.Event_des_long}</p>
            <div className="contact-info">
              <p>
                <strong>Contact:</strong> {selectedEvent.Contact_Phone_number1}
              </p>
              <p>
                <strong>Email:</strong> {selectedEvent.Contact_Email1}
              </p>
            </div>
            <div className="registered-students">
              <p>
                <strong>Registered Students:</strong>{" "}
                {selectedEvent.RStudent_Num}
              </p>
            </div>
            <p>
              <strong>Location:</strong> {selectedEvent.Space_Location}
            </p>
            <p>
              <strong>Category:</strong> {selectedEvent.Category}
            </p>
            {selectedEvent.Pre_Registered ? (
              !registered ? (
                <Link
                  href={`/events/Regs?eventId=${selectedEvent.Event_id}&eventName=${selectedEvent.Event_Name}`}
                  className="register-button"
                >
                  Register
                </Link>
              ) : (
                <Link href={`/events`} className="registered-button">
                  Registered
                </Link>
              )
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
