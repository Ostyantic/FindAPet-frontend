import React from "react";
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



class Home extends React.Component {
  render() {
    return (
      <>
        <Container style={containerStyling}>
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
                    onClick={() => this.props.handleArrayValueChange('type', 'cat')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='dog'
                    onClick={() => this.props.handleArrayValueChange('type', 'dog')}
                  />
                  <Form.Check
                    inline
                    type='checkbox'
                    label='Small furry critter'
                    onClick={() => this.props.handleArrayValueChange('type', 'critter')}
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
              <Accordion.Header>Of the gender(s):</Accordion.Header>
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
                  <Form.Check
                    inline
                    type='checkbox'
                    label='unknown'
                    onClick={() => this.props.handleArrayValueChange('gender', 'unknown')}
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
              <Accordion.Header>of the size(s):</Accordion.Header>
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
              <Accordion.Header>with a temperament that is:</Accordion.Header>
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

          <Button onClick={() => this.props.handleSubmit()}>
            Search For Pets!
          </Button>



        </Container>
      </>)
  }
}

export default Home;