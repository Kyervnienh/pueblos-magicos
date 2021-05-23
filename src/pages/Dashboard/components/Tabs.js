import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'
import './index.scss';


const TabsMenu = () => {
  return (
    <div className='tabsMenu'>
      <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard" tabClassName='tabsMenu'>
        <Row>
            <Col sm={2}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="dashboard"><i class="fa fa-bars icon" aria-hidden="true"></i>Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="review"><i class="fa fa-map-marker icon" aria-hidden="true"></i>Reseñas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="users"><i class="fa fa-users icon" aria-hidden="true"></i>Usuarios</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="coments"><i class="fa fa-comments icon" aria-hidden="true"></i>Comentarios</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={10}>
            <Tab.Content>
                <Tab.Pane eventKey="dashboard">
                Aqui va lo dash
                </Tab.Pane>
                <Tab.Pane eventKey="review">
                Aqui va lo de las reseñas
                </Tab.Pane>
                <Tab.Pane eventKey="users">
                Aqui van los usuarios
                </Tab.Pane>
                <Tab.Pane eventKey="coments">
                Aqui van los comentarios
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    </div>
  );
};

export default TabsMenu;
