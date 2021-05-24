import React from 'react';
import './index.scss';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

const LastUsers = ({lastUsers}) => {
    return ( 
        <Card>
                <div className="headerList">                    
                    <Card.Title className="mb-2 text-muted">Nuevos Usuarios</Card.Title>
                </div>
                <ListGroup variant="flush">
                    {lastUsers?.map(user => (
                        <ListGroup.Item  variant="flush" key={user.name}>
                            <i className="fa fa-user-circle iconUs" aria-hidden="true"></i>
                            {user.name}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
        </Card>
    );
}

LastUsers.propTypes = {
    lastUsers: PropTypes.array,
}
 
export default LastUsers;