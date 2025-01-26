import React from "react";

// Import local images
import client2 from "../assets/acharya.png";
import client3 from "../assets/dhan.png";
import client4 from "../assets/fisat.png";
import client5 from "../assets/mcc.png";
import client6 from "../assets/ramaiah.png";
import client7 from "../assets/rr.png";

function Clients() {
  return (
    <section style={styles.section} id="clients">
      <h2 style={styles.heading}><span className="animated-underline">Our Clients</span></h2>
      <p style={styles.subText}>
        We are proud to collaborate with these forward-thinking organizations.
      </p>

      {/* Scrollable marquee container */}
      <div style={styles.marqueeContainer}>
        <div style={styles.marqueeContent}>
          {clientLogos.map((logo, idx) => (
            <div key={`first-${idx}`} style={styles.logoWrapper}>
              <img src={logo} alt="Client Logo" style={styles.logo} />
            </div>
          ))}
          {/* Duplicate logos for seamless scrolling */}
          {clientLogos.map((logo, idx) => (
            <div key={`second-${idx}`} style={styles.logoWrapper}>
              <img src={logo} alt="Client Logo" style={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Array of imported logos
const clientLogos = [client3, client2, client4, client5, client6, client7];

const styles = {
  section: {
    width: "100%",
    padding: "3rem 1rem",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
    fontWeight: "bold",
  },
  subText: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "2rem",
  },
  marqueeContainer: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
  marqueeContent: {
    display: "flex",
    animation: "marquee 20s linear infinite", // Smooth and infinite scrolling
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "160px",
    margin: "0 1rem",
  },
  logo: {
    height: "80px",
    objectFit: "contain",
  },
};

// Add CSS animations for smooth marquee
const stylesGlobal = document.createElement("style");
stylesGlobal.type = "text/css";
stylesGlobal.innerHTML = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }

  .marqueeContent {
    display: flex;
    white-space: nowrap;
    will-change: transform;
  }
`;
document.head.appendChild(stylesGlobal);

export default Clients;
