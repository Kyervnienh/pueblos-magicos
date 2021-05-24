import React from 'react';
import './index.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const MainTable = ({listReview}) => {

    return ( 
        <Card class="mainClass">
                <div className="headerReview">                    
                    <Card.Title className="mb-2 text-muted review">Reseñas Recientes</Card.Title>
                    <Button type="button" className="showMore">Ver más</Button>
                </div>
                <div className='descriptions td'>
                    <p className="th">Pueblo Mágico</p>
                    <p className="th">Estado</p>
                    <p className="th">Puntos</p>
                </div>

                {listReview?.map(review => (

                    <div className='descriptions' key={review.name}>
                        <p className="th">{review.name}</p>
                        <p className="th"> {review.state}</p>
                        <p className="th">{review.pts}</p>
                    </div>
                ))}
        </Card>
    );
}
 
export default MainTable;