import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'
import './index.scss';
import ReviewsList from '../../../components/ReviewsList';
import DashboardHome from './DashboardHome';
import UsersList from '../../../components/UsersList';
import CommentsList from '../../../components/CommentsList';


const TabsMenu = () => {
  return (
    <div className='tabsMenu'>
      <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard" tabClassName='tabsMenu'>
        <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="dashboard" className="dashboardLink"><i className="fa fa-bars icon" aria-hidden="true"></i>Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="review" className="dashboardLink"><i className="fa fa-map-marker icon" aria-hidden="true"></i>Reseñas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="users" className="dashboardLink"><i className="fa fa-users icon" aria-hidden="true"></i>Usuarios</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="coments" className="dashboardLink"><i className="fa fa-comments icon" aria-hidden="true"></i>Comentarios</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9} className="p-0">
            <Tab.Content>
                <Tab.Pane eventKey="dashboard">
                  <DashboardHome />
                </Tab.Pane>
                <Tab.Pane eventKey="review">
                <ReviewsList/>
                </Tab.Pane>
                <Tab.Pane eventKey="users">
                <UsersList/>
                </Tab.Pane>
                <Tab.Pane eventKey="coments">
                  <CommentsList/>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    </div>
  );
};

export default TabsMenu;
