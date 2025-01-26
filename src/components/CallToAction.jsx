import React from 'react';

const CallToAction = () => {
  return (
    <section
      data-aos="fade-up"
      id="call-to-action"
      style={styles.ctaSection}
    >
      <h2 data-aos="fade-up" style={styles.ctaHeading}>
      <span style={{ color: "red" }}>Ready to Partner with TeamZ? </span>
      </h2>
      <p data-aos="fade-up" style={styles.ctaText}>
        Whether you’re an aspiring security professional seeking certification or
        an enterprise ready to reinforce your security posture, TeamZ is here to help.
      </p>

      {/* Mailto link for direct contact */}
      <a
        data-aos="fade-up"
        href="mailto:official@zteam.in"
        style={styles.contactLink}
      >
        Contact Us
      </a>
     
    </section>
  );
};

const styles = {
    ctaSection: {         // Full viewport width
        margin: 0,               // Remove any margins
        padding: '2rem',         // Keep vertical padding
        backgroundColor: '#000', // Black background
        color: '#fff',           // White text
        textAlign: 'center',     // Center align the content
        overflowX: 'hidden',     // Prevent horizontal scrollbars if any content overflows
      },
  ctaHeading: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  ctaText: {
    marginBottom: '1.5rem',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '1.5rem',
    textAlign: 'justify',  // center the text within the section
  },
  contactLink: {
    display: 'inline-block',
    backgroundColor: '#fff',
    color: '#000',
    padding: '0.8rem 1.5rem',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  footerBottom: {
    textAlign: 'center',
    marginTop: '1rem',
    borderTop: '1px solid #ffffff',
    paddingTop: '1rem',
  }
 
};

export default CallToAction;
