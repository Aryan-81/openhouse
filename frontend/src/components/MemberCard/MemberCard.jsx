import styles from "./MemberCard.module.css";

// Card for about page
const MemberCard = ({ name='Name', image='Image' }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.dets}>{name}</div>
    </div>
  )
};

export default MemberCard
