import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./Navbar.module.css"

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburguerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header>
      <nav className={styles["navbar"]}>
        <img
          className={styles["nav-branding"]}
          src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1681953801/D-unscreen_oirh9l.gif"
          width={150}
          height={150}
          onClick={scrollToTop}
        />
        <ul className={`${styles["nav-menu"]} ${menuOpen ? styles["active"] : ""}`}>
          <li>
          <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about-me"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </Link>
          </li>
          <li>
            <a href="/certifications" onClick={() => setMenuOpen(false)}>
              Certifications
            </a>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact-me"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div
          className={`${styles["hamburguer"]} ${menuOpen ? styles["active"] : ""}`}
          onClick={handleHamburguerClick}
        >
          <span className={styles["bar"]}></span>
          <span className={styles["bar"]}></span>
          <span className={styles["bar"]}></span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
