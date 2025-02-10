import React from 'react';
import Header from './Header.js';
import Tan from './tanish1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import cv from './CV.pdf';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  function getcv() {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'MY-CV.pdf';
    link.click();
    toast.success("CV Downloaded!");
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    flexDirection: window.innerWidth <= 768 ? "column" : "row"  // Responsive change here
  };

  const imageStyle = {
    borderRadius: "30%",
    height: window.innerWidth <= 768 ? "350px" : "750px",  // Responsive change
    width: window.innerWidth <= 768 ? "250px" : "550px",   // Responsive change
    objectFit: "cover",
    border: "2px red solid"
  };

  const textStyle = {
    color: "maroon",
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    fontSize: "2rem",
    lineHeight: "1.5",
    textAlign: window.innerWidth <= 768 ? "center" : "left",  // Responsive text alignment
  };

  const iconsContainerStyle = {
    display: "flex",
    marginTop: "30px",
    gap: "40px",
    justifyContent: "center", // Center icons on mobile
  };

  const buttonStyle = {
    height: "40px",
    width: "200px",
    backgroundColor: "skyblue",
    borderRadius: "20px",
    marginTop: "30px",
    marginLeft: window.innerWidth <= 768 ? "0px" : "220px",  // Responsive button margin
    fontSize: "20px"
  };

  return (
    <div>
      <Header />
      <div style={containerStyle}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Tan}
            alt="Tanish"
            style={imageStyle}
          />
        </div>

        <div style={{ flex: 1, paddingLeft: "50px", textAlign: "left" }}>
          <h3 style={textStyle}>
            <b>
              Hi, I'm Rajnish, a Full-Stack Web Developer. Building Clean, Interactive, and Modern Websites.
            </b>
          </h3>

          <div style={iconsContainerStyle}>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: "40px", color: "#333" }} />
            </a>

            <a href="tel:+919572973654" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} style={{ fontSize: "40px", color: "skublue" }} />
            </a>

            <a href="https://www.linkedin.com/in/rajnish-kumar-tiwari-8661522b0/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "40px", color: "#0077b5" }} />
            </a>

            <a href="mailto:rajnishkumartiwari260@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "40px", color: "#db4437" }} />
            </a>
          </div>

          <button onClick={getcv} style={buttonStyle}><b>Download-CV</b></button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
