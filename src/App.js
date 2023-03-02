import React from 'react';
// import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';




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
      type: '',
      //// species: '',
      cat: false,
      dog: false,
      critter: false,

      //age valid args 'baby' 'young' 'adult' 'senior' allows multiple
      age: '',

      //gender valid args 'male' 'female' 'unknown' allows multiple
      gender: '',

      //size valid args 'small' 'medium' 'large' 'xlarge' allows multiple
      size: '',

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
      distance: 100,




    };
  }

  handleBooleanToggle = e => {

    //takes in a string that matches an existing key name from a keyvalue pair, and if that keyvalue pair is false, set to true. if it's true, set to false.

    this.state[e] ?
      this.setState({ [e]: false })
      :
      this.setState({ [e]: true });

  }

  handleValueSet = (key, value) => {

    // console.log(key, value)

    //!Note: This currently is treated like a radio, not checkboxes. A new value will *remove* the previous one, meaning only one value is searchable at a time for values that can have multiple arguments. -Casey
    this.setState({ [key]: value })


    console.log(this.state.size);


  };



  render() {


    return (
      <>
        <Container style={containerStyling}>




          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>I am looking for a:</Accordion.Header>
              <Accordion.Body>
                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="cat"
                        type={type}
                        id={`inline-${type}-1`}
                        onClick={() => this.handleBooleanToggle('cat')}
                      />
                      <Form.Check
                        inline
                        label="dog"
                        type={type}
                        id={`inline-${type}-2`}
                        onClick={() => this.handleBooleanToggle('dog')}
                      />
                      <Form.Check
                        inline
                        label="Small furry critter"
                        type={type}
                        id={`inline-${type}-2`}
                        onClick={() => this.handleBooleanToggle('critter')}
                      />
                    </div>
                  ))}
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Located:
              </Accordion.Header>
              <Accordion.Body>


                <InputGroup className="mb-3">
                  within
                  <Form.Select aria-label="Default select example">
                    <option value="100">100</option>
                    <option value="250">250</option>
                    <option value="500">500</option>
                  </Form.Select>
                  <InputGroup.Text id="basic-addon1">miles of</InputGroup.Text>
                  <Form>
                    <Form.Control type="location" placeholder="City or State" />
                  </Form>
                </InputGroup>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>of the size:</Accordion.Header>
              <Accordion.Body>
                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Small"
                        type={type}
                        id={`inline-${type}-1`}
                        onClick={() => this.handleValueSet('size', 'small')}
                      />
                      <Form.Check
                        inline
                        label="Medium"
                        type={type}
                        id={`inline-${type}-2`}
                        onClick={() => this.handleValueSet('size', 'medium')}
                      />
                      <Form.Check
                        inline
                        label="Large"
                        type={type}
                        id={`inline-${type}-2`}
                        onClick={() => this.handleValueSet('size', 'large')}
                      />
                      <Form.Check
                        inline
                        label="Extra Large"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        onClick={() => this.handleValueSet('size', 'xlarge')}
                      />
                    </div>
                  ))}
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Button>
            Search for pets!
          </Button>



        </Container>




      </>
    );
  }
}

export default App;
