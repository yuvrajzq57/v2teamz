import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import AOS from "aos";
import "aos/dist/aos.css";
import teamzLogo from "../assets/teamzLogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track scrolling to hide/show navbar
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
      once: true,
    });
  }, []);

  // Listen for window resize
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Listen for scroll
  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;

      // Show the navbar if scrolling up OR near top of page
      if (currentScrollPos < 10) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(prevScrollPos > currentScrollPos);
      }

      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const isMobile = windowWidth < 768;

  return (
    <nav
      style={{
        ...styles.navbar,
        transform: isNavbarVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease",
      }}
      data-aos="fade-down"
    >
      {/* Logo */}
      <div style={styles.logoContainer} data-aos="fade-right">
        <img
          src={teamzLogo}
          alt="TeamZ Logo"
          style={styles.logoImage}
          data-aos="zoom-in"
        />
      </div>

      {isMobile ? (
        <>
          <button
            style={styles.hamburgerButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            data-aos="fade-left"
          >
            ☰
          </button>
          {isMenuOpen && (
            <ul style={styles.mobileNavMenu} data-aos="fade-up">
              <li>
                <Link
                  to="introduction"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  style={styles.navLink}
                  onClick={toggleMenu}
                >
                  Live Terminal
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  style={styles.navLink}
                  onClick={toggleMenu}
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  to="ourclients"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  style={styles.navLink}
                  onClick={toggleMenu}
                >
                  Our ClientS
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  style={styles.navLink}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </>
      ) : (
        <ul style={styles.desktopNavMenu}>
          <li>
            <Link
              to="introduction"
              smooth={true}
              duration={500}
              offset={-70}
              style={styles.navLink}
            >
              Live Terminal
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              style={styles.navLink}
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              to="ourclients"
              smooth={true}
              duration={500}
              offset={-70}
              style={styles.navLink}
            >
              Our Clients
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              style={styles.navLink}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    padding: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    position: "sticky",
    top: 0,
    zIndex: 999,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    height: "50px",
    width: "100px",
  },
  logoImage: {
    width: "150px",
    height: "auto",
  },

  /* DESKTOP NAV MENU */
  desktopNavMenu: {
    listStyle: "none",
    display: "flex",
    gap: "2rem",
    margin: 0,
  },

  /* MOBILE NAV MENU */
  mobileNavMenu: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    position: "absolute",
    top: "70px",
    right: "20px",
    backgroundColor: "#000",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
  },

  navLink: {
    textDecoration: "none",
    color: "#FF7E30",
    fontWeight: 650,
    cursor: "pointer",
  },

  hamburgerButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "1.8rem",
    cursor: "pointer",
    zIndex: 1001,
  },
};

export default Navbar;
