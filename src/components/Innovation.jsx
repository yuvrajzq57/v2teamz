import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet"; // Import Helmet to inject fonts
import AOS from "aos";
import "aos/dist/aos.css";

const Innovation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  const [hoverCEH, setHoverCEH] = useState(false);
  const [hoverCPENT, setHoverCPENT] = useState(false);

  return (
    <>
      {/* Load the Poppins font with Helmet */}
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            body {
              font-family: 'Poppins', sans-serif;
            }
          `}
        </style>
      </Helmet>

      <section className="section" id="services" style={styles.section}>
        <h2 data-aos="fade-up" style={styles.heading}>
          <span className="animated-underline">Innovation &amp; Penetration Testing</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" style={styles.paragraph}>
          <span>
            At TeamZ, we don't just teach cybersecurity, we{" "}
            <em>
              <span style={{ color: "red" }}>innovate</span>
            </em>{" "}
            within it. Our penetration testing services leverage cutting-edge tools and methodologies
            to identify vulnerabilities across networks, applications, and cloud infrastructures. We
            focus on preventative solutions and robust security architecture to keep you prepared for
            future threats.
          </span>
        </p>

        <div style={styles.servicesGrid}>
          {/* 1. VAPT Card */}
          <div style={styles.serviceCard} data-aos="flip-left" data-aos-delay="200">
            <h3 style={styles.texthead} data-aos="flip-left" data-aos-delay="400">
              VAPT
            </h3>
            <p style={styles.textcolor} data-aos="flip-left" data-aos-delay="400">
              Comprehensive ethical hacking curriculum that focuses on real-world attack vectors and
              vulnerabilities.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              style={{
                ...styles.readMoreBtn,
                backgroundColor: hoverCEH ? "#f44e02" : "#fff",
                color: hoverCEH ? "#fff" : "#f44e02",
              }}
              onMouseEnter={() => setHoverCEH(true)}
              onMouseLeave={() => setHoverCEH(false)}
            >
              Read More
            </button>
          </div>

          {/* 2. Continuous R&D Card */}
          <div style={styles.serviceCard} data-aos="flip-left" data-aos-delay="300">
            <h3 style={styles.texthead} data-aos="flip-left" data-aos-delay="400">
              Continuous R&amp;D
            </h3>
            <p style={styles.textcolor} data-aos="flip-left" data-aos-delay="400">
              Our research team stays ahead of the curve by exploring emerging threats and defenses,
              ensuring our methods are always current.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              style={{
                ...styles.readMoreBtn,
                backgroundColor: hoverCPENT ? "#f44e02" : "#fff",
                color: hoverCPENT ? "#fff" : "#f44e02",
              }}
              onMouseEnter={() => setHoverCPENT(true)}
              onMouseLeave={() => setHoverCPENT(false)}
            >
              Read More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const styles = {
  section: {
    padding: "4rem 1rem",
    backgroundColor: "#f7f7f7",
    color: "#333",
  },
  heading: {
    fontSize: "2.5rem",
    textAlign: "left",
    marginBottom: "1rem",
    fontWeight: 700,
  },
 
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
    marginTop: "2rem",
  },
  serviceCard: {
    background: "linear-gradient(to top, #ff8533 , #e69e7f)",
    padding: "1.6rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "relative",
    overflow: "hidden",
  },
  textcolor: {
    padding: "0.2rem",
    color: "white",
    fontSize: "1rem",
  },
  texthead: {
    padding: "0.2rem",
    color: "black",
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  readMoreBtn: {
    position: "absolute",
    bottom: "1rem",
    right: "1rem",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease", // Smooth color transition
    fontFamily: "'Poppins', sans-serif",
  },
};

export default Innovation;
