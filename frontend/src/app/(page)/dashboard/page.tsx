import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import styles from './dashboard.module.css'
import { MdLocationOn, MdMail, MdPhone } from 'react-icons/md'

const DashboardPage: React.FC = () => {
	// Hardcoded data for demonstration
	const schoolDetails = {
		school_id: '234', // Not displayed
		name: 'Green Valley High School',
		address: '123 Education Lane, Knowledge City',
		contact: 'contact@greenvalley.edu | +91 9876543210',
		district: 'Boya',
		state: 'UP',
		zipcode: '181121',
		affiliation_no: '234322342',
		email: 'sometion@email.com',
		phone_no: '2321312312',
		landline: '234-23423',
		typeofschool: 'Public / Gov / Private / Funded / Other',
		isATL: 'Yes', // Either they have ATL lab or not
		isTinker: 'No', // Either they have Tinker lab
		isPMShri: 'Yes', // Is that school fall under PM Shri
		isprevious: 'No', // Whether they have previous interaction with us or not
		isverified: 'No'
	};

	const scheduled_slot = {
		date: '2023-11-10',
		from_time: '10:00 AM',
		to_time: '12:00 PM',
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.backImage}>
				<img src="https://iitjammu.ac.in/slider/slider3.jpg" alt="" />
			</div>

			{/* Main Content of the Dashboard */}

			<div className={styles.dashboardContainer}>
				<div className={styles.dashboardImage}>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2GINCiqV-9Uw2MbxevQjiJGD2fdO6WKaGBQ&s" alt="" />
				</div>
				<div className={styles.dashboardContent}>
					{/* This can also be added if we want as per the reference */}
					<div className={styles.eventdets}>
						<div className={styles.card}>
							<h4>XX</h4>
							<p>Events Registered</p>
						</div>
						<div className={styles.card}>
							<h4>XX</h4>
							<p>Students Registered</p>
						</div>
					</div>
					<h3>{schoolDetails.name}</h3>
					<div className={styles.dets}>
						<div className={styles.detsLeft}>
							<p><MdLocationOn size={'25px'} style={{margin: '0 10px'}} />{schoolDetails.address}</p>
							<p><span>District</span> : {schoolDetails.district}, <span>State</span> : {schoolDetails.state}</p>
							<p><span>Zipcode</span> : {schoolDetails.zipcode}</p>
							<p><MdMail size={'25px'} style={{margin: '0 10px'}} />{schoolDetails.email}</p>
							<p><MdPhone size={'25px'} style={{margin: '0 10px'}} /> {schoolDetails.phone_no}</p>
							<p><span>Landline</span> : {schoolDetails.landline}</p>
							<p><span>Affiliation No.</span> : {schoolDetails.affiliation_no}</p>
						</div>
						<div className={styles.detsRight}>
							<p><span>Type of School</span> : {schoolDetails.typeofschool}</p>
							<p><span>ATL Lab</span> : {schoolDetails.isATL}</p>
							<p><span>Tinker Lab</span> : {schoolDetails.isTinker}</p>
							<p><span>PM Shri School</span> : {schoolDetails.isPMShri}</p>
							<p><span>Previous Interaction</span> : {schoolDetails.isprevious}</p>
							<p><span>Verified</span> : {schoolDetails.isverified}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;