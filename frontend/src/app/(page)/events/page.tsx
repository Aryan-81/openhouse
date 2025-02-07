"use client";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./EventPage.css";
import Link from "next/link";
import photo from "./photo.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { StaticImageData } from "next/image";

interface Event {
  Event_id: string;
  Event_Name: string;
  Event_des_short: string;
  Event_des_long: string;
  Contact_Phone_number1: string;
  Contact_Email1: string;
  Pre_Registered: boolean;
  RStudent_Num: number;
  Space_Location: string;
  Category: string;
  image?: string | StaticImageData;
}

const sampleEvents: Event[] = [
  {
    Event_id: "1",
    Event_Name: "Tech Talk",
    Event_des_short: "A discussion on the latest technology trends.",
    Event_des_long: "Join us for an in-depth discussion on emerging technologies and their impact on the industry.",
    Contact_Phone_number1: "123-456-7890",
    Contact_Email1: "tech@event.com",
    Pre_Registered: true,
    RStudent_Num: 25,
    Space_Location: "Room A101",
    Category: "Technology",
    image: photo,
  },
  {
    Event_id: "1",
    Event_Name: "Tech Talk",
    Event_des_short: "A discussion on the latest technology trends.",
    Event_des_long: "Join us for an in-depth discussion on emerging technologies and their impact on the industry.",
    Contact_Phone_number1: "123-456-7890",
    Contact_Email1: "tech@event.com",
    Pre_Registered: true,
    RStudent_Num: 25,
    Space_Location: "Room A101",
    Category: "Technology",
    image: photo,
  },
  {
    Event_id: "2",
    Event_Name: "Art Exhibition",
    Event_des_short: "Showcasing artwork from local artists.",
    Event_des_long: "Come and explore a variety of artistic styles from talented local artists.",
    Contact_Phone_number1: "987-654-3210",
    Contact_Email1: "art@event.com",
    Pre_Registered: false,
    RStudent_Num: 50,
    Space_Location: "Gallery Hall",
    Category: "Art",
    image: photo,
  },
  {
    Event_id: "2",
    Event_Name: "Art Exhibition",
    Event_des_short: "Showcasing artwork from local artists.",
    Event_des_long: "Come and explore a variety of artistic styles from talented local artists.",
    Contact_Phone_number1: "987-654-3210",
    Contact_Email1: "art@event.com",
    Pre_Registered: false,
    RStudent_Num: 50,
    Space_Location: "Gallery Hall",
    Category: "Art",
    image: photo,
  },
];

const EventPage: React.FC = () => {
  const [events] = useState<Event[]>(sampleEvents);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const pathname = usePathname();
  const renderHeaderFooter = pathname === "/event";
  const categories = Array.from(new Set(events.map((event) => event.Category)));

  const handleViewMore = (event: Event) => {
    setSelectedEvent(event);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setSelectedEvent(null);
  };

  return (
    <>
      {renderHeaderFooter && <Header />}
      <div className="event-container">
        {categories.map((category) => (
          <div key={category} className="event-category">
            <h2 className="category-title">{category}</h2>
            <div className="full-list">
              {events
                .filter((event) => event.Category === category)
                .map((event) => (
                  <div key={event.Event_id} className="event-card">
                    {event.image && (
                      <img src={typeof event.image === "string" ? event.image : event.image.src} alt={event.Event_Name} className="event-image" />
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
              <p><strong>Registered Students:</strong> {selectedEvent.RStudent_Num}</p>
            </div>
            <p><strong>Location:</strong> {selectedEvent.Space_Location}</p>
            <p><strong>Category:</strong> {selectedEvent.Category}</p>
            {selectedEvent.Pre_Registered ? (
              <Link href={`/events/Regs?eventId=${selectedEvent.Event_id}&eventName=${selectedEvent.Event_Name}`} className="register-button">
                Register
              </Link>
            ) : (
              <h3>Open for all</h3>
            )}
          </div>
        </>
      )}

      {renderHeaderFooter && <Footer />}
    </>
  );
};

export default EventPage;
