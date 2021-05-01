import React, { Fragment } from 'react';
import './index.scss';
import Button from 'react-bootstrap/Button'

const CommentHeader = () => {
    return ( 
        <div className="container comment-header">
             <p class="text">Dejanos un comentario </p>
                <section className="section-header">
                    <div className="circule">
                     <Button className="btn" type="button"><i className="fa fa-comments" aria-hidden="true"></i></Button>
                    </div>
                    <div>
                    <p className="questions">¿Te gusto nuestra  reseña?</p>
                    <p className="questions" > Dejanos un comentario y una puntuación.</p>
                    </div>
                </section>
        </div>
     );
}

export default CommentHeader;