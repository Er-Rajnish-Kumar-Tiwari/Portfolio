import React from 'react'
import Header from './Header.js'
import Tan1 from './p1.jpg'
import Tan2 from './p2.jpg'
import Tan3 from './p3.jpg'
import Tan4 from './p4.jpg'
import Tan5 from './p5.jpg'
import Tan6 from './p6.jpg'
import Tan7 from './p7.jpg'
import Tan8 from './p8.jpg'
import Tan9 from './p9.jpg'
import Tan10 from './p10.jpg'

export default function Projects() {
  return (
    <div>
      <Header />

      <h2 style={{ textAlign: "center", fontSize: "2.5em", color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', borderBottom: "2px grey solid", paddingBottom:"10px" }}><b>Projects</b></h2>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", gap: "100px" }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Tan9}
            alt="Tanish"
            style={{
              height: "660px",
              width: "700px",
              objectFit: "cover",
              border: "2px solid red",
              borderRadius: "25px",
              marginLeft: "50px"
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

          <div>

            <div>
              <h3 style={{ color: "maroon ", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Name:-</b></h3>
              <p><b>Quiz App</b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Description:-</b></h4>
              <p><b>The Quiz App is an interactive and engaging platform designed to help users test and improve their knowledge on computer topics. The app offers a seamless experience by providing multiple-choice questions such as technology. Users can select their desired topic and view their scores in real-time.</b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Skills/Technologies Used:-</b></h4>
              <li style={{ listStyle: "inside" }}><b>HTML</b></li>
              <li style={{ listStyle: "inside" }}><b>CSS</b></li>
              <li style={{ listStyle: "inside" }}><b>JavaScript</b></li>
              <li style={{ listStyle: "inside" }}><b>React-js</b></li>
              <li style={{ listStyle: "inside" }}><b>Bootstrap</b></li>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Project Link</h4>
              <a style={{textDecoration:"none"}} href="https://er-rajnish-kumar-tiwari.github.io/Quiz-App/">Quiz App Link</a>
            </div>
          </div>

        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", gap: "100px" }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Tan10}
            alt="Tanish"
            style={{
              height: "660px",
              width: "700px",
              objectFit: "cover",
              border: "2px solid red",
              borderRadius: "25px",
              marginLeft: "50px"
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

          <div>

            <div>
              <h3 style={{ color: "maroon ", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Name:-</b></h3>
              <p><b>TodoList App</b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Description:-</b></h4>
              <p><b>The To-Do List App is a simple yet powerful productivity tool designed to help users organize and manage their daily tasks and goals efficiently. This app enables users to create, prioritize, and track tasks, ensuring that nothing is forgotten and everything is completed on time. With a clean and intuitive user interface, users can easily add new tasks, set deadlines, mark tasks as completed, and categorize them for better organization.</b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Skills/Technologies Used:-</b></h4>
              <li style={{ listStyle: "inside" }}><b>HTML</b></li>
              <li style={{ listStyle: "inside" }}><b>CSS</b></li>
              <li style={{ listStyle: "inside" }}><b>JavaScript</b></li>
              <li style={{ listStyle: "inside" }}><b>React-js</b></li>
              <li style={{ listStyle: "inside" }}><b>Bootstrap</b></li>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Project Link</h4>
              <a style={{textDecoration:"none"}} href="https://er-rajnish-kumar-tiwari.github.io/Todo/">TodoList App Link</a>
            </div>
          </div>

        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", gap: "100px" }}>

        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Tan1}
            alt="Tanish"
            style={{
              height: "660px",
              width: "550px",
              objectFit: "cover",
              border: "2px solid red",
              borderRadius: "25px",
              marginLeft: "50px"
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

          <div>

            <div>
              <h3 style={{ color: "maroon ", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Name:-</b></h3>
              <p><b>Weather App</b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Description:-</b></h4>
              <p><b>This project is a weather application that allows users to check the current weather conditions of any city or location. The app will fetch real-time weather data from a weather API and display information such as temperature. The user will be able to search for specific cities, and the app will provide an updated forecast.</b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Skills/Technologies Used:-</b></h4>
              <li style={{ listStyle: "inside" }}><b>HTML</b></li>
              <li style={{ listStyle: "inside" }}><b>CSS</b></li>
              <li style={{ listStyle: "inside" }}><b>JavaScript</b></li>
              <li style={{ listStyle: "inside" }}><b>React-js</b></li>
              <li style={{ listStyle: "inside" }}><b>Bootstrap</b></li>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Project Link</h4>
              <a style={{textDecoration:"none"}} href="https://er-rajnish-kumar-tiwari.github.io/Wapp/">Weather App Link</a>
            </div>
          </div>

        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", gap: "100px" }}>

        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Tan2}
            alt="Tanish"
            style={{
              height: "660px",
              width: "550px",
              objectFit: "cover",
              border: "2px solid red",
              borderRadius: "50px",
              marginLeft: "50px"
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

          <div>

            <div>
              <h3 style={{ color: "maroon ", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Name:-</b></h3>
              <p><b>Student-Management-System</b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Description:-</b></h4>
              <p><b>The Student Management System is a web-based application designed to help manage student data and streamline administrative tasks for schools, colleges, or educational institutions. The system will allow users (administrators or teachers) to add, view, update,Search, and delete student records. It will store details such as student UserName, E-mail, contact details, and Feedback.
              </b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Skills/Technologies Used:-</b></h4>
              <li style={{ listStyle: "inside" }}><b>HTML</b></li>
              <li style={{ listStyle: "inside" }}><b>CSS</b></li>
              <li style={{ listStyle: "inside" }}><b>JavaScript</b></li>
              <li style={{ listStyle: "inside" }}><b>React-js</b></li>
              <li style={{ listStyle: "inside" }}><b>Bootstrap</b></li>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Project Link</h4>
              <a style={{textDecoration:"none"}} href="https://er-rajnish-kumar-tiwari.github.io/Student/">Student-Management-System Link</a>
            </div>

          </div>

        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", gap: "100px" }}>

        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Tan3}
            alt="Tanish"
            style={{
              height: "660px",
              width: "550px",
              objectFit: "cover",
              border: "2px solid red",
              borderRadius: "65px",
              marginLeft: "50px"
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

          <div>

            <div>
              <h3 style={{ color: "maroon ", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Name:-</b></h3>
              <p><b>Password-Generator</b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Description:-</b></h4>
              <p><b>The Password Generator is a web-based application that allows users to generate strong and secure passwords based on various criteria. The user can specify the password length and choose options like including uppercase letters, lowercase letters, numbers, and special characters. The generated password will be displayed to the user with the option to copy it to the clipboard for easy use.
              </b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Skills/Technologies Used:-</b></h4>
              <li style={{ listStyle: "inside" }}><b>HTML</b></li>
              <li style={{ listStyle: "inside" }}><b>CSS</b></li>
              <li style={{ listStyle: "inside" }}><b>JavaScript</b></li>
              <li style={{ listStyle: "inside" }}><b>React-js</b></li>
              <li style={{ listStyle: "inside" }}><b>Bootstrap</b></li>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Project Link</h4>
              <a style={{textDecoration:"none"}} href="https://er-rajnish-kumar-tiwari.github.io/Password-Generator/">Password-Generator Link</a>
            </div>

          </div>

        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", gap: "100px" }}>

        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Tan4}
            alt="Tanish"
            style={{
              height: "660px",
              width: "700px",
              objectFit: "cover",
              border: "2px solid red",
              borderRadius: "55px",
              marginLeft: "50px"
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

          <div>

            <div>
              <h3 style={{ color: "maroon ", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Name:-</b></h3>
              <p><b>Study Library</b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Description:-</b></h4>
              <p><b>The Study Library is an online platform designed to provide users with a rich collection of academic resources, books, articles, and research papers. Users can search, view, and download digital copies of materials or borrow physical books from the library if available. The platform also includes tools for taking notes.
              </b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Skills/Technologies Used:-</b></h4>
              <li style={{ listStyle: "inside" }}><b>HTML</b></li>
              <li style={{ listStyle: "inside" }}><b>CSS</b></li>
              <li style={{ listStyle: "inside" }}><b>JavaScript</b></li>
              <li style={{ listStyle: "inside" }}><b>React-js</b></li>
              <li style={{ listStyle: "inside" }}><b>Bootstrap</b></li>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Project Link</h4>
              <a style={{textDecoration:"none"}} href="https://er-rajnish-kumar-tiwari.github.io/Library/">Study Library Link</a>
            </div>

          </div>

        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", gap: "100px" }}>

        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Tan5}
            alt="Tanish"
            style={{
              height: "660px",
              width: "550px",
              objectFit: "cover",
              border: "2px solid red",
              borderRadius: "75px",
              marginLeft: "50px"
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

          <div>

            <div>
              <h3 style={{ color: "maroon ", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Name:-</b></h3>
              <p><b>QR-Codes Generator</b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Description:-</b></h4>
              <p><b>The QR Code Generator is a web-based application that allows users to create custom QR codes for various purposes, such as websites, text, email addresses, phone numbers, or Wi-Fi access. The generated QR code can be scanned using a mobile device to quickly access the encoded information. Users can download the generated QR code image for personal or professional use.
              </b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Skills/Technologies Used:-</b></h4>
              <li style={{ listStyle: "inside" }}><b>HTML</b></li>
              <li style={{ listStyle: "inside" }}><b>CSS</b></li>
              <li style={{ listStyle: "inside" }}><b>JavaScript</b></li>
              <li style={{ listStyle: "inside" }}><b>J-Query</b></li>
              <li style={{ listStyle: "inside" }}><b>Bootstrap</b></li>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Project Link</h4>
              <a style={{textDecoration:"none"}} href="https://er-rajnish-kumar-tiwari.github.io/QR-Generator/">QR-Codes Generator Link</a>
            </div>

          </div>

        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", gap: "100px" }}>

        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Tan6}
            alt="Tanish"
            style={{
              height: "660px",
              width: "550px",
              objectFit: "cover",
              border: "2px solid red",
              borderRadius: "75px",
              marginLeft: "50px"
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

          <div>

            <div>
              <h3 style={{ color: "maroon ", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Name:-</b></h3>
              <p><b>Simple Calculator</b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Description:-</b></h4>
              <p><b>The Simple Calculator is a web-based application that allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division. The calculator will have a clean and intuitive interface where users can input numbers and operators to calculate results in real-time. This app is designed to handle both single and multi-step calculations, making it a versatile tool for everyday use.
              </b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Skills/Technologies Used:-</b></h4>
              <li style={{ listStyle: "inside" }}><b>HTML</b></li>
              <li style={{ listStyle: "inside" }}><b>CSS</b></li>
              <li style={{ listStyle: "inside" }}><b>JavaScript</b></li>
              <li style={{ listStyle: "inside" }}><b>Bootstrap</b></li>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Project Link</h4>
              <a style={{textDecoration:"none"}} href="https://er-rajnish-kumar-tiwari.github.io/Simple-Calculator/">Simple Calculator Link</a>
            </div>

          </div>

        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", gap: "100px" }}>

        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Tan7}
            alt="Tanish"
            style={{
              height: "660px",
              width: "550px",
              objectFit: "cover",
              border: "2px solid red",
              borderRadius: "75px",
              marginLeft: "50px"
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

          <div>

            <div>
              <h3 style={{ color: "maroon ", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Name:-</b></h3>
              <p><b>Tic-Toc-Toe Game</b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Description:-</b></h4>
              <p><b>The Tic-Tac-Toe Game is a simple two-player game that allows two players to compete on a 3x3 grid. The players alternate turns, one using "X" and the other using "O," placing their marks in empty squares. The first player to align three of their marks horizontally, vertically, or diagonally wins the game. If all squares are filled and there is no winner, the game ends in a draw.
              </b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Skills/Technologies Used:-</b></h4>
              <li style={{ listStyle: "inside" }}><b>HTML</b></li>
              <li style={{ listStyle: "inside" }}><b>CSS</b></li>
              <li style={{ listStyle: "inside" }}><b>JavaScript</b></li>
              <li style={{ listStyle: "inside" }}><b>Bootstrap</b></li>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Project Link</h4>
              <a style={{textDecoration:"none"}} href="https://er-rajnish-kumar-tiwari.github.io/Tic-Toc-Toe-Game/">Tic-Toc-Toe Game Link</a>
            </div>

          </div>

        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", gap: "100px" }}>

        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Tan8}
            alt="Tanish"
            style={{
              height: "660px",
              width: "550px",
              objectFit: "cover",
              border: "2px solid red",
              borderRadius: "25px",
              marginLeft: "50px"
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

          <div>

            <div>
              <h3 style={{ color: "maroon ", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Name:-</b></h3>
              <p><b>Rock-Paper-Scissors Game</b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Project Description:-</b></h4>
              <p><b>This is a simple web-based implementation of the classic rock-paper-scissors game. Users can play against the computer, where both the player and the computer choose either "rock", "paper", or "scissors". The winner is determined based on the following rules:   i.Rock crushes Scissors   ii.Scissors cuts Paper  iii.Paper covers Rock
              </b></p>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}><b>Skills/Technologies Used:-</b></h4>
              <li style={{ listStyle: "inside" }}><b>HTML</b></li>
              <li style={{ listStyle: "inside" }}><b>CSS</b></li>
              <li style={{ listStyle: "inside" }}><b>JavaScript</b></li>
              <li style={{ listStyle: "inside" }}><b>Bootstrap</b></li>
            </div>

            <div>
              <h4 style={{ color: "grey", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Project Link</h4>
              <a style={{textDecoration:"none"}} href="https://er-rajnish-kumar-tiwari.github.io/game/">Rock-Paper-Scissors Game Link</a>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}
