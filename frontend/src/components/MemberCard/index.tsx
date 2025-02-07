import styles from "./MemberCard.module.css";
export interface MemberCardProps {
  name: string;
  image: string;
  management: string; 
}
// Card for about page
const MemberCard = ({ name='Name', image='Image', management='head' }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.dets}>{name}</div>
      <p className={styles.dets} style={{fontSize:'12px',margin:'0 auto', transform:'translateY(-40px)'}}>{management}</p>
    </div>
  )
};

export default MemberCard
