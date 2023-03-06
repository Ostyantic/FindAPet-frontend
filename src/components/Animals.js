import React from 'react';
import Card from 'react-bootstrap/Card';
import Pet from './Pet';


class Animals extends React.Component {


  render() {

    return (

      <>

        {this.props.animalData.map((animal, idx) =>

          <Card key={ idx } style={{ width: '18rem' }}>
            <Pet 
            pet={animal}
            handleShowModal={this.props.handleShowModal}
             />
          </Card>

        )}


      </>

    )
  }
}

export default Animals;