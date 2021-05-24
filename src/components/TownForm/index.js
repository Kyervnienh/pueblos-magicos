import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row, Button } from 'react-bootstrap/';
import "./index.scss";

const TownForm = (props) => {
    const [attractions, setAttraction] = useState([1]);

    const action = (e) => {
        let attractionsNumber = [];
        for (let i = 1; i <= e.target.value; i++) {
            attractionsNumber.push(i);
        }
        setAttraction(attractionsNumber);
    };

    return (
        <div className="townForm">
            <Form >
                <h1 className="titleTownForm mb-5">Agregar nueva reseña</h1>
                <Form.Row>
                    <Form.Group as={Col} controlId="formStateName">

                        <Form.Label>Selecciona un Estado</Form.Label>
                        <Form.Control as="select" custom>
                            <option value="Estado de México">Estado de México</option>
                            <option value="Hidalgo">Hidalgo</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formTownName">
                        <Form.Label>Nombre del Pueblo Mágico</Form.Label>
                        <Form.Control type="text" name="name"></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" type="text" name="description" />
                </Form.Group>
                <Form.Group controlId="formUrlImage">
                    <Form.Label>URL de la imagen (imagen principal del pueblo)</Form.Label>
                    <Form.Control type="text" name="urlImage" />
                </Form.Group>
                <Form.Group as={Row} controlId="formAttractionsLabel" >
                    <Form.Label column sm={8} md={6} lg={4}>Selecciona el número de atracciones:</Form.Label>
                    <Col sm={2} md={2} lg={1}>
                        <Form.Control as="select" name="attractions" onChange={action} custom>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                {attractions.map(n =>
                    <div key={n} >
                        <p>Atracción {n}</p>
                        <Form.Group controlId={`attractionName${n}`}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="nameAttraction" />
                        </Form.Group>
                        <Form.Group controlId={`attractionDescription${n}`}>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" name="descriptionAttraction" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formAttractionCost">
                                <Form.Label>Costo</Form.Label>
                                <Form.Control type="text" name="name"></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formAttractionType">
                                <Form.Label>Tipo de atracción</Form.Label>
                                <Form.Control type="text" name="name"></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formUrlImage">
                    <Form.Label>URL de la imagen (imagen de la atracción)</Form.Label>
                    <Form.Control type="text" name="urlImageAttraction" />
                </Form.Group>

                    </div>
                )}
                <div className="formButton">
                    <Button type="submit">Agregar</Button>
                </div>
            
            </Form>
        </div>
    );
}

export default TownForm;