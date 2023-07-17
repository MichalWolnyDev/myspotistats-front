import styles from "../assets/scss/Mobilemenu.module.scss";
import { Link } from "react-router-dom";
import { getAuthToken } from "../helpers/spotify";
import Logout from "./Logout";
import Login from "./Login";

const MobileMenu = () => {
  const token = getAuthToken();
  return (
    <div className={styles.menu}>
      <div className={styles.menu__content}>
        {token && (
          <>
            <ul className={styles.menu__list}>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Logout mode="white"/>
              </li>
            </ul>
          </>
        )}
        {!token && <Login mode="white"/>}
      </div>
    </div>
  );
};

export default MobileMenu;
