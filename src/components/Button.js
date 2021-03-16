import styles from "./Button.module.css";

const Button = ({label, submitting, ...props}) => {
  return (
    <div className={!submitting ? styles.button : styles.disabled} {...props}>
      {label}
    </div>
  );
};

export default Button;