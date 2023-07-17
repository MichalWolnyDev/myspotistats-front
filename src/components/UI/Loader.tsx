import styles from "../../assets/scss/UI/Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles["lds-grid"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={styles.loader__text}>
        Loading...
      </p>
    </div>
  );
};

export default Loader;
