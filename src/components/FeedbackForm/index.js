import { useState } from 'react';
import './index.scss';
import StarRatings from 'react-star-ratings';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function FeedbackForm({ submit, close }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={handleShow} onHide={handleClose}>
        <Modal.Header closeButton onClick={() => close({})}>
          <Modal.Title>Añade un comentario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea">
              <Form.Label>Comentario:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Label>Calificación:</Form.Label>

            <StarRatings
              rating={3}
              starRatedColor="orange"
              numberOfStars={5}
              name="rating"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FeedbackForm;
