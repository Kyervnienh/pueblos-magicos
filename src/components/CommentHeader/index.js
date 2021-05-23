import React, { useState } from 'react';
import './index.scss';
import Button from 'react-bootstrap/Button';
import FeedbackForm from '../FeedbackForm';

const CommentHeader = ({ town }) => {
  const [show, setShow] = useState(false);

  let dataTownId = parseInt(town);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container comment-header">
      <p className="text">Dejanos un comentario </p>
      <section className="section-header">
        <div className="circule">
          <Button className="btn" type="button" onClick={handleShow}>
            <i className="fa fa-comments" aria-hidden="true"></i>
          </Button>
        </div>
        <FeedbackForm
          show={show}
          handleClose={handleClose}
          setShow={setShow}
          town={dataTownId}
        />
        <div>
          <p className="questions">¿Te gusto nuestra reseña?</p>
          <p className="questions"> Dejanos un comentario y una puntuación.</p>
        </div>
      </section>
    </div>
  );
};

export default CommentHeader;
