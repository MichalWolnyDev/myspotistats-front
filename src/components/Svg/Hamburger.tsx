import styles from '../../assets/scss/svg/Hamburger.module.scss'


const Hamburger = (props: ClickFunction) => {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 40 40"
      version="1.1"
      onClick={props.onClick}
    >
      <g id="surface1">
        <path
          className={styles.path1}
          d="M 4.000781 18 L 19.999219 18 "
          transform="matrix(1.666667,0,0,1.666667,0,0)"
        />
        <path
          className={styles.path2}
          d="M 4.000781 12 L 19.999219 12 "
          transform="matrix(1.666667,0,0,1.666667,0,0)"
        />
        <path
          className={styles.path3}
          d="M 4.000781 6 L 19.999219 6 "
          transform="matrix(1.666667,0,0,1.666667,0,0)"
        />
      </g>
    </svg>
  );
};

export default Hamburger;
