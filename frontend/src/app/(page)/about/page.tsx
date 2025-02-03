import React from 'react'
import styles from './about.module.css'
import MemberCard from '@/components/MemberCard/MemberCard'

function page() {
  return (
    <>
      <div className={styles.aim}>
        <h2 className={styles.heading}>Aim</h2>
        <p className={styles.aimContent}>An outreach program (16th - 17th Feb) aimed igniting curiosity in STEM(Science, Technology, Engineering, Art and Mathemcatics) among young minds</p>
      </div>

      <hr style={{margin: '0 10em', opacity: '0.3'}} />

      <div className={styles.ourTeam}>
        <h1 className={styles.heading}>Our Team</h1>

        {/* This is the categories for teams i.e. Faculties, heads and Web Dev. Fetch these from backend. */}
        <div className={styles.teamCategory}>
          <h1>Faculties</h1>
          <div className={styles.cards}>
            {/* Fill the name and image props for these cards after fetching from the backend */}
            <MemberCard name='Dr. Jitendra Singh' image='/dr-jitendra-singh.png'/>
            <MemberCard name='Dr. Jitendra Singh' image='/dr-jitendra-singh.png'/>
            <MemberCard name='Dr. Jitendra Singh' image='/dr-jitendra-singh.png'/>
            <MemberCard name='Dr. Jitendra Singh' image='/dr-jitendra-singh.png'/>
            <MemberCard name='Dr. Jitendra Singh' image='/dr-jitendra-singh.png'/>
            <MemberCard name='Dr. Jitendra Singh' image='/dr-jitendra-singh.png'/>
          </div>
        </div>

        {/* Add this hr after each section */}
        <hr style={{margin: '7em 10vw 4em 10vw', opacity: '0.3'}} />

        <div className={styles.teamCategory}>
          <h1>Students</h1>
          <div className={styles.cards}>
            <MemberCard name='Dr. Jitendra Singh' image='/dr-jitendra-singh.png'/>
            <MemberCard name='Dr. Jitendra Singh' image='/dr-jitendra-singh.png'/>
            <MemberCard name='Dr. Jitendra Singh' image='/dr-jitendra-singh.png'/>
            <MemberCard name='Dr. Jitendra Singh' image='/dr-jitendra-singh.png'/>
            <MemberCard name='Dr. Jitendra Singh' image='/dr-jitendra-singh.png'/>
            <MemberCard name='Dr. Jitendra Singh' image='/dr-jitendra-singh.png'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
