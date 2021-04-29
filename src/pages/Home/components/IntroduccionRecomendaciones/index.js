import React from 'react';
import './index.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const IntroduccionRecomendaciones = () => {
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
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              non volutpat nulla. Sed auctor, nunc non consequat congue, dui
              nisi rhoncus augue, vitae pharetra elit mauris et odio. Sed
              scelerisque, leo et pellentesque facilisis, leo nisl pretium arcu,
              vel eleifend turpis enim a libero. Nullam ac magna congue, aliquam
              nisi eget, porttitor neque. Mauris dapibus, nisi eu sollicitudin
              varius, urna est luctus nisi, vel laoreet massa diam quis magna.
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

export default IntroduccionRecomendaciones;
