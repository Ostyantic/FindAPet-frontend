import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';

class Pet extends React.Component {

  fillModal = () => {
    this.props.handleShowModal(
      this.props.pet.pet_name,
      this.props.pet.pet_age,
      this.props.pet.pet_gender,
      this.props.pet.pet_type,
      this.props.pet.pet_size,
      this.props.pet.pet_status,
      this.props.pet.pet_distance,
      this.props.pet.pet_link
      )
  }

  createPet = (e) => {
    e.preventDefault();
    const newPet = {
      name: this.props.pet.pet_name,
      type: this.props.pet.pet_type,
      gender: this.props.pet.pet_gender,
      size: this.props.pet.pet_size,
      link: this.props.pet.pet_link
    }
    this.props.handlePostPet(newPet)
    console.log(`New Pet Created: ${newPet.name}`
    )
  }

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
          <Button onClick={this.fillModal} variant="primary">More Info</Button>
          {this.props.auth0.isAuthenticated && <Button variant="info" onClick={this.createPet}>Favorite!</Button>}

        </Card.Body>

      </>

    )
  }
}

export default withAuth0(Pet);