import React from 'react';
import Card from 'react-bootstrap/Card';
import star from '../../assets/icons/star.svg';
import './index.scss';

import avatar from '../../assets/icons/avatar.png';

const CardQuotes = (
    {
        img = avatar,
        quote= 'Lorem ipmsum...',
        person= 'Antonio Moreno',
        pts= '4.3'
    }
) => {
    return ( 
        <Card className="cardQuotes">
            <img className="img" src={img} alt="..."  />
            <Card.Body className="body">
                <div>
                    <Card.Text  className="quote">
                    <q>
                        {quote}
                    </q>
                    </Card.Text>
                    <Card.Text  className="person">
                        {person}
                    </Card.Text>
                    <div className="pts">
                        <img src={star} className="icon"
                            alt=''
                            />
                        <Card.Text className="">
                            {pts}
                        </Card.Text>
                    </div>
                </div>
            </Card.Body>
            </Card>
     );
}
 
export default CardQuotes;