import React from "react";
import styles from "../../assets/scss/UI/Button.module.scss";

interface Button {
  className?: string,
  mode?: string,
  disabled?: boolean,
  onClick?: (params: any) => any,
  type?: 'submit' | 'reset' | 'button',
  children?: React.ReactNode
}

const Button = (props: Button) => {
  return (
    <button
      className={
        `
        ${styles.button} ${props.className ? styles.active : ""} 
        ${props.mode ? styles[`mode__${props.mode}`] : ""}
        ${props.disabled ? styles.disabled : ""}
        `}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
