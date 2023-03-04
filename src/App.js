import React from "react";
// import { Card, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import background from './background.jpg'
import corporate from './Corporate.jpg'

// Araceli´s work 
class App extends React.Component {
  render() {
    return (
      <body>
      <div className="profile-area">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="img1"> <img src={background} alt="" /> </div>
                <div className="img2"><img src={corporate} alt="" /> </div>
                <div className="biography">
                  <h2>Casey Glidewell</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="socials">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-area">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="img1"> <img src={background} alt="" /> </div>
                <div className="img2"><img src={corporate} alt="" /> </div>
                <div className="biography">
                  <h2>Casey Glidewell</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="socials">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-area">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="img1"> <img src={background} alt="" /> </div>
                <div className="img2"><img src={corporate} alt="" /> </div>
                <div className="biography">
                  <h2>Casey Glidewell</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="socials">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </body>
      
      

      // <Container>
      //   <Row>
      //     <Col>
      //       <Card className="card">
      //         <Card.Img className="img1" src={background} alt="" />
      //         <Card.Img className="img2" src={corporate} alt="" />
      //         <Card.Body>
      //           <Card.Title className="name">
      //             Anthony Lopez
      //           </Card.Title>
      //           <Card.Text className="bio">
      //             Here goes my biography.
      //           </Card.Text>
      //           <Card.Link></Card.Link>
      //           <Card.Link></Card.Link>
      //           <Card.Link></Card.Link>
      //         </Card.Body>
      //       </Card>
      //     </Col>
      //     <Col>
      //       <Card>
      //         <Card.Img className="img1" src="src/Susi1.JPG" alt="" />
      //         <Card.Img className="img2" src="src/Corporate.jpg" alt="" />
      //         <Card.Body>
      //           <Card.Title className="name">
      //             Casey Glidewell
      //           </Card.Title>
      //           <Card.Text className="bio">
      //             Here goes my biography.
      //           </Card.Text>
      //           <Card.Link></Card.Link>
      //           <Card.Link></Card.Link>
      //           <Card.Link></Card.Link>
      //         </Card.Body>
      //       </Card>
      //     </Col>
      //     <Col>
      //       <Card className="card">
      //         <Card.Img className="img1" src="src/Susi1.JPG" alt="" />
      //         <Card.Img className="img2" src="src/Corporate.jpg" alt="" />
      //         <Card.Body>
      //           <Card.Title className="name">
      //             Araceli García
      //           </Card.Title>
      //           <Card.Text className="bio">
      //             Here goes my biography.
      //           </Card.Text>
      //           <Card.Link></Card.Link>
      //           <Card.Link></Card.Link>
      //           <Card.Link></Card.Link>
      //         </Card.Body>
      //       </Card>
      //     </Col>
      //   </Row>
      // </Container>
    );
  }
}

export default App;
