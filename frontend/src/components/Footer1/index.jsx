'use client'
import styles from './Footer.module.css';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
const clg_logo = '/1709208978519.jpeg';


function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['ftr-ctr1']}>
        <Image className={styles['logo']} src={clg_logo} layout="intrinsic" width={300} height={0} alt="IIT Jammu Logo" />
        <div>
          <span className={styles['college_name']}>Indian Institute of Technology Jammu</span>
        </div>
        <div>
          <span className={styles['college_address']}>NH-44, PO Nagrota, Jagti<br />Jammu and Kashmir, India</span>
        </div>
      </div>
      <div>
        <div className={styles['v']}></div>
      </div>
      <div className={styles['ftr-ctr2']}>
        <iframe
          className={styles['map']}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6707.144116272302!2d74.88793085390624!3d32.80360450000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e814038301e31%3A0xe3a42e213df5c738!2sIndian%20Institute%20Of%20Technology%E2%80%93Jammu%20(IIT%E2%80%93Jammu)!5e0!3m2!1sen!2sin!4v1694952874044!5m2!1sen!2sin"
          width="90%" height="80%" style={{ border: '0' }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="IIT Jammu Map"
        ></iframe>
      </div>
      <div className={styles['ftr-ctr3']}>
        <div className={styles['cu']}>
          <pre className={styles['contact_us']}>CONTACT US</pre>
        </div>
        <div className={styles['b']}></div>
        <div className={`${styles.ftcoFooterWidget} ${styles['mb-3']}`}>
          <div className={`${styles.block23} ${styles['mb-3']} mb-3`}>
            <ul>
              <li>
                <a href="#">
                  <span className={styles.icon}>
                    <FaPhone />
                  </span>
                  <span className={styles.text}>+91 9596917316</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={styles.icon}>
                    <FaEnvelope />
                  </span>
                  <span className={styles.text}>2022ucs0083@iitjammu.ac.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;