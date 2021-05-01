import React, { Fragment } from 'react';
import './index.scss';
import star from '../../assets/icons/star.svg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types';
import { NavLink as Link } from "react-router-dom";

const CardComponent = (
    {
        img = 'https://imparcialoaxaca.mx/wp-content/uploads/2018/07/mas-de-100-pueblos-magicos-opcion-para-visitar-estas-vacaciones.jpg', 
        pts = '4.5', 
        name = 'Villa del carbón', 
        state = 'Estado de México', 
        id = 1,
        action = function(){
            console.log('click')
        }
    }) => {
    return ( 
        <Fragment>
        <Card className="card">
            <Card.Img variant="top" className="card-img-top" src={img} alt="..."  />
            <Card.Body>
                <div>
                    <div className="score">
                        <img src={star}     className="icon"
                            alt={name}
                            />
                        <Card.Text className="cal">
                           {pts}
                        </Card.Text>
                    </div>
                    <Card.Title className="name">
                        {name}
                    </Card.Title>
                    <Card.Text className="state">
                        {state}
                    </Card.Text>
                </div>
                <div className="circule">
                    <Link to={`/pueblosmagicos/${id}`} >
                        <Button className="btn" type="button" onClick={() => action(console.log(id))}><i className="fa fa-angle-right" aria-hidden="true"></i></Button>
                    </Link>
                </div>
            </Card.Body>
            </Card>

        </Fragment>
     );
}
 
CardComponent.propTypes = {
    img: PropTypes.string.isRequired,
    pts: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired,
}


export default CardComponent;