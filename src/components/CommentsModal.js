import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../Layout/CommentsModal.css"

const CommentsModal = ({toggleModal}) => {
    return (
        <div
          className="modal show comments-modal"
          style={{ display: 'block' }}
        >
          <Modal.Dialog centered size='lg'>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>
    
            <Modal.Footer>
              <Button onClick={toggleModal} variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
    );
}

export default CommentsModal
