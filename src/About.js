import React from 'react';
import Header from './Header';
import Tana from './tanish2.jpg';

export default function About() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    gap: window.innerWidth <= 768 ? "20px" : "100px", // Adjust gap for mobile
    flexDirection: window.innerWidth <= 768 ? "column" : "row", // Stack on mobile
  };

  const imageStyle = {
    borderRadius: "50%",
    height: window.innerWidth <= 768 ? "300px" : "580px", // Smaller image on mobile
    width: window.innerWidth <= 768 ? "300px" : "500px", // Smaller image on mobile
    objectFit: "cover",
    border: "2px solid red",
    marginLeft: window.innerWidth <= 768 ? "0" : "50px", // Adjust margin for mobile
  };

  const textStyle = {
    backgroundColor: "#f8d7da",
    color: "black",
    padding: "20px", // Less padding on mobile
    borderRadius: "15px",
    width: "90%", // Wider text area on mobile
    maxWidth: "800px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    lineHeight: "1.6",
    fontSize: window.innerWidth <= 768 ? "1em" : "1.1em", // Adjust font size
    marginBottom: "30px",
    marginRight: window.innerWidth <= 768 ? "0" : "200px", // Adjust margin for mobile
    border: "2px brown solid",
    textAlign: "justify",
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
        <b>About Me</b>
      </h2>

      <div style={containerStyle}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Tana}
            alt="Tanish"
            style={imageStyle}
          />
        </div>

        <div style={textStyle}>
          <p>Hi! I'm <strong>Rajnish</strong>, a passionate web developer focused on building beautiful and interactive user experiences using modern JavaScript frameworks like React.</p>
          <p>I specialize in building dynamic, responsive web applications using <strong>JavaScript</strong>, <strong>HTML/CSS</strong>, and <strong>React.js</strong>.</p>
          <p>I have a background in graphic design, which led me to pursue a career in web development. After completing a full-stack web development bootcamp, I have been working on various personal and freelance projects, continuously improving my skills.</p>
          <p>I'm driven by a love for solving complex problems and creating intuitive, user-friendly designs. I’m constantly excited by the ability to bring ideas to life through code and contribute to projects that make a difference.</p>
          <p>I'm currently looking for opportunities to work on exciting projects that involve <strong>React</strong> and <strong>UI/UX design</strong>.</p>
        </div>
      </div>
    </div>
  );
}
