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
    return(
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
                      {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-type">
                          <Form.Check
                            inline
                            label="cat"
                            type={type}
                            id={`inline-${type}-1`}
                            onClick={() => this.props.handleArrayValueChange('type', 'cat')}
                          />
                          <Form.Check
                            inline
                            label="dog"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={() => this.props.handleArrayValueChange('type', 'dog')}
                          />
                          <Form.Check
                            inline
                            label="Small furry critter"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={() => this.props.handleArrayValueChange('type', 'critter')}
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
                            onClick={() => this.props.handleArrayValueChange('age', 'baby')}
                          />
                          <Form.Check
                            inline
                            label="young"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={() => this.props.handleArrayValueChange('age', 'young')}
                          />
                          <Form.Check
                            inline
                            label="adult"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={() => this.props.handleArrayValueChange('age', 'adult')}
                          />
                          <Form.Check
                            inline
                            label="senior"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={() => this.props.handleArrayValueChange('age', 'senior')}
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
                            onClick={() => this.props.handleArrayValueChange('gender', 'male')}
                          />
                          <Form.Check
                            inline
                            label="female"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={() => this.props.handleArrayValueChange('gender', 'female')}
                          />
                          <Form.Check
                            inline
                            label="unknown"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={() => this.props.handleArrayValueChange('gender', 'unknown')}
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
                      {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            inline
                            label="Small"
                            type={type}
                            id={`inline-${type}-1`}
                            onClick={() => this.props.handleArrayValueChange('size', 'small')}
                          />
                          <Form.Check
                            inline
                            label="Medium"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={() => this.props.handleArrayValueChange('size', 'medium')}
                          />
                          <Form.Check
                            inline
                            label="Large"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={() => this.props.handleArrayValueChange('size', 'large')}
                          />
                          <Form.Check
                            inline
                            label="Extra Large"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={() => this.props.handleArrayValueChange('size', 'xlarge')}
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
                            onClick={() => this.props.handleBooleanChange('good_with_cats')}
                          />
                          <Form.Check
                            inline
                            label="good with dogs"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={() => this.props.handleBooleanChange('good_with_dogs')}
                          />
                          <Form.Check
                            inline
                            label="good with children"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={() => this.props.handleBooleanChange('good_with_children')}
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
              <Button onClick={() => this.props.handleSubmit()}>
                Search For Pets!
              </Button>



            </Container>
    </>)
  }
}

export default Home;