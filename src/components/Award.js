import styles from "./Award.module.css";

const Award = ({icon, label}) => {
  return (
    <div className={styles.root}>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
}

export default Award;