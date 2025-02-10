import React from 'react';
import Tana from './tanish2.jpg';
import Header from './Header.js';

export default function Education() {
  const containerStyle = {
    display: "flex",
    flexDirection: window.innerWidth <= 768 ? "column" : "row", // Stack on mobile
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    gap: "100px"
  };

  const imageStyle = {
    borderRadius: "50%",
    height: window.innerWidth <= 768 ? "300px" : "580px", // Adjust height for mobile
    width: window.innerWidth <= 768 ? "300px" : "500px", // Adjust width for mobile
    objectFit: "cover",
    border: "2px solid red",
    marginLeft: window.innerWidth <= 768 ? "0" : "50px" // Center image for mobile
  };

  const contentStyle = {
    backgroundColor: "#f8d7da",
    color: "black",
    padding: "30px",
    borderRadius: "15px",
    width: "80%",
    maxWidth: "800px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    lineHeight: "1.6",
    fontSize: "1.1em",
    marginBottom: "30px",
    marginRight: window.innerWidth <= 768 ? "0" : "200px", // Adjust margin for mobile
    textAlign: window.innerWidth <= 768 ? "center" : "left" // Center text for mobile
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
        <b>Education</b>
      </h2>

      <div style={containerStyle}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img src={Tana} alt="Tanish" style={imageStyle} />
        </div>

        <div style={contentStyle}>
          <div>
            <h3 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>(i) Bachelor in Computer Science Engineering</b></h3>
            <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Guru Kashi University (2023 - 2027)</b></h4>
            <p><b>Currently Pursuing</b></p>
          </div>

          <div>
            <h3 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>(ii) 12th in Science</b></h3>
            <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Bihar School Examination Board (2021 - 2023)</b></h4>
            <p><b>Passed with 69%</b></p>
          </div>

          <div>
            <h3 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>(iii) Advanced Diploma in Computer Application</b></h3>
            <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Global Institute of Information Technology (2021 - 2022)</b></h4>
            <p><b>Passed with 79%</b></p>
          </div>

          <div>
            <h3 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>(iv) 10th</b></h3>
            <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Bihar School Examination Board (2020 - 2021)</b></h4>
            <p><b>Passed with 80%</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}
