import React from "react";
import { Container } from "react-bootstrap";
import "../style/aboutus.css"
import Susi1 from '../images/Susi1.png'
import Araceli from '../images/Araceli-profile.png'
import Anthony from '../images/Anthony-profile.png'
import Cats from '../images/Anthony-cats.png'
import Caseyorig from '../images/Caseyorig.png'
import pep from '../images/Pep.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


class AboutUs extends React.Component {
  render() {
    return (
      <body>
        <Container className="coantainer">
          <div className="profile-area">
            <div className="elements">
              <div className="card">
                <div className="img1"> <img src={pep} alt="" /> </div>
                <div className="img2"><img src={Caseyorig} alt="" /> </div>
                <div className="biography">
                  <h2>CASEY GLIDEWELL</h2>
                  <p>
                    <p>Age: Adult</p>
                    <p>Size: Medium</p>
                    <p>Gender: Undetermined</p>
                    <p>Type: Human(?)</p>
                    <p>Good With: Cats, Dogs, Slimes, California Quails, Blobs.</p>
                    <p><a href={"https://github.com/ColorInvert"} rel={"noreferrer"} target={"_blank"}>Click here to find out more about Casey!</a></p>
                  </p>
                </div>
                <div className="socials">
                  <a href="https://github.com/ColorInvert"><GitHubIcon /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-area">
            <div className="container">
              <div className="card">
                <div className="img1"> <img src={Cats} alt="" /> </div>
                <div className="img2"><img src={Anthony} alt="" /> </div>
                <div className="biography">
                  <h2 className="profileName">ANTHONY LOPEZ</h2>
                  <p>I am a Software developer with a background in Order Management and Customer Care. I am an aspiring video game developer with a passion to use code to create unforgettable gaming experiences. I have two cats, both siblings named Shadow (right) & Onyx (left).</p>
                </div>
                <div className="socials">
                  <a href="https://www.linkedin.com/in/antalopez/"><LinkedInIcon /></a>
                  <a href="https://github.com/Ostyantic"><GitHubIcon /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-area">
            <div className="container">
              <div className="card">
                <div className="img1"> <img src={Susi1} alt="" /> </div>
                <div className="img2"><img src={Araceli} alt="" /> </div>
                <div className="biography">
                  <h2 className="profileName">ARACELI GARCÍA</h2>
                  <p>Future Software Developer with a background in Hospitality and Hotel Management always looking for the next opportunity to outgrow herself.
                    Passionate about developing quality and appealing products. In love with her greyhound pet Susi.
                  </p>
                </div>
                <div className="socials">
                  <a href="https://www.linkedin.com/in/araceli-garcia-martinez/"><LinkedInIcon /></a>
                  <a href="https://github.com/Araceligm90"><GitHubIcon /></a>
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