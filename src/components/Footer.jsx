import React from 'react';
import teamzLogo from "../assets/teamzLogo.png";

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <img
                                src={teamzLogo}
                                height={"auto"}
                                width={"150px"}
                                alt="TeamZ Logo"
                                data-aos="zoom-in"
                            />
                            <p>Secure Your Digital Future</p>
                            <div className="footer-icons">
                            <a
    href=""
    target="_blank"
    rel="noopener noreferrer"
  >
    
  <a
    href="https://www.instagram.com/teamzofficiall/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-instagram"></i>
  </a>
  <a
    href="https://www.linkedin.com/company/105294225/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-linkedin-in"></i>
  </a>
  <i className="fa-brands fa-facebook"></i>
  </a>
  
    <i className="fa-brands fa-twitter"></i>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="#introduction">Live Terminal</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="#services">Certifications</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="#ourclients">Our Clients</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="#footer">Contact</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Contact</h5>
                            <p><i className="fa-solid fa-phone-volume"></i> +91 77609 08906</p>
                            <p><i className="fa-solid fa-envelope"></i> official@zteam.in</p>
                            <p><i className="fa-solid fa-paper-plane"></i> New BEL Road , Bengaluru , Karnataka  </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Copyright © 2025 TeamZ. All Rights Reserved.</p>
            </div>
            <style>
    {`
    .Footer {
  background-color: #000; /* Set background to black */
  padding: 2rem 0;
}

.ft-1 h3 {
  font-weight: 700;
  font-family: cursive;
  letter-spacing: 2px;
  padding: 0.5rem 0;
}

.ft-1 span {
  color: #f74c08;
}

.ft-1 p {
  padding: 0rem 5rem 0.8rem 0;
  font-weight: 500;
  color: #fff; /* Set text color to white */
}

.footer-icons i {
  padding: 0.4rem 0.5rem;
  background: #fff; /* White background for icons */
  color: #f74c08; /* Dark orange/red color for icons */
  margin: 0 0.5rem;
  border-radius: 50%;
}

.footer-icons i:hover {
  background: #f74c08;
  color: #fff;
  transition: 0.6s;
  cursor: pointer;
}

.Footer h5 {
  color: #f74c08;
}

.ft-2 ul {
  list-style: none;
  padding-left: 0;
}

.ft-2 ul li {
  padding: 0.35rem 0;
  font-weight: 500;
}

.ft-2 ul a {
  text-decoration: none;
  color: #fff; /* White text color for links */
  font-size: 1.06rem;
}

.ft-3 p {
  font-weight: 500;
  padding: 0.1rem 0;
  font-size: 1.06rem;
  color: #fff; /* Set text color to white */
}

.ft-3 i {
  padding-right: 0.5rem;
}

.Last-footer {
  background: #de5709; /* Dark orange/red background */
  text-align: center;
  padding: 1rem 0;
}

.Last-footer p {
  margin-bottom: 0;
  font-size: 1.2rem;
  font-weight: 300;
  font-family: "'Poppins', sans-serif";
  color: #fff; /* Set text color to white */
}
`}
</style>
        </>
    );
}

export default Footer;


