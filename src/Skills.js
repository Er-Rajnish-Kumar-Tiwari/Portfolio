import React from 'react'
import Tana from './tanish.jpg';
import Header from './Header.js';

export default function Skills() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", gap: "100px" }}>

        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Tana}
            alt="Tanish"
            style={{
              borderRadius: "50%",
              height: "800px",
              width: "750px",
              objectFit: "cover",
              border: "2px solid grey",
              marginLeft: "50px",
              marginBottom:"300px"
            }}
          />
        </div>
        
        <div style={{
          backgroundColor: "#f8d7da",
          color: "black",
          padding: "30px",
          borderRadius: "15px",
          width: "30%",
          maxWidth: "800px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          lineHeight: "1.6",
          fontSize: "1.1em",
          marginBottom: "30px",
          marginRight: "200px",
          border: "2px brown solid"
        }}>
          
      <h2 style={{ textAlign: "center", fontSize: "2.5em", color: "red", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',borderBottom:"2px red solid"}}><b>Skills</b></h2>
          <div>
            <h4 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>HTML</b></h4>
            <progress value={90} max={100}></progress>  <b>95%</b>
          </div>
          
          <div>
            <h4 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>CSS</b></h4>
            <progress value={95} max={100}></progress>  <b>90%</b>
          </div>
          
          <div>
            <h4 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>JavaScript</b></h4>
            <progress value={90} max={100}></progress>  <b>92%</b>
          </div>
          
          <div>
            <h4 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>J-Query</b></h4>
            <progress value={92} max={100}></progress>  <b>90%</b>
          </div>
          
          <div>
            <h4 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>React-js</b></h4>
            <progress value={90} max={100}></progress>  <b>90%</b>
          </div>
          
          <div>
            <h4 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Bootstrap</b></h4>
            <progress value={100} max={100}></progress>  <b>100%</b>
          </div>
          
          <div>
            <h4 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Python</b></h4>
            <progress value={90} max={100}></progress>  <b>90%</b>
          </div>
          
          <div>
            <h4 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Java</b></h4>
            <progress value={90} max={100}></progress>  <b>90%</b>
          </div>

          <div>
            <h4 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>C-language</b></h4>
            <progress value={95} max={100}></progress>  <b>95%</b>
          </div>
          
          <div>
            <h4 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>C++</b></h4>
            <progress value={98} max={100}></progress>  <b>98%</b>
          </div>
          
          <div>
            <h4 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Git</b></h4>
            <progress value={90} max={100}></progress>  <b>90%</b>
          </div>
          
          <div>
            <h4 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Github</b></h4>
            <progress value={90} max={100}></progress>  <b>90%</b>
          </div>
          
          <div>
            <h4 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>OOPS</b></h4>
            <progress value={95} max={100}></progress>  <b>95%</b>
          </div>
          
          <div>
            <h4 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>DSA</b></h4>
            <progress value={80} max={100}></progress>  <b>80%</b>
          </div>

        </div>
      </div>

    </div>
  )
}
