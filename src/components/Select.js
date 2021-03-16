import styles from "./Select.module.css";

const Select = ({options, value, onChange, errorname, ...props}) => {



  return (
    <select
      className={(errorname === props.name) ? styles.error : styles.root}
      onChange={onChange}
      value={value}
      {...props}
    >
      <option key="" value="" disabled>Code</option>
      {
        options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))
      }
    </select>
  )
}

export default Select;