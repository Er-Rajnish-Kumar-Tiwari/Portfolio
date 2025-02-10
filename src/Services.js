import React from 'react'
import Header from './Header.js'
import Tan from './tanish.jpg';

export default function Services() {
    return (
        <div>
            <Header />

            <h2 style={{ textAlign: "center", fontSize: "2.5em", color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',borderBottom:"2px grey solid" }}><b>Services</b></h2>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>


                <div style={{ flex: 1, display: "flex", justifyContent: "center" ,marginLeft:"50px",marginRight:"50px"}}>
                    <img
                        src={Tan}
                        alt="Tanish"
                        style={{
                            borderRadius: "50%",
                            height: "650px",
                            width: "600px",
                            objectFit: "cover",
                            border: "2px red solid"
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
                    marginTop: "40px",
                    border: "2px brown solid"
                }}>
                    <div>
                        <h3 style={{boxShadow: "0 4px 10px rgba(250, 250, 250, 0.1)",color:"grey"}}><b>Front-End Development</b></h3>
                        <p>I build responsive and dynamic user interfaces using modern JavaScript frameworks like React, ensuring smooth interactions and a delightful user experience.</p>
                    </div>

                    <div>
                        <h3 style={{boxShadow: "0 4px 10px rgba(250, 250, 250, 0.1)",color:"grey"}}><b>Back-End Development</b></h3>
                        <p>I develop server-side applications using Node.js, Express, and databases such as MongoDB and SQL to create scalable back-end systems for your web applications.</p>
                    </div>

                    <div>
                        <h3 style={{boxShadow: "0 4px 10px rgba(250, 250, 250, 0.1)",color:"grey"}}><b>UI/UX Design</b></h3>
                        <p>I create intuitive, user-centered designs, focusing on improving the user experience through wireframes, prototypes, and interaction design.</p>
                    </div>

                    <div>
                        <h3 style={{boxShadow: "0 4px 10px rgba(250, 250, 250, 0.1)",color:"grey"}}><b>Technologies I Work With:</b></h3>
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
    )
}
