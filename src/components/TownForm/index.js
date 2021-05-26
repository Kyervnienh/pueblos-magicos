import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import "./index.scss";

const TownForm = (props) => {
    const [attractions, setAttractions] = useState([0]);

    const selectAttractions = (e) => {
        let attractionsNumber = [];
        for (let i = 0; i < e.target.value; i++) {
            attractionsNumber.push(i);
        }
        setAttractions(attractionsNumber);
    };

    const { town } = props;

    useEffect(() => {
        if(town) setAttractions(Object.keys(town.attractions));
    },[])

    return (
        <div className="townForm">
            <div className="btnFormReturnCont">
            <Link to="/dashboard"><Button className="btn btnFormReturn">Regresar</Button></Link>
            </div>
            <h1 className="townForm-h1">{town ? "Modificar Reseña" : "Agregar nueva reseña"}</h1>
            <Form >
                <Form.Row>
                    <Form.Group as={Col} controlId="formStateName" className="townFormGroup">

                        <Form.Label>Selecciona un Estado:</Form.Label>
                        <Form.Control as="select" custom defaultValue={town ? town.state : "Estado de México"}>
                            <option value="Estado de México">Estado de México</option>
                            <option value="Hidalgo">Hidalgo</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formTownName" className="townFormGroup">
                        <Form.Label>Nombre del Pueblo Mágico:</Form.Label>
                        <Form.Control type="text" name="nameTown" defaultValue={town ? town.name : ""}></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formBasicEmail" className="townFormGroup">
                    <Form.Label>Descripción:</Form.Label>
                    <Form.Control as="textarea" type="text" name="description" defaultValue={town ? town.infoState : ""} />
                </Form.Group>
                <Form.Group controlId="formUrlImage" className="townFormGroup">
                    <Form.Label>URL de la imagen (imagen principal del pueblo):</Form.Label>
                    <Form.Control type="text" name="urlImage" defaultValue={town ? town.img : ""} />
                </Form.Group>
                <Form.Group as={Row} controlId="formAttractionsLabel" className="townFormGroup">
                    <Form.Label column >Selecciona el número de atracciones:</Form.Label>
                    <Col>
                        <Form.Control as="select" name="attractions" onChange={selectAttractions} custom
                            defaultValue={town ? Object.keys(town.attractions).length : 1}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                {attractions.map(n =>
                    <div key={parseInt(n) + 1} className="formAttraction">
                        <p className="formAttraction-p">Atracción {parseInt(n) + 1}</p>
                        <Form.Group controlId={`attractionName${parseInt(n) + 1}`} className="townFormGroup">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control type="text" name="nameAttraction"
                                defaultValue={town ? town.attractions[n] ? town.attractions[n].name : "" : ""} />
                        </Form.Group>
                        <Form.Group controlId={`attractionDescription${parseInt(n) + 1}`} className="townFormGroup">
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control as="textarea" type="text" name="descriptionAttraction"
                                defaultValue={town ? town.attractions[n] ? town.attractions[n].info : "" : ""} />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formAttractionCost" className="townFormGroup">
                                <Form.Label>Costo:</Form.Label>
                                <Form.Control type="text" name="name"
                                    defaultValue={town ? town.attractions[n] ? town.attractions[n].cost : "" : ""}></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formAttractionType" className="townFormGroup">
                                <Form.Label>Tipo de atracción:</Form.Label>
                                <Form.Control type="text" name="name"
                                    defaultValue={town ? town.attractions[n] ? town.attractions[n].type : "" : ""}></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group as={Row} controlId="formAttractionDist" className="townFormGroup">
                            <Form.Label column >Distancia:</Form.Label>
                            <Col>
                                <Form.Control type="text" name="attractionsDist"
                                    defaultValue={town ? town.attractions[n] ? town.attractions[n].distance : "" : ""} />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="formUrlImage" className="townFormGroup">
                            <Form.Label>URL de la imagen (imagen de la atracción):</Form.Label>
                            <Form.Control type="text" name="urlImageAttraction"
                                defaultValue={town ? town.attractions[n] ? town.attractions[n].img : "" : ""} />
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