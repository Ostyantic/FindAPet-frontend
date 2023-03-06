import React from "react";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const containerStyling = {
  color: "white",
  // backgroundColor: "DodgerBlue",
  padding: ".5em",
  fontFamily: "Arial",
  width: "500px",
  textAlign: "center",
  // border: "1px solid black",

};



class Home extends React.Component {
  render() {
    return (
      <>
        <Container style={containerStyling}>
          <Accordion className='Search' defaultActiveKey="type" alwaysOpen>

            {
              //! Type Accordion Element
            }
            <Accordion.Item eventKey="animaltype">
              <Accordion.Header>I am looking for a</Accordion.Header>
              <Accordion.Body>
                <Form>

                  <Form.Check
                    inline
                    type='radio'
                    name="group1"
                    label='cat'
                    onClick={() => this.props.handleRadioChange('type', 'cat')}
                    id='radio1'
                  />
                  <Form.Check
                    inline
                    type='radio'
                    name="group1"
                    label='dog'
                    onClick={() => this.props.handleRadioChange('type', 'dog')}
                    id='radio2'
                  />
                  <Form.Check
                    inline
                    type='radio'
                    name="group1"
                    label='rabbit'
                    onClick={() => this.props.handleRadioChange('type', 'rabbit')}
                    id='radio3'
                  />
                  <Form.Check
                    inline
                    type='radio'
                    name="group1"
                    label='bird'
                    onClick={() => this.props.handleRadioChange('type', 'bird')}
                    id='radio4'
                  />
                </Form>
              </Accordion.Body>
            </Accordion.Item>

            {
              //! Age Accordion Element
            }
            <Accordion.Item eventKey="age">
              <Accordion.Header>Age</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Check
                    inline
                    type='checkbox'
                    label='baby'
                    onClick={() => this.props.handleArrayValueChange('age', 'baby')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='young'
                    onClick={() => this.props.handleArrayValueChange('age', 'young')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='adult'
                    onClick={() => this.props.handleArrayValueChange('age', 'adult')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='senior'
                    onClick={() => this.props.handleArrayValueChange('age', 'senior')}
                  />
                </Form>
              </Accordion.Body>
            </Accordion.Item>


            {
              //! gender Accordion Element
            }
            <Accordion.Item eventKey="gender">
              <Accordion.Header>Gender</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Check
                    inline
                    type='checkbox'
                    label='male'
                    onClick={() => this.props.handleArrayValueChange('gender', 'male')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='female'
                    onClick={() => this.props.handleArrayValueChange('gender', 'female')}
                  />
                </Form>
              </Accordion.Body>
            </Accordion.Item>

            {
              //! Distance/Location Accordion Element
            }
            <Accordion.Item eventKey="disloc">
              <Accordion.Header>
                Location
              </Accordion.Header>
              <Accordion.Body>
                <InputGroup className="mb-3">
                  within
                  <Form.Select onChange={this.props.handleDistanceChange} aria-label="milesDistanceSelect">
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                    <option value={250}>250</option>
                    <option value={500}>500</option>
                  </Form.Select>
                  <InputGroup.Text id="milesOfAddon">miles of</InputGroup.Text>
                  <Form>
                    <Form.Control onChange={this.props.handleLocationChange} type="location" placeholder="City, state, or ZIP" />
                  </Form>
                </InputGroup>
              </Accordion.Body>
            </Accordion.Item>


            {
              //! Size Accordion Element
            }
            <Accordion.Item eventKey="size">
              <Accordion.Header>Size</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Check
                    inline
                    type='checkbox'
                    label='small'
                    onClick={() => this.props.handleArrayValueChange('size', 'small')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='medium'
                    onClick={() => this.props.handleArrayValueChange('size', 'medium')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='large'
                    onClick={() => this.props.handleArrayValueChange('size', 'large')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='extra large'
                    onClick={() => this.props.handleArrayValueChange('size', 'xlarge')}
                  />
                </Form>
              </Accordion.Body>
            </Accordion.Item>



            {
              //! Temperament Accordion Element
            }
            <Accordion.Item eventKey="temper">
              <Accordion.Header>Temperament</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Check
                    inline
                    type='checkbox'
                    label='good with cats'
                    onClick={() => this.props.handleBooleanChange('good_with_cats')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='good with dogs'
                    onClick={() => this.props.handleBooleanChange('good_with_dogs')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='good with children'
                    onClick={() => this.props.handleBooleanChange('good_with_children')}
                  />
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {
            //! submit button
          }




        </Container>
          <Button onClick={() => this.props.handleSubmit()}>
            Search For Pets!
          </Button>
      </>)
  }
}

export default Home;