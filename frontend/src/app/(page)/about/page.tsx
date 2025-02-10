"use client";
import React from "react";
import { FaRobot, FaUserGraduate, FaLightbulb } from "react-icons/fa";
import Image from "next/image";
import styles from "./AboutPage.module.css";

const students = [
  { name: "Ashutosh Vishwakarma", role: "Event Coordinator", image: '/unknown.png' },
  { name: "Nipun Singh", role: "Hospitality", image: '/unknown.png' },
  { name: "Aryan Sheel", role: "Technical", image: '/unknown.png' },
  { name: "Raghav Jaiman", role: "Non-Technical", image: '/unknown.png' },
  { name: "Vaishnavi", role: "Non-Technical", image: '/unknown.png' },
  { name: "Devesh Sharma", role: "Design", image: '/unknown.png' },
  { name: "Aryan Raj", role: "Web-Dev", image: '/unknown.png' },
  { name: "Vibhu", role: "Infrastructure", image: '/unknown.png' },
  { name: "Vivek", role: "Infrastructure", image: '/unknown.png' },
  { name: "Rahul Kumar", role: "Public Relations", image: '/unknown.png' },
  { name: "Vishal Kumar", role: "Security", image: '/unknown.png' },
  { name: "Yash Faujdar", role: "Coverage", image: '/unknown.png' },
];

const faculty = [
  { name: "Dr. Vijay Pal", role: "Event Chairperson", image: '/unknown.png' },
  { name: "- -", role: "Faculty Advisor", image: '/unknown.png' },
];

export default function AboutPage() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <video
          autoPlay loop muted playsInline
          src="/vid/abt.mp4"
          className={styles.vid}
        />
        {/* Introduction to Pragyaan */}
        <div className={styles.intro}>
          {/* <h2 className={styles.introTitle}>📢 Introduction to Pragyaan</h2> */}
          <p className={styles.introDescription}>
            Pragyaan is an initiative by <strong>IIT Jammu</strong> to create an interactive learning experience
            for school students, educators, and industry professionals. This Open Day event fosters <strong>curiosity,
              innovation, and collaboration</strong> by showcasing the latest advancements in <strong>STEAM</strong>.
          </p>
          <p className={styles.introDescription}>
            Through <strong>live exhibits, hands-on activities, and expert mentorship</strong>, Pragyaan bridges the gap between
            school education and real-world applications.
          </p>
        </div>
      </header>
      <div className={styles.container}>
        {/* Mission & Vision */}
        <div className={styles.missionVision}>
          <h2 className={styles.missionVisionTitle}>🎯 Our Mission & Vision</h2>
          <div className={`${styles.grid} ${styles.missionVisionGrid}`}>
            <div className={styles.card}>
              <h3 className={`${styles.cardTitle} text-blue-600`}>🚀 Mission</h3>
              <ul className={styles.cardList}>
                <li>Inspire young minds through <strong>hands-on learning</strong> in STEAM.</li>
                <li>Connect students, educators, and industry professionals in a collaborative environment.</li>
                <li>Promote <strong>creativity, critical thinking, and innovation</strong> in education.</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={`${styles.cardTitle} text-green-600`}>🌟 Vision</h3>
              <ul className={styles.cardList}>
                <li>Establish Pragyaan as a <strong>leading educational initiative</strong> that transforms learning experiences.</li>
                <li>Empower students with <strong>future-ready skills</strong> through experiential learning.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Join Us? */}
        <div className={styles.whyJoin}>
          <h2 className={styles.whyJoinTitle}>💡 Why Join Us?</h2>
          <div className={styles.whyJoinGrid}>
            <div className={styles.whyJoinCard}>
              <FaRobot className={`${styles.whyJoinIcon} text-blue-500`} />
              <h3 className={styles.whyJoinCardTitle}>Experience STEAM</h3>
              <p className={styles.whyJoinCardDescription}>AI, Robotics, AR/VR, Drones, Elocution and more!</p>
            </div>
            <div className={styles.whyJoinCard}>
              <FaUserGraduate className={`${styles.whyJoinIcon} text-green-500`} />
              <h3 className={styles.whyJoinCardTitle}>Connect with IITians</h3>
              <p className={styles.whyJoinCardDescription}>Get mentorship & career guidance.</p>
            </div>
            <div className={styles.whyJoinCard}>
              <FaLightbulb className={`${styles.whyJoinIcon} text-yellow-500`} />
              <h3 className={styles.whyJoinCardTitle}>Showcase Your Talent</h3>
              <p className={styles.whyJoinCardDescription}>Participate in competitions & student projects.</p>
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <div className={styles.team}>
          <h2 className={styles.teamTitle}>👥 Meet the Team</h2>

          {/* Student Team */}
          <h3 className={`${styles.teamSubtitle} text-blue-500`}>🎓 Student Team</h3>
          <div className={styles.teamGrid}>
            {students.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <Image src={member.image} alt={member.name} width={100} height={100} className={styles.teamImage} />
                <h4 className={styles.teamName}>{member.name}</h4>
                <p className={styles.teamRole}>{member.role}</p>
              </div>
            ))}
          </div>

          {/* Faculty Team */}
          <h3 className={`${styles.teamSubtitle} text-green-500`}>🎓 Faculty Team</h3>
          <div className={`${styles.teamGrid} ${styles.facultyGrid}`}>
            {faculty.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <Image src={member.image} alt={member.name} width={100} height={100} className={styles.teamImage} />
                <h4 className={styles.teamName}>{member.name}</h4>
                <p className={styles.teamRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}