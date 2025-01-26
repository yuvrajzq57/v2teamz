import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import caraousel_1 from "../assets/caraousel_1.png";
import caraousel_2 from "../assets/caraousel_2.png";
import caraousel_3 from "../assets/caraousel_3.png";

import "../App.css";

const slides = [
  {
    id: 1,
    image: caraousel_1,
    boldText: "Secure Your Data",
    subtitle: "With Advanced Security Solutions",
    blackBackground: false,
  },
  {
    id: 2,
    image: null, // No image for the black background slide
    boldText: (
      <>
        INDIA'S GROWING
        <br />
        OFFENSIVE SECURITY TRAINING
        <br />
        PROVIDER
      </>
    ),
    subtitle: "Revolutionizing the future with cutting-edge solutions",
    blackBackground: true, // This slide will have a black background
  },
  {
    id: 3,
    image: caraousel_3,
    boldText: "Future-Ready Tech",
    subtitle: "Innovating for Tomorrow",
    blackBackground: false,
  },
];

const CarouselSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide">
            {slide.blackBackground ? (
              <div
                className="black-background-slide"
                style={{
                    backgroundColor: "#000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "400px",
                    color: "#fff",
                    textAlign: "center",
                    height: "600px",
                    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)",
                }}
              >
                <div>
                  <h1
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        marginBottom: "80px",
                        background: "linear-gradient(to right, white, #FF7F50)", // Gradient from white to dark orange
    WebkitBackgroundClip: "text", // Clips the gradient to the text
    WebkitTextFillColor: "transparent", // Makes the text transparent to show gradient
    textFillColor: "transparent", /* Clips the gradient to the text */
                        
                        lineHeight: "1.5",
                        textShadow: "none", 
                        fontFamily: "'Poppins', sans-serif", // Use Poppins font// Remove shadow for a clean gradient
                      }}
                  >
                    {slide.boldText}
                  </h1>
                  <p style={{ fontSize: "1.2rem" }}>{slide.subtitle}</p>
                </div>
              </div>
            ) : (
              <div
                className="carousel-background"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "600px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  paddingLeft: "30px",
                  color: "#fff",
                  textShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)",
                }}
              >
                <div>
                  <h1
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {slide.boldText}
                  </h1>
                  <p style={{ fontSize: "1.2rem" }}>{slide.subtitle}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>

      {/* Inline Styles for Responsive Design */}
      <style>
        {`
          .carousel-container {
            width: 100%;
            margin: 0 auto;
            overflow: hidden;
          }
          @media (max-width: 768px) {
            h1 {
              font-size: 2rem;
            }
            p {
              font-size: 1rem;
            }
          }
          @media (max-width: 480px) {
            h1 {
              font-size: 1.5rem;
            }
            p {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CarouselSection;
