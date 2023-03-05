import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Pet extends React.Component {


  render() {

    return (

      <>

        <Card.Img variant="top" src="holder.js/100px180" alt={this.props.pet.pet_name} />
        <Card.Body>
          <Card.Title>{this.props.pet.pet_name}</Card.Title>
          <Card.Text>
            Type: {this.props.pet.pet_type}
          </Card.Text>
          <Card.Text>
            gender: {this.props.pet.pet_gender}
          </Card.Text>
          <Card.Text>
            Size: {this.props.pet.pet_size}
          </Card.Text>
          <Button variant="primary">More Info</Button>
          <Button variant="info">Favorite!</Button>

        </Card.Body>

      </>

    )
  }
}

export default Pet;