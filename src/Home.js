import React from 'react';
import Header from './Header.js';
import Tan from './tanish1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import cv from './CV.pdf';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

  function getcv(){
    const link=document.createElement('a');
    link.href=cv;
    link.download='MY-CV.pdf';
    link.click();
    toast.success("CV Downloaded!");
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>

        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Tan}
            alt="Tanish"
            style={{
              borderRadius: "30%",
              height: "750px",
              width: "550px",
              objectFit: "cover",
              border:"2px red solid"
            }}
          />
        </div>

        <div style={{ flex: 1, paddingLeft: "50px", textAlign: "left" }}>
          <h3
            style={{
              color: "maroon",
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
              fontSize: "2rem",
              lineHeight: "1.5"
            }}
          >
            <b>
              Hi, I'm Rajnish, a Full-Stack Web Developer. Building Clean, Interactive, and Modern Websites.
            </b>
          </h3>

          <div style={{ display: "flex", marginTop: "30px", gap: "40px",marginLeft:"180px" }}>

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

          <button onClick={getcv} style={{height:"40px",width:"200px",backgroundColor:"skyblue",borderRadius:"20px",marginTop:"30px",marginLeft:"220px",fontSize:"20px"}}><b>Download-CV</b></button>

        </div>

      </div>

      <ToastContainer/>
    </div>
  );
}
