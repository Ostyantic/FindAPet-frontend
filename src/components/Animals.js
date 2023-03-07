import React from 'react';
import Card from 'react-bootstrap/Card';
import Pet from './Pet';


class Animals extends React.Component {


  render() {

    return (

      <div className='cards'>

        {this.props.animalData.map((animal, idx) =>

          <Card className='actualCard' key={ idx } style={{ width: '18rem' }}>
            <Pet 
            pet={animal}
            handleShowModal={this.props.handleShowModal}
             />
          </Card>

        )}


      </div>

    )
  }
}

export default Animals;