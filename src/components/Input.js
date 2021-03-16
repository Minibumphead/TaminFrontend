import styles from "./Input.module.css";

const Input = ({errorname, ...props}) => {

  return (
    <input className={(errorname === props.name) ? styles.error : styles.root} {...props} />
  )
}

export default Input;