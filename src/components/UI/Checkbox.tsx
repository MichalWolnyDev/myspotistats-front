import React from "react";
import styles from '../../assets/scss/UI/Checkbox.module.scss'

interface Checkbox {
  label: string,
  value: boolean,
  onChange: (params: any) => any,
  id: string
}

const Checkbox = ({ label, value, onChange, id }: Checkbox) => {
  return (
    <>
      <label htmlFor={id} className={styles.checkbox}>
        {label}
        <input type="checkbox" id={id} checked={value} onChange={onChange} />
        <span className={styles.checkmark}></span>
      </label>
    </>
  );
};

export default Checkbox;
