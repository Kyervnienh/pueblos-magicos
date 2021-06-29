import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'

const InfoGeneral = (
    {
        name = 'Valle de Bravo',
        img = 'https://media.architecturaldigest.com/photos/5bd0e1fc54bd2b5be7ac78cb/16:9/w_2560%2Cc_limit/GettyImages-162318248.jpg',
        infoState = 'A tan sólo 145 km. de la Ciudad de México se encuentra Valle de Bravo, uno de los lugares favoritos de los habitantes de la capital y Toluca; centro de relajación y de descanso de turistas de todo el mundo. Su nombre se debe al general Nicolás Bravo, quien fue el hombre de confianza de José María Morelos y presidente interino o sucesor en México en tres ocasiones. El clima que acompaña a Valle de Bravo es excelente casi todo el año, el sol calienta sus calles y se acompaña de una brisa fresca al estar cerca del lago y es ideal para disfrutar de un paseo en lancha o una caminata por sus calles, llenas de tiendas artesanales y restaurantes con cocina tradicional e internacional.'
    }) => {
    return (
        <Container >
            <Row className="rowPadding">
                <Col sm={12} md={5} className="columnP1">
                     <Image src={img}  className='imgHistory' />
                </Col>
                <Col sm={12} md={7} className="columnp2">
                    <div>
                        <p className="titlep1">Historia</p>
                        <hr className="hrColor"/>
                    </div>
                    <div className="infoHistoryContainer">
                        <p className="infoHistory">{infoState}</p>
                    </div>                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="titleSection">¿Qué hacer en {name} ?</h1>
                </Col>
            </Row>
        </Container>
    )
}

InfoGeneral.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    infoState: PropTypes.string.isRequired,
}

export default InfoGeneral;
