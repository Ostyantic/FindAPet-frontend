import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";


class Profile extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      favoritePets: [],
    }
  }

  async componentDidMount() {
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const url = `${process.env.REACT_APP_SERVER}/pets`;
        const jwt = res.__raw;
        const config = {
          headers: { Authorization: `Bearer ${jwt}` },
        };
        const favoritePets = await axios(url, config);
        console.log(favoritePets.data)
        this.setState({ 
          favoritePets: favoritePets.data
        })
      }
    } catch (err) {
      console.error(err);
    }
  }

  handleDeletePet = async (_id) => {
    let url = `${process.env.REACT_APP_SERVER}/pets/${_id}`;
    try{
      if (this.props.auth0.isAuthenticated){
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        const config = {
          headers: {"Authorization": `bearer ${jwt}`}, 
        }
        await axios.delete(url, config)
        let updatedPets = this.state.favoritePets.filter(pet => pet._id !== _id);
        this.setState({
          favoritePets: updatedPets
        })
      }
    }
    catch(err){
      console.error(err)
    }
  }

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  
  render() {

    // const { user } = this.props.auth0
    
    // console.log(user);
    // console.log(this.props.favoritePets);

    return (
    <>
      <div className="userProfile">
        <img src={user.picture} alt={user.name} />
        <h2 className="userName">{user.name}</h2>
        <p>{user.email}</p>
      </div>
    
      <Container>
        {/* <img src={user.picture} alt={user.name} /> */}
        {/* <h2>{user.name}</h2>
            <p>{user.email}</p> */}
        <Card>
          {this.state.favoritePets.map((pet, idx) => (
            <div key={idx}>
              <Card.Header>
                <Card.Title>{pet.name}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Type: {pet.type}</Card.Text>
                <Card.Text>gender: {pet.gender}</Card.Text>
                <Card.Text>Size: {pet.size}</Card.Text>
                <Card.Text>URL: {pet.link}</Card.Text>
              </Card.Body>
              {this.props.auth0.isAuthenticated && (
                <Card.Footer>
                  <Button variant="danger" onClick={() => this.handleDeletePet(pet._id)}>
                    Remove Pet
                  </Button>
                </Card.Footer>
              )}
            </div>
          ))}
        </Card>
      </Container>
      </>
    );
  }
};

export default withAuth0(Profile);