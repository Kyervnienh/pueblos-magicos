import React, { useState } from 'react';
import './index.scss';
import Button from 'react-bootstrap/Button';
import FeedbackForm from '../FeedbackForm';

const CommentHeader = () => {
  const [town, setTown] = useState({
    reviews: [],
  });
  const [review, setReview] = useState({});

  const addReview = (data) => {
    const newReview = { ...data, review };
    setTown({
      ...town,
      reviews: [newReview, ...town.reviews],
    });
    setReview({});
  };
  return (
    <div className="container comment-header">
      <p className="text">Dejanos un comentario </p>
      <section className="section-header">
        <div className="circule">
          <Button
            className="btn"
            type="button"
            onClick={() => setReview({ time: new Date().getTime() })}
          >
            <i className="fa fa-comments" aria-hidden="true"></i>
          </Button>
        </div>
        {Object.keys(review).length > 0 && (
          <FeedbackForm submit={addReview} close={setReview} />
        )}
        <div>
          <p className="questions">¿Te gusto nuestra reseña?</p>
          <p className="questions"> Dejanos un comentario y una puntuación.</p>
        </div>
      </section>
    </div>
  );
};

export default CommentHeader;
