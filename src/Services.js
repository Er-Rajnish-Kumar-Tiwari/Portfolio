import React from 'react';
import Header from './Header.js';
import Tan from './tanish.jpg';

export default function Services() {
  const containerStyle = {
    display: "flex",
    flexDirection: window.innerWidth <= 768 ? "column" : "row", // Stack on mobile
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px"
  };

  const imageStyle = {
    borderRadius: "50%",
    height: window.innerWidth <= 768 ? "350px" : "650px", // Adjust for mobile
    width: window.innerWidth <= 768 ? "350px" : "600px", // Adjust for mobile
    objectFit: "cover",
    border: "2px red solid",
    margin: window.innerWidth <= 768 ? "20px 0" : "0 50px", // Adjust margins for mobile
  };

  const contentStyle = {
    backgroundColor: "#f8d7da",
    color: "black",
    padding: "30px",
    borderRadius: "15px",
    width: window.innerWidth <= 768 ? "90%" : "80%", // Adjust width for mobile
    maxWidth: "800px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    lineHeight: "1.6",
    fontSize: "1.1em",
    marginBottom: "30px",
    marginTop: window.innerWidth <= 768 ? "20px" : "40px",
    border: "2px brown solid",
    textAlign: "justify"
  };

  return (
    <div>
      <Header />

      <h2 style={{
        textAlign: "center",
        fontSize: "2.5em",
        color: "maroon",
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        borderBottom: "2px grey solid"
      }}>
        <b>Services</b>
      </h2>

      <div style={containerStyle}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img src={Tan} alt="Tanish" style={imageStyle} />
        </div>

        <div style={contentStyle}>
          <div>
            <h3 style={{ boxShadow: "0 4px 10px rgba(250, 250, 250, 0.1)", color: "grey" }}><b>Front-End Development</b></h3>
            <p>I build responsive and dynamic user interfaces using modern JavaScript frameworks like React, ensuring smooth interactions and a delightful user experience.</p>
          </div>

          <div>
            <h3 style={{ boxShadow: "0 4px 10px rgba(250, 250, 250, 0.1)", color: "grey" }}><b>Back-End Development</b></h3>
            <p>I develop server-side applications using Node.js, Express, and databases such as MongoDB and SQL to create scalable back-end systems for your web applications.</p>
          </div>

          <div>
            <h3 style={{ boxShadow: "0 4px 10px rgba(250, 250, 250, 0.1)", color: "grey" }}><b>UI/UX Design</b></h3>
            <p>I create intuitive, user-centered designs, focusing on improving the user experience through wireframes, prototypes, and interaction design.</p>
          </div>

          <div>
            <h3 style={{ boxShadow: "0 4px 10px rgba(250, 250, 250, 0.1)", color: "grey" }}><b>Technologies I Work With:</b></h3>
            <ul>
              <li><b>JavaScript/React</b> - Modern UI development</li>
              <li><b>Node.js</b> - Server-side development</li>
              <li><b>MongoDB</b> - SQL database</li>
              <li><b>HTML5/CSS3</b> - Responsive design and layout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
