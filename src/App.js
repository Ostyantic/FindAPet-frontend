import React from 'react';
// import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
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

  //?called when Search For Pets! is clicked.
  handleSubmit = () => {
    console.log(`Type: ${this.state.type}`)
    console.log(`Size: ${this.state.size}`)
    console.log(`Age: ${this.state.age}`)
    console.log(`Gender: ${this.state.gender}`)
    console.log(`Distance: ${this.state.distance}`)
    console.log(`Location: ${this.state.location}`)
    console.log(`Good Cats: ${this.state.good_with_cats}`)
    console.log(`Good Children: ${this.state.good_with_children}`)
    console.log(`Good Dogs: ${this.state.good_with_dogs}`)
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
                    {['checkbox'].map((type) => (
                      <div key={`inline-${type}`} className="mb-type">
                        <Form.Check
                          inline
                          label="cat"
                          type={type}
                          id={`inline-${type}-1`}
                          onClick={() => this.handleArrayValueChange('type', 'cat')}
                        />
                        <Form.Check
                          inline
                          label="dog"
                          type={type}
                          id={`inline-${type}-2`}
                          onClick={() => this.handleArrayValueChange('type', 'dog')}
                        />
                        <Form.Check
                          inline
                          label="Small furry critter"
                          type={type}
                          id={`inline-${type}-2`}
                          onClick={() => this.handleArrayValueChange('type', 'critter')}
                        />
                      </div>
                    ))}
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
                    {['checkbox'].map((type) => (
                      <div key={`inline-${type}`} className="mb-age">
                        <Form.Check
                          inline
                          label="baby"
                          type={type}
                          id={`inline-${type}-1`}
                          onClick={() => this.handleArrayValueChange('age', 'baby')}
                        />
                        <Form.Check
                          inline
                          label="young"
                          type={type}
                          id={`inline-${type}-2`}
                          onClick={() => this.handleArrayValueChange('age', 'young')}
                        />
                        <Form.Check
                          inline
                          label="adult"
                          type={type}
                          id={`inline-${type}-2`}
                          onClick={() => this.handleArrayValueChange('age', 'adult')}
                        />
                        <Form.Check
                          inline
                          label="senior"
                          type={type}
                          id={`inline-${type}-2`}
                          onClick={() => this.handleArrayValueChange('age', 'senior')}
                        />
                      </div>
                    ))}
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
                    {['checkbox'].map((type) => (
                      <div key={`inline-${type}`} className="mb-gender">
                        <Form.Check
                          inline
                          label="male"
                          type={type}
                          id={`inline-${type}-1`}
                          onClick={() => this.handleArrayValueChange('gender', 'male')}
                        />
                        <Form.Check
                          inline
                          label="female"
                          type={type}
                          id={`inline-${type}-2`}
                          onClick={() => this.handleArrayValueChange('gender', 'female')}
                        />
                        <Form.Check
                          inline
                          label="unknown"
                          type={type}
                          id={`inline-${type}-2`}
                          onClick={() => this.handleArrayValueChange('gender', 'unknown')}
                        />
                      </div>
                    ))}
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
                    {['checkbox'].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Small"
                          type={type}
                          id={`inline-${type}-1`}
                          onClick={() => this.handleArrayValueChange('size', 'small')}
                        />
                        <Form.Check
                          inline
                          label="Medium"
                          type={type}
                          id={`inline-${type}-2`}
                          onClick={() => this.handleArrayValueChange('size', 'medium')}
                        />
                        <Form.Check
                          inline
                          label="Large"
                          type={type}
                          id={`inline-${type}-2`}
                          onClick={() => this.handleArrayValueChange('size', 'large')}
                        />
                        <Form.Check
                          inline
                          label="Extra Large"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                          onClick={() => this.handleArrayValueChange('size', 'xlarge')}
                        />
                      </div>
                    ))}
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
                    {['checkbox'].map((type) => (
                      <div key={`inline-${type}`} className="mb-4">
                        <Form.Check
                          inline
                          label="good with cats"
                          type={type}
                          id={`inline-${type}-1`}
                          onClick={() => this.handleBooleanChange('good_with_cats')}
                        />
                        <Form.Check
                          inline
                          label="good with dogs"
                          type={type}
                          id={`inline-${type}-2`}
                          onClick={() => this.handleBooleanChange('good_with_dogs')}
                        />
                        <Form.Check
                          inline
                          label="good with children"
                          type={type}
                          id={`inline-${type}-2`}
                          onClick={() => this.handleBooleanChange('good_with_children')}
                        />
                      </div>
                    ))}
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
