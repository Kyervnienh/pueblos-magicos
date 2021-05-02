import React from 'react';
import './index.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Recommendations = () => {
  return (
    <div>
      <h1 className="title">Conoce todas nuestras recomendaciones</h1>
      <Container>
        <Row xs={1} sm={1} md={1} lg={2}>
          <Col>
            <Image
              src="https://cdn.pixabay.com/photo/2020/12/17/04/09/guanajuato-5838206_960_720.jpg"
              alt="Guanajuato"
              rounded
              fluid
            />
          </Col>
          <Col>
            <p className="my-5 text-justify">
              México es un país afortunado al estar rodeado de ríos, lagos,
              mares, islas, cenotes, montañas, volcanes, desiertos, selvas y
              ciudades llenas de historia. México es más que el mariachi,
              tequila y el chile, es un país multicultural y diverso. Su cultura
              es mágica, llamativa y alegre; llena de colores y su gente es
              amable, generosa y hospitalaria. En “Turi” podrás encontrar
              información relevante de cada pueblo mágicos del país, para que tú
              solo disfrutes de sus paisajes exuberantes, aventuras extremas,
              arte, música, gastronomía, tradiciones y festividades.
            </p>
            <div className="text-center">
              <Button type="button" className="btn">
                Ir al listado
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Recommendations;
