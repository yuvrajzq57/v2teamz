import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';  // optional if you want to load font in the component
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  // AOS and hover states, same as before
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  const [hoverCEH, setHoverCEH] = useState(false);
  const [hoverCPENT, setHoverCPENT] = useState(false);
  const [hoverBug, setHoverBug] = useState(false);

  return (
    <>
      {/* Load the Poppins font via Google Fonts (and apply to the entire doc) */}
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

      <section className="section" id="services">
        <h2 data-aos="fade-up">
          <span className="animated-underline" style={styles.heading}>Our Certifications</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="100">
          <span className="tw-text-lg tw-text-gray-300">
            At Teamz, our certified trainers from
            <span style={{ color: 'red' }}>
              <b> EC-Council University of America </b>
            </span>
            offer expert-led training sessions tailored to help you achieve your goals.
            With personalized guidance and hands-on support, we empower you with the
            knowledge and tools to succeed in your career. Learn from the best and
            advance with confidence!
          </span>
        </p>

        <div style={styles.servicesGrid}>
          {/* zCEH Card */}
          <div style={styles.serviceCard} data-aos="flip-left" data-aos-delay="200">
            <h3 style={styles.texthead} data-aos="flip-left" data-aos-delay="400">
              zCEH v2.0
            </h3>
            <p style={styles.textcolor} data-aos="flip-left" data-aos-delay="400">
              Comprehensive ethical hacking curriculum that focuses on real-world
              attack vectors, vulnerabilities.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              style={{
                ...styles.readMoreBtn,
                backgroundColor: hoverCEH ? '#f44e02' : '#fff',
                color: hoverCEH ? '#fff' : '#f44e02',
              }}
              onMouseEnter={() => setHoverCEH(true)}
              onMouseLeave={() => setHoverCEH(false)}
            >
              Read More
            </button>
          </div>

          {/* zCPENT Card */}
          <div style={styles.serviceCard} data-aos="flip-left" data-aos-delay="300">
            <h3 style={styles.texthead} data-aos="flip-left" data-aos-delay="400">
              zCPENT v1.0
            </h3>
            <p style={styles.textcolor} data-aos="flip-left" data-aos-delay="400">
              Advanced penetration testing certification designed for experts
              ready to push their skills to the limit.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              style={{
                ...styles.readMoreBtn,
                backgroundColor: hoverCPENT ? '#f44e02' : '#fff',
                color: hoverCPENT ? '#fff' : '#f44e02',
              }}
              onMouseEnter={() => setHoverCPENT(true)}
              onMouseLeave={() => setHoverCPENT(false)}
            >
              Read More
            </button>
          </div>

          {/* Bug Bounty Training Card */}
          <div style={styles.serviceCard} data-aos="flip-left" data-aos-delay="400">
            <h3 style={styles.texthead} data-aos="flip-left" data-aos-delay="400">
              Bug Bounty Training
            </h3>
            <p style={styles.textcolor} data-aos="flip-left" data-aos-delay="400">
            Master bug bounty hunting with hands-on training, OWASP Top 10, advanced vulnerabilities.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              style={{
                ...styles.readMoreBtn,
                backgroundColor: hoverBug ? '#f44e02' : '#fff',
                color: hoverBug ? '#fff' : '#f44e02',
              }}
              onMouseEnter={() => setHoverBug(true)}
              onMouseLeave={() => setHoverBug(false)}
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
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  serviceCard: {
    background: 'linear-gradient(to top, #ff8533 , #e69e7f)',
    padding: '1.6rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'relative',
    overflow: 'hidden',
  },
  heading: {
    fontSize: "2.5rem",
    textAlign: "left",
    marginBottom: "1rem",
    fontWeight: 700,
  },
  textcolor: {
    padding: '0.2rem',
    color: 'white',
  },
  texthead: {
    padding: '0.2rem',
    color: 'black',
  },
  readMoreBtn: {
    bottom: '1rem',
    right: '1rem',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  },
};

export default Services;
