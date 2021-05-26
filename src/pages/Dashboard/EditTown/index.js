import React from 'react';
import BannerDashboard from '../../../components/BannerDashboard';
import Footer from '../../../components/Footer';
import { Nav, Tab, Row, Col } from 'react-bootstrap'
import TownForm from '../../../components/TownForm';
import NotFound from '../../../components/NotFound';

const EditTown = (props) => {
    return (
        <div className='tabsMenu'>
            <BannerDashboard />
            <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard" tabClassName='tabsMenu'>
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="dashboard" href="/dashboard"><i className="fa fa-bars icon" aria-hidden="true"></i>Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="review" href="/dashboard"><i className="fa fa-map-marker icon" aria-hidden="true"></i>Reseñas</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="users" href="/dashboard"><i className="fa fa-users icon" aria-hidden="true"></i>Usuarios</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="coments" href="/dashboard"><i className="fa fa-comments icon" aria-hidden="true"></i>Comentarios</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        {props.location.town ? <TownForm town={props.location.town} /> :
                            <NotFound> Ups! parece que hubo un problema, intente de nuevo mas tarde.</NotFound>}
                    </Col>
                </Row>
            </Tab.Container>
            <Footer />
        </div>
    );
};

export default EditTown;