import React from 'react';
// import ReactDOM from 'react-dom/client';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/home';
import Profile from './components/profile';
import AboutUs from './components/about-us';
import Footer from './components/Footer';
import Animals from './components/Animals';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




// Araceli´s code
import "./App.css";
import background from './background.jpg'
import corporate from './Corporate.jpg'



class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {

      //species and type. EX: type:'dog'  |  species:'dog'
      //?Species is for more specialized searches that might be out of scope for this project. Not making a dropdown menu of every rabbit breed, dog breed, etc. in the world.
      type: [],
      //// species: '',
      // cat: false,
      // dog: false,
      // critter: false,

      //age valid args 'baby' 'young' 'adult' 'senior' allows multiple
      age: [],

      //gender valid args 'male' 'female' 'unknown' allows multiple
      gender: [],

      //size valid args 'small' 'medium' 'large' 'xlarge' allows multiple
      size: [],

      //status valid args 'adoptable' 'adopted' 'found'
      //?Unless we're adding in a stretch goal of checking favorites to see if they've been adopted out from under the user, the status keyvalue pair should NOT be used, as it defaults to 'adoptable' which is what we want anyway.
      ////status: '',

      //good with x. Each of the below are booleans.
      //? if not used, do you get both animals that are and aren't good with children?
      good_with_children: false,
      good_with_dogs: false,
      good_with_cats: false,

      //built in sort system. valid args 'recent' '-recent' 'distance' '-distance' 'random'
      //?note the minusrecent and minusdistance. Those give the results in reverse order.
      sort: '',


      //location. String. can be a city, a state, a lat lon pair, or a postal code.
      location: '',

      //distance, in miles. integer. Requires location to be set to be valid. Defaults to 100, maximum 500.
      distance: 50,

      data: []




    };
  }

  handleBooleanChange = e => {
    //Get a string from event fire, toggle respective state's true/false.
    this.state[e] ? this.setState({ [e]: false }) : this.setState({ [e]: true });
  }

  //?Called when the location value changes specifically.
  handleLocationChange = (e) => {
    this.setState({ location: e.target.value })
  }

  //?Called when the distance value changes specifically.
  handleDistanceChange = (e) => {
    this.setState({ distance: e.target.value })
  }


  //?called for keyvalue pairs where the value is a mutable array. for example  {size:[small, large, xlarge]}
  handleArrayValueChange = (key, value) => {

    //Save to var our keyvalue pair's current value array
    var current = this.state[key];

    //If the value already exists in the array, remove it. If it does not exist, add it.
    current.indexOf(value) > -1 ? current.splice(current.indexOf(value), 1) : current.push(value)

    //Update our state with the new key valuearray pair.
    this.setState({ [key]: current })

  };


  handleRadioChange = (key, value) => {
    this.setState({ [key]: value })
  }


  handleAssembleUrl = () => {
    var parameterNestedArray = []


    parameterNestedArray.push(`type=${this.state.type}`)


    if (this.state.age.length !== 0) {
      var ageStringed = this.state.age.join(',')
      console.log(`age=${ageStringed}`)
      parameterNestedArray.push(`age=${ageStringed}`)
    }

    if (this.state.gender.length !== 0) {
      var genderStringed = this.state.gender.join(',')
      console.log(`gender=${genderStringed}`)
      parameterNestedArray.push(`gender=${genderStringed}`)
    }

    if (this.state.size.length !== 0) {
      var sizeStringed = this.state.size.join(',')
      console.log(`size=${sizeStringed}`)
      parameterNestedArray.push(`size=${sizeStringed}`)
    }

    var assembled = parameterNestedArray.join('&');

    return assembled
  }


  //?called when Search For Pets! is clicked.
  handleSubmit = async () => {

    console.log(`Type: ${this.state.type}`)
    console.log(`Age: ${this.state.age}`)
    console.log(`Gender: ${this.state.gender}`)
    console.log(`Distance: ${this.state.distance}`)
    console.log(`Location: ${this.state.location}`)
    console.log(`Size: ${this.state.size}`)
    console.log(`Good Cats: ${this.state.good_with_cats}`)
    console.log(`Good Children: ${this.state.good_with_children}`)
    console.log(`Good Dogs: ${this.state.good_with_dogs}`)

    var sentArgs = this.handleAssembleUrl();
    console.log(`SENT ARGS: ${sentArgs}`)

    var url = `${process.env.REACT_APP_SERVER}/getpet?${sentArgs}`
    console.log(url);

    var backendResponse = await axios.get(url)

    console.log(backendResponse.data);


    this.setState({ data: backendResponse.data })

  }

  render() {


    return (
      <>


        <Router>
          <Header className='header' />
          <Routes>
            <Route
              exact path='/'
              element={
                <>

                  <Home
                    handleLocationChange={this.handleLocationChange}
                    handleDistanceChange={this.handleDistanceChange}
                    handleBooleanChange={this.handleBooleanChange}
                    handleArrayValueChange={this.handleArrayValueChange}
                    handleSubmit={this.handleSubmit}
                    handleRadioChange={this.handleRadioChange}
                  />

                  <Animals animalData={this.state.data} />
                </>}

            />
            <Route
              exact path='/profile'
              element={<Profile />}

            />
            <Route
              exact path='/aboutus'
              element={<AboutUs />}

            />
          </Routes>



          <Footer className='footer' />


        </Router>
        
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



      </>
    );
  }
}

export default App;
