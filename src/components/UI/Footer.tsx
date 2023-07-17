import Container from "./Container";

import styles from "../../assets/scss/UI/Footer.module.scss";
import GithubLogo from "../Svg/GithubLogo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__row}>
          <div className={styles.footer__col}>
            <p>Made by Michał Wolny</p>
          </div>
          <div className={styles.footer__col}>
            <div className={styles.footer__links}>
              <a href="https://github.com/MichalWolnyDev" target="_blank">
                <GithubLogo />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
