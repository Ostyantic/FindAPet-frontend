import React from "react";
import { Container } from "react-bootstrap";
import "../style/aboutus.css"
import background from '../images/background.jpg'
import corporate from '../images/Corporate.jpg'


class AboutUs extends React.Component {
  render() {
    return (
      <body>
        <Container className="coantainer">
          <div className="profile-area">
            <div className="elements">
              <div className="card">
                <div className="img1"> <img src={background} alt="" /> </div>
                <div className="img2"><img src={corporate} alt="" /> </div>
                <div className="biography">
                  <h2>CASEY GLIDEWELL</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-area">
            <div className="container">
              <div className="card">
                <div className="img1"> <img src={background} alt="" /> </div>
                <div className="img2"><img src={corporate} alt="" /> </div>
                <div className="biography">
                  <h2>ANTHONY LOPEZ</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-area">
            <div className="container">
              <div className="card">
                <div className="img1"> <img src={background} alt="" /> </div>
                <div className="img2"><img src={corporate} alt="" /> </div>
                <div className="biography">
                  <h2>ARACELI GARCÍA</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </body>
    )
  }
}

export default AboutUs;