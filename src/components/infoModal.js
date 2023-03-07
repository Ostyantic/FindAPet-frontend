import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class infoModal extends React.Component {
  render() {
    return (
      <>
        <Modal
          className="infoModal"
          show={this.props.showModal}
          onHide={this.props.handleCloseModal}
        >
          <Modal.Header className="modalHeader" closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <p>Age: {this.props.age}</p>
            <p>Size: {this.props.size}</p>
            <p>Gender: {this.props.gender}</p>
            <p>Type: {this.props.type}</p>
            <p>Distance: {this.props.distance}</p>
            <p><a href={this.props.link} rel={"noreferrer"} target={"_blank"}>Click here to find out more about {this.props.name}!</a></p>
          </Modal.Body>
          <Modal.Footer className="hola">
          <Button className="modalFooter" variant="secondary" onClick={this.props.handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default infoModal;
