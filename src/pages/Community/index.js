import React, { useEffect, useState } from 'react';
import NavSidebar from '../../components/NavSidebar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { RiUserSmileLine } from "react-icons/ri";

const baseURL = "http://localhost:4000/users";


function CardUser({ name = 'Nombre' }) {
    return(
        
        <Card>
          <RiUserSmileLine size={150}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
        
    )
  }

const CommunityPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch(baseURL);
            const data = await response.json();
            setUsers(data);
          } catch(error) {
            console.error(error);
          }
        };
    
        getData();
      }, []);
      let newUsers = [];
      for(let i = 0; i < users.length; i += 3) {
          let piece = users.slice(i, i + 3);
          newUsers.push(piece);
      }
    return (
        <>
            <NavSidebar/>
            <h1 className="title">¡Forma parte de nuestra bella comunidad!</h1>
            {
            newUsers.map(item => (
               <CardGroup>
                   {item.map(newSet => (
                       <CardUser name = {newSet.name} />
                   ))}
               </CardGroup> 
            ))
            }
        </>
    )
}

export default CommunityPage;