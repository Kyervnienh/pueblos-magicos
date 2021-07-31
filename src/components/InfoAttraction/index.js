import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image'

const InfoAttraction = ({
  attractionName = "Cascadas Velo de Novia",
  info = "Sigue el sonido del agua que hace eco en una región de vegetación frondosa para llegar a la cascada Velo de Novia. Relaja tu mente mientras contemplas el bello paisaje de este lugar. La cascada Velo de Novia mide 35 metros (115 ft) de altura y su nombre se debe a que se parece a ese famoso artículo nupcial. La cascada está ubicada en una reserva natural y su agua fluye hacia el lago Avándaro, que está en los alrededores.",
  img = "https://www.sinpostal.com/wp-content/uploads/2019/03/Chiflon_SinPostal-8.jpg",
  cost = "$85",
  distance = "10 kilómetros (6 mi) al suroeste",
  type = "Cascadas",
}) => {
  return (
    <>

      <Container>
              <Row>
                <Col sm={12} md={6}>
                  <h2 className="titleAtraction">{attractionName}</h2>
                </Col>
              </Row>
              <Row>
              <Col sm={12} md={4} >
                </Col>
                <Col sm={12} md={8} className="columnDetail">
                  <div className="infoHistory">
                      {info}
                  </div>
                </Col>
              </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={12}>
            <div className="infoAtraccion">
              <Image src={img}  className='imgAtraccion' />
            </div>
          </Col>
        </Row>
        <Row className="rowAtraccion">
        <Col sm={12} md={4} className="cardAtraccion">
             <i className="fa fa-money iconAtraccion" aria-hidden="true"></i>
             <hr className="hrAtraccion" />
             <p className="caracteristica">Costo por entrada</p>
             <p className="caracteristicaDetail">{cost}</p>

          </Col>
          <Col sm={12} md={4}  className="cardAtraccion">
          <i className="fa fa-pagelines iconAtraccion" aria-hidden="true"></i>
             <hr className="hrAtraccion" />
             <p className="caracteristica">Tipo de atracción</p>
             <p className="caracteristicaDetail">{type}</p>
          </Col>
          <Col sm={12} md={4}  className="cardAtraccion">
          <i className="fa fa-car iconAtraccion" aria-hidden="true"></i>
             <hr className="hrAtraccion" />
             <p className="caracteristica">Distancia (centro del pueblo)</p>
             <p className="caracteristicaDetail"> {distance}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

InfoAttraction.propTypes = {
  attractionName: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

InfoAttraction.defaultProps = {
  attractionName: "Atraccion",
  info: "Informacion",
  img: "imagen.jpg",
  cost: "$0",
  distance: "0 km",
  type: "tipo de atrccion",
};

export default InfoAttraction;
