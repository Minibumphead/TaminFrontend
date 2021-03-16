import styles from "./Feature.module.css";

const Feature = ({icon, title, ...props}) => {
  return (
    <div className={styles.root}>
      <img src={icon} alt={title} />
      <h2>{title}</h2>
      <p>{props.children}</p>
    </div>
  )
}

export default Feature;