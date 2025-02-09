"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaPalette, FaBook, FaLightbulb, FaFlask, FaUsers } from "react-icons/fa";
import Image from "next/image";
import sampleImage from "./photo.jpg"; // Sample placeholder image
import styles from "./EventPage.module.css";


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
  image?: string;
}

const sampleEvents: Event[] =[
  { 
    Event_id: "1", 
    Event_Name: "AI Workshop", 
    Event_des_short: "Hands-on AI learning", 
    Event_des_long: "Explore AI models and machine learning applications.", 
    Contact_Phone_number1: "8494086270", 
    Contact_Email1: "2023umt0191@iitjammu.ac.in", 
    Pre_Registered: true, 
    RStudent_Num: 30, 
    Space_Location: "Lab 101", 
    Category: "STEM Zone", 
    image: sampleImage.src 
  },
  { 
    Event_id: "2", 
    Event_Name: "Robotics Show", 
    Event_des_short: "Live robotics demonstration", 
    Event_des_long: "Experience robots performing real-world tasks.", 
    Contact_Phone_number1: "7020489516", 
    Contact_Email1: "2023uee0138@iitjammu.ac.in", 
    Pre_Registered: false, 
    RStudent_Num: 50, 
    Space_Location: "Tech Arena", 
    Category: "STEM Zone", 
    image: sampleImage.src 
  },
  { 
    Event_id: "3", 
    Event_Name: "Hands-on Tinkering", 
    Event_des_short: "Creativity showcase", 
    Event_des_long: "Explore student-driven tinkering and hands-on innovation.", 
    Contact_Phone_number1: "8899227011", 
    Contact_Email1: "2022ume0220@iitjammu.ac.in", 
    Pre_Registered: true, 
    RStudent_Num: 20, 
    Space_Location: "Gallery Hall", 
    Category: "Student Zone", 
    image: sampleImage.src 
  },
  { 
    Event_id: "4", 
    Event_Name: "AR/VR Experience", 
    Event_des_short: "Virtual & augmented reality demos", 
    Event_des_long: "Explore immersive AR/VR experiences and their real-world applications.", 
    Contact_Phone_number1: "9560822580", 
    Contact_Email1: "2022ucs0079@iitjammu.ac.in", 
    Pre_Registered: false, 
    RStudent_Num: 40, 
    Space_Location: "Auditorium", 
    Category: "STEM Zone", 
    image: sampleImage.src 
  },
  { 
    Event_id: "5", 
    Event_Name: "Drone Demonstration", 
    Event_des_short: "Innovative aerial robotics", 
    Event_des_long: "Learn about drone technology and see live demonstrations.", 
    Contact_Phone_number1: "9103548936", 
    Contact_Email1: "2022uee0130@iitjammu.ac.in", 
    Pre_Registered: true, 
    RStudent_Num: 60, 
    Space_Location: "Expo Hall", 
    Category: "STEM Zone", 
    image: sampleImage.src 
  },
  { 
    Event_id: "6", 
    Event_Name: "Astronomy Exploration", 
    Event_des_short: "Journey through space science", 
    Event_des_long: "Discover the wonders of astronomy with hands-on experiments.", 
    Contact_Phone_number1: "7061598453", 
    Contact_Email1: "2023ucs0115@iitjammu.ac.in", 
    Pre_Registered: true, 
    RStudent_Num: 30, 
    Space_Location: "Lab 201", 
    Category: "STEM Zone", 
    image: sampleImage.src 
  },
  { 
    Event_id: "7", 
    Event_Name: "Elocution Contest", 
    Event_des_short: "Public speaking challenge", 
    Event_des_long: "Compete in a speech contest judged by experts.", 
    Contact_Phone_number1: "9068273762", 
    Contact_Email1: "2024ume0253@iitjammu.ac.in", 
    Pre_Registered: false, 
    RStudent_Num: 50, 
    Space_Location: "Auditorium", 
    Category: "Arts Zone", 
    image: sampleImage.src 
  },
  { 
    Event_id: "8", 
    Event_Name: "Painting Workshop", 
    Event_des_short: "Creative art expression", 
    Event_des_long: "Join a hands-on painting session to unleash creativity.", 
    Contact_Phone_number1: "9797922078", 
    Contact_Email1: "2023umt0183@iitjammu.ac.in", 
    Pre_Registered: true, 
    RStudent_Num: 30, 
    Space_Location: "Art Hall", 
    Category: "Arts Zone", 
    image: sampleImage.src 
  },
  { 
    Event_id: "9", 
    Event_Name: "Bracelet Making", 
    Event_des_short: "Handmade crafts session", 
    Event_des_long: "Create unique bracelets using beads and charms.", 
    Contact_Phone_number1: "9328164395", 
    Contact_Email1: "2023uma0230@iitjammu.ac.in", 
    Pre_Registered: false, 
    RStudent_Num: 50, 
    Space_Location: "Craft Studio", 
    Category: "Arts Zone", 
    image: sampleImage.src 
  },
  { 
    Event_id: "10", 
    Event_Name: "IITian Interaction", 
    Event_des_short: "Meet IIT students", 
    Event_des_long: "Get mentorship and career guidance from IIT Jammu students.", 
    Contact_Phone_number1: "8899059373", 
    Contact_Email1: "2023uce0057@iitjammu.ac.in", 
    Pre_Registered: true, 
    RStudent_Num: 30, 
    Space_Location: "Seminar Hall", 
    Category: "Student Zone", 
    image: sampleImage.src 
  },
  { 
    Event_id: "11", 
    Event_Name: "Documentary Screening", 
    Event_des_short: "Educational film showcase", 
    Event_des_long: "Watch inspiring documentaries on science, technology, and innovation.", 
    Contact_Phone_number1: "9622604204", 
    Contact_Email1: "2023ucs0118@iitjammu.ac.in", 
    Pre_Registered: true, 
    RStudent_Num: 30, 
    Space_Location: "Lecture Hall", 
    Category: "Student Zone", 
    image: sampleImage.src 
  },
  { 
    Event_id: "12", 
    Event_Name: "Jigsaw Puzzle Challenge", 
    Event_des_short: "Brain-teasing fun", 
    Event_des_long: "Compete in a jigsaw puzzle challenge to test problem-solving skills.", 
    Contact_Phone_number1: "8476868089", 
    Contact_Email1: "2023ume0279@iitjammu", 
    Pre_Registered: true, 
    RStudent_Num: 30, 
    Space_Location: "Puzzle Arena", 
    Category: "Arts Zone", 
    image: sampleImage.src 
  },
  { 
    Event_id: "13", 
    Event_Name: "Science Fair", 
    Event_des_short: "Innovative student projects", 
    Event_des_long: "Explore groundbreaking science experiments by students.", 
    Contact_Phone_number1: "7007203133", 
    Contact_Email1: "2023umt0188@iitjammu.ac.in", 
    Pre_Registered: true, 
    RStudent_Num: 30, 
    Space_Location: "Science Expo Hall", 
    Category: "Science Zone", 
    image: sampleImage.src 
  }
];
const eventIcons: { [key: string]: React.JSX.Element } = {
  "STEM Zone": <FaRobot className={styles.categoryIcon} style={{ color: "#3b82f6" }} />,
  "Arts Zone": <FaPalette className={styles.categoryIcon} style={{ color: "#eab308" }} />,
  "Book Zone": <FaBook className={styles.categoryIcon} style={{ color: "#10b981" }} />,
  "Innovation Zone": <FaLightbulb className={styles.categoryIcon} style={{ color: "#ef4444" }} />,
  "Science Zone": <FaFlask className={styles.categoryIcon} style={{ color: "#8b5cf6" }} />,
  "Student Zone": <FaUsers className={styles.categoryIcon} style={{ color: "#6b7280" }} />,
};

export default function EventPage() {
  const [events] = useState<Event[]>(sampleEvents);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
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
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Event Overview */}
        <div className={styles.overview}>
          <h2 className={styles.overviewTitle}>📢 Event Overview</h2>
          <p className={styles.overviewDescription}>
            Pragyaan 2025 bridges the gap between classroom learning and real-world applications through an interactive STEAM-powered experience.
            This Open Day features live demonstrations, student-led projects, expert talks, and industry showcases to spark curiosity and creativity.
          </p>
        </div>

        {/* Event Categories */}
        {categories.map((category) => (
          <div key={category} className={styles.categorySection}>
            <h2 className={styles.categoryHeader}>
              {eventIcons[category] || <FaLightbulb className={styles.categoryIcon} style={{ color: "#6b7280" }} />} {category}
            </h2>
            <div className={styles.categoryGrid}>
              {events
                .filter((event) => event.Category === category)
                .map((event) => (
                  <motion.div
                    key={event.Event_id}
                    className={styles.eventCard}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.050 }}
                  >
                    <Image src={event.image || sampleImage.src} alt={event.Event_Name} width={400} height={250} className={styles.eventImage} />
                    <div className={styles.eventContent}>
                      <h3 className={styles.eventTitle}>{event.Event_Name}</h3>
                      <p className={styles.eventDescription}>{event.Event_des_short}</p>
                      <button className={styles.eventButton} onClick={() => handleViewMore(event)}>
                        View More
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}

        {/* Event Popup Modal */}
        {isPopupVisible && selectedEvent && (
          <>
            <div className={styles.popupOverlay} onClick={handleClosePopup}></div>
            <div className={styles.popupContent}>
              <button className={styles.popupCloseButton} onClick={handleClosePopup}>×</button>
              <h2 className={styles.popupTitle}>{selectedEvent.Event_Name}</h2>
              <p className={styles.popupDescription}>{selectedEvent.Event_des_long}</p>
              <p className={styles.popupContact}><strong>Contact:</strong> {selectedEvent.Contact_Phone_number1} | {selectedEvent.Contact_Email1}</p>
              <p className={styles.popupLocation}><strong>Location:</strong> {selectedEvent.Space_Location}</p>
              {/* {selectedEvent.Pre_Registered ? (
                <Link href={`/register/${selectedEvent.Event_id}`} className={styles.popupRegisterButton}>Register</Link>
              ) : (
                <p className={styles.popupOpenForAll}>Open for all</p>
              )} */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}