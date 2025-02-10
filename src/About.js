import React from 'react'
import Header from './Header'
import Tana from './tanish2.jpg';

export default function About() {
  return (
    <div>
      <Header />
      
      <h2 style={{ textAlign: "center", fontSize: "2.5em", color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',borderBottom:"2px grey solid" }}><b>About Me</b></h2>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px",gap:"100px" }}>

        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Tana}
            alt="Tanish"
            style={{
              borderRadius: "50%",
              height: "580px",
              width: "500px",
              objectFit: "cover",
              border: "2px solid red",
              marginLeft:"50px"
            }}
          />
        </div>

        <div style={{
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
          marginRight: "200px",
          border: "2px brown solid"
        }}>
          <p>Hi! I'm <strong>Rajnish</strong>, a passionate web developer focused on building beautiful and interactive user experiences using modern JavaScript frameworks like React.</p>
          <p>I specialize in building dynamic, responsive web applications using <strong>JavaScript</strong>, <strong>HTML/CSS</strong>, and <strong>React.js</strong>.</p>
          <p>I have a background in graphic design, which led me to pursue a career in web development. After completing a full-stack web development bootcamp, I have been working on various personal and freelance projects, continuously improving my skills.</p>
          <p>I'm driven by a love for solving complex problems and creating intuitive, user-friendly designs. I’m constantly excited by the ability to bring ideas to life through code and contribute to projects that make a difference.</p>
          <p>I'm currently looking for opportunities to work on exciting projects that involve <strong>React</strong> and <strong>UI/UX design</strong>.</p>
        </div>
      </div>
    </div>
  )
}
