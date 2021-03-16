import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">العربية</Link>
      <Link className={styles.logo} to="/">tamin</Link>
      <Link to="/">My Policy</Link>
    </div>
  )
}

export default Header;