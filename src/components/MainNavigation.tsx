import React, { useEffect, useState } from "react";
import styles from "../assets/scss/components/MainNavigation.module.scss";
import Container from "./UI/Container";
import { Link, useLocation } from "react-router-dom";
import Button from "./UI/Button";
// import CurrentlyPlaying from "./CurrentlyPlaying";
import { getAuthToken } from "../helpers/spotify";
import { isMobile } from "react-device-detect";
import Hamburger from "./Svg/Hamburger";
import MobileMenu from "./MobileMenu";
import Logout from "./Logout";
import Login from "./Login";

const MainNavigation = () => {
  const token = getAuthToken();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname])


  const openMobileMenuHandler = () => {
    setIsMobileMenuOpen(true);
  }

  return (
    <header className={styles.nav}>
      {isMobileMenuOpen && <MobileMenu />}
      <Container>
        <nav className={styles.nav__header}>
          <Link to="/">
            <div className={styles.nav__logo}>
              <h1>MySpotiStats</h1>
            </div>
          </Link>
          {/* <CurrentlyPlaying /> */}

          {!isMobile && (
            <div className={styles.nav__menu}>
              {!token && (
                <Login />
              )}
              {token && (
                <>
                  <ul className={styles.nav__list}>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                  </ul>
                </>
              )}
              {token && <Logout />}
            </div>
          )}
          {isMobile && <Hamburger onClick={openMobileMenuHandler}/>}
        </nav>
      </Container>
    </header>
  );
};

export default MainNavigation;
