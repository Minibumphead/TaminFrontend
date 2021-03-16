import {Link} from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <span className={styles.root}>
      <Link to="">Legal</Link>
      <span className={styles.social}>
        <a href="http://instagram.com/tamin.oman" target="_blank" className={styles.instagram}></a>
        <a href="http://instagram.com/tamin.oman" target="_blank" className={styles.facebook}></a>
        <a href="http://instagram.com/tamin.oman" target="_blank" className={styles.twitter}></a>
      </span>
    </span>
  );
}

export default Footer;