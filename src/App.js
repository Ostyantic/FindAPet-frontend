import React from 'react';
// import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/home';
import Profile from './components/profile';
import AboutUs from './components/about-us';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



const containerStyling = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: ".5em",
  fontFamily: "Arial",
  width: "100%",
  textAlign: "center",
};

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


      //This is a concatenated string that has all of the arguments that the user has chosen before hitting search for pets. filled out when the submit button is pressed. example of what this variable will look like: 
      //?    'age=young, adult&gender=female&size=large, xlarge'
      sentArgs: ''


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


  handleConvertArrToStr = (key) => {
    const stringed = this.state[key].join(', ')

    return stringed;
    // this.setState({ [key]: stringed })
    // console.log(`stringed value is ${stringed} and our keyvalue is now ${this.state[key]}`)
  };

  handleCullUnusedArr = (key) => {

    var added = this.state[key]
    console.log("PING!")
    console.log(added)

    this.state[key] === [] ? console.log(`${this.state[key]} is empty.`) :




      this.setState({})

  }


  //?called when Search For Pets! is clicked.
  handleSubmit = () => {


    //example target fullURL http://localhost:3001/getpet?age=young, adult&gender=female
    // var sentArgs = '';
    // var sentFullURL = '';

    console.log(`Type: ${this.state.type}`)
    console.log(`Age: ${this.state.age}`)
    console.log(`Gender: ${this.state.gender}`)
    console.log(`Distance: ${this.state.distance}`)
    console.log(`Location: ${this.state.location}`)
    console.log(`Size: ${this.state.size}`)
    console.log(`Good Cats: ${this.state.good_with_cats}`)
    console.log(`Good Children: ${this.state.good_with_children}`)
    console.log(`Good Dogs: ${this.state.good_with_dogs}`)
    var type = this.handleConvertArrToStr('type')
    console.log(`Our strung type is ${type}`)
    var age = this.handleConvertArrToStr('age')
    var gender = this.handleConvertArrToStr('gender')
    var size = this.handleConvertArrToStr('size')

    this.handleCullUnusedArr('age')






    axios.get(`${process.env.BACK_END_URL}/getpet?${this.state.sentArgs}`)

  }

  render() {


    return (
      <>


        <Router>
          <Header className='header'/>
          <Routes>
            <Route 
            exact path='/'
            element={<Home
              handleLocationChange={this.handleLocationChange}
              handleDistanceChange={this.handleDistanceChange}
              handleBooleanChange={this.handleBooleanChange}
              handleArrayValueChange={this.handleArrayValueChange}
              handleSubmit={this.handleSubmit}
            />}
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

           {/* <Container style={containerStyling}>
            <Accordion defaultActiveKey="type" alwaysOpen>

            {
              //! Type Accordion Element
            }
            <Accordion.Item eventKey="type">
              <Accordion.Header>I am looking for a:</Accordion.Header>
              <Accordion.Body>
                <Form>

                  <Form.Check
                    inline
                    type='checkbox'
                    label='cat'
                    onClick={() => this.handleArrayValueChange('type', 'cat')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='dog'
                    onClick={() => this.handleArrayValueChange('type', 'dog')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='Small furry critter'
                    onClick={() => this.handleArrayValueChange('type', 'critter')}
                  />

                </Form>
              </Accordion.Body>
            </Accordion.Item>

              {
                //! Age Accordion Element
              }
            <Accordion.Item eventKey="age">
              <Accordion.Header>Of the age(s):</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Check
                    inline
                    type='checkbox'
                    label='baby'
                    onClick={() => this.handleArrayValueChange('age', 'baby')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='young'
                    onClick={() => this.handleArrayValueChange('age', 'young')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='adult'
                    onClick={() => this.handleArrayValueChange('age', 'adult')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='senior'
                    onClick={() => this.handleArrayValueChange('age', 'senior')}
                  />
                </Form>
              </Accordion.Body>
            </Accordion.Item>


            {
              //! gender Accordion Element
            }
            <Accordion.Item eventKey="gender">
              <Accordion.Header>Of the gender(s):</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Check
                    inline
                    type='checkbox'
                    label='male'
                    onClick={() => this.handleArrayValueChange('gender', 'male')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='female'
                    onClick={() => this.handleArrayValueChange('gender', 'female')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='unknown'
                    onClick={() => this.handleArrayValueChange('gender', 'unknown')}
                  />
                </Form>
              </Accordion.Body>
            </Accordion.Item>

              {
                //! Distance/Location Accordion Element
              }
              <Accordion.Item eventKey="disloc">
                <Accordion.Header>
                  Located:
                </Accordion.Header>
                <Accordion.Body>
                  <InputGroup className="mb-3">
                    within
                    <Form.Select onChange={this.handleDistanceChange} aria-label="milesDistanceSelect">
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                      <option value={250}>250</option>
                      <option value={500}>500</option>
                    </Form.Select>
                    <InputGroup.Text id="milesOfAddon">miles of</InputGroup.Text>
                    <Form>
                      <Form.Control onChange={this.handleLocationChange} type="location" placeholder="City, state, or ZIP" />
                    </Form>
                  </InputGroup>
                </Accordion.Body>
              </Accordion.Item>

                          
            {
              //! Size Accordion Element
            }
            <Accordion.Item eventKey="size">
              <Accordion.Header>of the size(s):</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Check
                    inline
                    type='checkbox'
                    label='small'
                    onClick={() => this.handleArrayValueChange('size', 'small')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='medium'
                    onClick={() => this.handleArrayValueChange('size', 'medium')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='large'
                    onClick={() => this.handleArrayValueChange('size', 'large')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='extra large'
                    onClick={() => this.handleArrayValueChange('size', 'xlarge')}
                  />
                </Form>
              </Accordion.Body>
            </Accordion.Item>



            {
              //! Temperament Accordion Element
            }
            <Accordion.Item eventKey="temper">
              <Accordion.Header>with a temperament that is:</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Check
                    inline
                    type='checkbox'
                    label='good with cats'
                    onClick={() => this.handleBooleanChange('good_with_cats')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='good with dogs'
                    onClick={() => this.handleBooleanChange('good_with_dogs')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='good with children'
                    onClick={() => this.handleBooleanChange('good_with_children')}
                  />
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>



            {
              //! submit button
            }

            <Button onClick={() => this.handleSubmit()}>
              Search For Pets!
            </Button>
          </Container> */}




          <Footer className='footer'/>


        </Router>
        




      </>
    );
  }
}

export default App;
