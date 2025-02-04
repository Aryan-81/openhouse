import React from 'react';
import styles from './about.module.css';
import MemberCard, { MemberCardProps } from '@/components/MemberCard';

const Page: React.FC = () => {
  // Example data for faculties with the new 'management' field
  const faculties: MemberCardProps[] = [
    { name: 'Dr. John Doe', image: '/photo.jpg', management: 'Dean of Engineering' },
    { name: 'Dr. Jane Smith', image: '/photo.jpg', management: 'Head of Computer Science' },
    { name: 'Dr. Alice Johnson', image: '/photo.jpg', management: 'Head of Mathematics' },
    { name: 'Dr. Bob Brown', image: '/photo.jpg', management: 'Head of Physics' },
    { name: 'Dr. Charlie Davis', image: '/photo.jpg', management: 'Head of Chemistry' },
    { name: 'Dr. Eve White', image: '/photo.jpg', management: 'Head of Biology' },
  ];

  // Example data for students with the new 'management' field
  const students: MemberCardProps[] = [
    { name: 'Alice', image: '/photo.jpg', management: 'President' },
    { name: 'Bob', image: '/photo.jpg', management: 'Vice President' },
    { name: 'Charlie', image: '/photo.jpg', management: 'Treasurer' },
    { name: 'Diana', image: '/photo.jpg', management: 'Secretary' },
    { name: 'Eve', image: '/photo.jpg', management: 'Event Coordinator' },
    { name: 'Frank', image: '/photo.jpg', management: 'Public Relations' },
  ];

  return (
    <>
      <div className={styles.aim}>
        <h2 className={styles.heading}>Aim</h2>
        <p className={styles.aimContent}>
          An outreach program (16th - 17th Feb) aimed at igniting curiosity in STEM (Science, Technology, Engineering, Art, and Mathematics) among young minds.
        </p>
      </div>

      <hr style={{ margin: '0 10em', opacity: '0.3' }} />

      <div className={styles.ourTeam}>
        <h1 className={styles.heading}>Our Team</h1>

        {/* Faculties Section */}
        <div className={styles.teamCategory}>
          <h1>Faculties</h1>
          <div className={styles.cards}>
            {faculties.map((faculty, index) => (
              <MemberCard
                key={index}
                name={faculty.name}
                image={faculty.image}
                management={faculty.management} // Pass the management field
              />
            ))}
          </div>
        </div>

        <hr style={{ margin: '7em 10vw 4em 10vw', opacity: '0.3' }} />

        {/* Students Section */}
        <div className={styles.teamCategory}>
          <h1>Students</h1>
          <div className={styles.cards}>
            {students.map((student, index) => (
              <MemberCard
                key={index}
                name={student.name}
                image={student.image}
                management={student.management} // Pass the management field
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;