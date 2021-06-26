import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NavSidebar from '../../components/NavSidebar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { RiUserSmileLine } from 'react-icons/ri';
import NotFound from '../../components/NotFound';
import Footer from '../../components/Footer';
import Image from '../../assets/communidad.png';

const baseURL = 'http://localhost:8080/users';

function CardUser({ name = 'Nombre' }) {
  return (
    <Card>
      <RiUserSmileLine size={150} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

const CommunityPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(baseURL);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);
  let newUsers = [];
  for (let i = 0; i < users.length; i += 3) {
    let piece = users.slice(i, i + 3);
    newUsers.push(piece);
  }

  const hero = {
    titleP1: 'CONOCE NUESTRA',
    titleP2: 'COMUNIDAD',
    subtitle: '',
    img: [String(Image)],
  };

  return (
    <>
      <NavSidebar hero={hero} />
      <h1 className="title">¡Forma parte de nuestra bella comunidad!</h1>
      {users.length ? (
        <div>
          {newUsers.map((item) => (
            <CardGroup key={newUsers.indexOf(item)}>
              {item.map((newSet) => (
                <CardUser name={newSet.name} key={newSet.id} />
              ))}
            </CardGroup>
          ))}
        </div>
      ) : (
        <NotFound>No se encontraron datos</NotFound>
      )}
      <Footer />
    </>
  );
};

CardUser.propTypes = {
  name: PropTypes.string.isRequired,
};
export default CommunityPage;
