import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import placeholder from '../images/placeholder.jpg'

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
      this.props.pet.pet_link,
      this.props.pet.pet_photo,

    )
    console.log(this.props.pet.pet_photo.small)
  }

  render() {

    return (

      <>

        <Card.Img variant="top" src={this.props.pet.pet_photo ? this.props.pet.pet_photo.small : placeholder} alt={this.props.pet.pet_name} />
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
          <Button variant="info">Favorite!</Button>

        </Card.Body>

      </>

    )
  }
}

export default Pet;