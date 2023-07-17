import React from "react";
import styles from "../../assets/scss/UI/Modal.module.scss";
import Exit from "../Svg/Exit";

interface Modal {
  title: string,
  children?: React.ReactNode,
  onCloseModal: (params: any) => any
}

const Modal = (props: Modal) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
            <h1>
                {props.title}
            </h1>
        </div>
        <div className={styles.modal__close} onClick={props.onCloseModal}>
          <Exit />
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
