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

const sampleEvents: Event[] = [
  {
    Event_id: "1",
    Event_Name: "AI (Artificial Intelligence)",
    Event_des_short: "Hands-on AI learning",
    Event_des_long: "A hands-on exploration into the world of artificial intelligence. Participants will delve into machine learning models and real-world applications of AI.",
    Contact_Phone_number1: "8494086270",
    Contact_Email1: "2023umt0191@iitjammu.ac.in",
    Pre_Registered: true,
    RStudent_Num: 30,
    Space_Location: "Parking 2 - near Shiv Sagar building",
    Category: "STEM Zone",
    image: '/AI.png'
  },
  {
    Event_id: "2",
    Event_Name: "Robotics Show",
    Event_des_short: "Live robotics demonstration",
    Event_des_long: "Experience the future of automation with live robotics demonstrations. Witness robots performing tasks and learn about their development and impact.",
    Contact_Phone_number1: "7020489516",
    Contact_Email1: "2023uee0138@iitjammu.ac.in",
    Pre_Registered: false,
    RStudent_Num: 50,
    Space_Location: "Parking 2 - near Shiv Sagar building",
    Category: "STEM Zone",
    image: '/robotics.png'
  },
  {
    Event_id: "3",
    Event_Name: "Hands-on Tinkering",
    Event_des_short: "Creativity showcase",
    Event_des_long: "A showcase of student-driven innovation and creativity. Hands-on experiments and interactive projects designed by students.",
    Contact_Phone_number1: "8899227011",
    Contact_Email1: "2022ume0220@iitjammu.ac.in",
    Pre_Registered: true,
    RStudent_Num: 20,
    Space_Location: "Parking 2 - near Shiv Sagar building",
    Category: "STEM Zone",
    image: '/tinkering.png'
  },
  {
    Event_id: "4",
    Event_Name: "AR/VR Experience",
    Event_des_short: "Virtual & augmented reality demos",
    Event_des_long: "Step into the virtual and augmented reality world. Discover immersive applications that bridge the gap between the digital and physical realms.",
    Contact_Phone_number1: "9560822580",
    Contact_Email1: "2022ucs0079@iitjammu.ac.in",
    Pre_Registered: false,
    RStudent_Num: 40,
    Space_Location: "Parking 2 - near Shiv Sagar building",
    Category: "STEM Zone",
    image: '/ARVR.png'
  },
  {
    Event_id: "5",
    Event_Name: "Drone Demonstration",
    Event_des_short: "Innovative aerial robotics",
    Event_des_long: "Explore cutting-edge aerial robotics. Learn about the technology behind drones and witness live demonstrations of their capabilities.",
    Contact_Phone_number1: "9103548936",
    Contact_Email1: "2022uee0130@iitjammu.ac.in",
    Pre_Registered: true,
    RStudent_Num: 60,
    Space_Location: "Parking 2 - near Shiv Sagar building",
    Category: "STEM Zone",
    image: '/drone.png'
  },
  {
    Event_id: "6",
    Event_Name: "Astronomy Exploration",
    Event_des_short: "Journey through space science",
    Event_des_long: "Embark on a cosmic journey! Hands-on experiments and engaging discussions will unveil the wonders of space science and astronomy.",
    Contact_Phone_number1: "7061598453",
    Contact_Email1: "2023ucs0115@iitjammu.ac.in",
    Pre_Registered: true,
    RStudent_Num: 30,
    Space_Location: "Pushkar Classroom AC-20xx",
    Category: "STEM Zone",
    image: '/astro.png'
  },
  {
    Event_id: "7",
    Event_Name: "Elocution Contest",
    Event_des_short: "Public speaking challenge",
    Event_des_long: "A platform to showcase oratory skills. Compete in a speech contest judged by experts and refine public speaking abilities.",
    Contact_Phone_number1: "9068273762",
    Contact_Email1: "2024ume0253@iitjammu.ac.in",
    Pre_Registered: false,
    RStudent_Num: 50,
    Space_Location: "Pushkar Classroom AC-2022",
    Category: "Arts Zone",
    image: '/eloc.png'
  },
  {
    Event_id: "8",
    Event_Name: "Creative Painting",
    Event_des_short: "Creative art expression",
    Event_des_long: "Unleash your artistic creativity in an interactive painting session. Explore colors, techniques, and artistic expression.",
    Contact_Phone_number1: "9797922078",
    Contact_Email1: "2023umt0183@iitjammu.ac.in",
    Pre_Registered: true,
    RStudent_Num: 30,
    Space_Location: "Pushkar Classroom AC-20xx",
    Category: "Arts Zone",
    image: '/paint.png'
  },
  {
    Event_id: "9",
    Event_Name: "Bracelet Making",
    Event_des_short: "Handmade crafts session",
    Event_des_long: "A hands-on craft experience. Create unique handmade bracelets using beads, threads, and creative elements.",
    Contact_Phone_number1: "9328164395",
    Contact_Email1: "2023uma0230@iitjammu.ac.in",
    Pre_Registered: false,
    RStudent_Num: 50,
    Space_Location: "Pushkar Classroom AC-20xx",
    Category: "Arts Zone",
    image: '/brs.png'
  },
  {
    Event_id: "10",
    Event_Name: "IITian Interaction",
    Event_des_short: "Meet IIT students",
    Event_des_long: "Engage with IIT students and gain career insights. A valuable mentorship session providing guidance and inspiration for aspiring students.",
    Contact_Phone_number1: "8899059373",
    Contact_Email1: "2023uce0057@iitjammu.ac.in",
    Pre_Registered: true,
    RStudent_Num: 30,
    Space_Location: "Pushkar Classroom AC-2022",
    Category: "Arts Zone",
    image: '/iit.png'
  },
  {
    Event_id: "13",
    Event_Name: "Science Fair",
    Event_des_short: "Innovative student projects",
    Event_des_long: "A showcase of groundbreaking student-led projects. Explore innovative experiments and scientific discoveries.",
    Contact_Phone_number1: "7007203133",
    Contact_Email1: "2023umt0188@iitjammu.ac.in",
    Pre_Registered: true,
    RStudent_Num: 30,
    Space_Location: "Parking 1 near Gomti Building",
    Category: "Student Zone",
    image: '/sci.png'
  },
  {
    Event_id: "14",
    Event_Name: "ATL",
    Event_des_short: "Tinkering & Innovation",
    Event_des_long: "A hub for young innovators. Hands-on tinkering, prototyping, and scientific exploration in a creative environment.",
    Contact_Phone_number1: "-",
    Contact_Email1: "",
    Pre_Registered: true,
    RStudent_Num: 30,
    Space_Location: "Pushkar Classroom AC-20xx",
    Category: "STEM Zone",
    image: '/atl.png'
  },
  {
    Event_id: "18",
    Event_Name: "Book Stalls",
    Event_des_short: "Explore the world of books",
    Event_des_long: "A paradise for book lovers. Browse through a variety of books covering science, technology, arts, and literature.",
    Contact_Phone_number1: "-",
    Contact_Email1: "",
    Pre_Registered: true,
    RStudent_Num: 30,
    Space_Location: "Parking 1 near Gomti Building",
    Category: "Book Zone",
    image: '/book.png'
  },
  {
    Event_id: "19",
    Event_Name: "Stalls by Educators and IITJ Labs",
    Event_des_short: "Interactive exhibits by educators and IITJ labs",
    Event_des_long: "Explore research and innovation through interactive stalls set up by educators and IIT Jammu's cutting-edge laboratories. Witness groundbreaking projects and engage in live demonstrations.",
    Contact_Phone_number1: "-",
    Contact_Email1: "",
    Pre_Registered: true,
    RStudent_Num: 30,
    Space_Location: "Parking 2 - near Shiv Sagar building",
    Category: "Science Zone",
    image: '/itl.png'
  },
  {
    Event_id: "20",
    Event_Name: "Stalls by Companies",
    Event_des_short: "Industry showcases and innovations",
    Event_des_long: "Leading companies present their latest technological advancements and products. Engage with industry experts, explore career opportunities, and discover cutting-edge innovations.",
    Contact_Phone_number1: "-",
    Contact_Email1: "",
    Pre_Registered: true,
    RStudent_Num: 30,
    Space_Location: "Parking 1 near Gomti Building",
    Category: "Innovation Zone",
    image: '/cst.png'
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
      <header className={styles.header}>
        <video
          autoPlay loop muted playsInline
          src="/vid/evt.mp4"
          className={styles.vid}
        />
        <div className={styles.overview}>
          <h2 className={styles.overviewTitle}>📢 Event Overview</h2>
          <p className={styles.overviewDescription}>
            Pragyaan 2025 bridges the gap between classroom learning and real-world applications through an interactive STEAM-powered experience.
            This Open Day features live demonstrations, student-led projects, expert talks, and industry showcases to spark curiosity and creativity.
          </p>
        </div>
      </header>

      <div className={styles.container}>
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