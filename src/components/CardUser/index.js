import React from "react";
import avatar from "../../assets/icons/avatar.png";
import Card from "react-bootstrap/Card";
import './index.scss';
import PropTypes from 'prop-types';

const baseURL = 'http://localhost:8080';

const CardUser = ({ name = "Antonio Moreno", profilePhoto = avatar }) => {
  return (
    <Card className="CardUser">
      <Card.Title className="userNameTitle">{name}</Card.Title>
      <Card.Body className="bodyCardUser">
        <Card.Img className="profilePhoto" src={`${baseURL}/uploads/${profilePhoto.substring(15, profilePhoto.length)}`} alt="..." />
      </Card.Body>
    </Card>
  );
};

CardUser.propTypes = {
    name: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
  };

export default CardUser;
