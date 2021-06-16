import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import "./index.scss";

const baseURL = "http://localhost:8080/towns";

const TownForm = (props) => {
    const [attractions, setAttractions] = useState([0]);
    const [data, setData] = useState({ name: '', state: 'Estado de México', infoState: '', img: '', attractions: [] });

    const selectAttractions = (e) => {
        let attractionsNumber = [];
        for (let i = 0; i < e.target.value; i++) {
            attractionsNumber.push(i);
        }
        setAttractions(attractionsNumber);
    };

    const { town } = props;

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleInputAttractionchange = (event) => {
        const attr = data.attractions;

        attr[event.target.id.match(/(\d+)/g)] = {
            ...attr[event.target.id.match(/(\d+)/g)],
            [event.target.name]: event.target.value
        }
        setData({ ...data, attractions: attr })
    }

    const addTown = async (event) => {
        event.preventDefault();

        let met = town ? 'PUT' : 'POST';
        let url = town ? `${baseURL}/${town._id}` : baseURL;
        console.log(data)

        try {
            const response = await fetch(url, {
                method: met,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (!response.ok) throw new Error("Response not ok");

        } catch (error) {
            console.error(error);
        }
        window.location = '/dashboard'
    }

    useEffect(() => {
        if (town) {
            setAttractions(Object.keys(town.attractions));
            setData({
                name: town.name, 
                state: town.state, 
                infoState: town.infoState, 
                img: town.img, 
                attractions: town.attractions
            });
        } 
    }, [])

    return (
        <div className="townForm">
            <div className="btnFormReturnCont">
                <Link to="/dashboard"><Button className="btn btnFormReturn">Regresar</Button></Link>
            </div>
            <h1 className="townForm-h1">{town ? "Modificar Reseña" : "Agregar nueva reseña"}</h1>
            <Form onSubmit={addTown}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formStateName" className="townFormGroup">

                        <Form.Label>Selecciona un Estado:</Form.Label>
                        <Form.Control as="select" name="state" custom onChange={handleInputChange}
                            defaultValue={town ? town.state : "Estado de México"}>
                            <option value="Estado de México">Estado de México</option>
                            <option value="Hidalgo">Hidalgo</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formTownName" className="townFormGroup">
                        <Form.Label>Nombre del Pueblo Mágico:</Form.Label>
                        <Form.Control type="text" name="name" onChange={handleInputChange}
                            defaultValue={town ? town.name : ""}></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formBasicEmail" className="townFormGroup">
                    <Form.Label>Descripción:</Form.Label>
                    <Form.Control as="textarea" rows={5} type="text" name="infoState" onChange={handleInputChange}
                        defaultValue={town ? town.infoState : ""} />
                </Form.Group>
                <Form.Group controlId="formUrlImage" className="townFormGroup">
                    <Form.Label>URL de la imagen (imagen principal del pueblo):</Form.Label>
                    <Form.Control type="text" name="img" onChange={handleInputChange} defaultValue={town ? town.img : ""} />
                </Form.Group>
                <Form.Group controlId="formPts" className="townFormGroup">


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
                        <Form.Group controlId={`attractionName${parseInt(n)}`} className="townFormGroup">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control type="text" name="name" onChange={handleInputAttractionchange}
                                defaultValue={town ? town.attractions[n] ? town.attractions[n].name : "" : ""} />
                        </Form.Group>
                        <Form.Group controlId={`attractionDescription${parseInt(n)}`} className="townFormGroup">
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control as="textarea" rows={5} onChange={handleInputAttractionchange} type="text" name="info"
                                defaultValue={town ? town.attractions[n] ? town.attractions[n].info : "" : ""} />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId={`formAttractionCost${parseInt(n)}`} className="townFormGroup">
                                <Form.Label>Costo:</Form.Label>
                                <Form.Control type="text" name="cost" onChange={handleInputAttractionchange}
                                    defaultValue={town ? town.attractions[n] ? town.attractions[n].cost : "" : ""}></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId={`formAttractionType${parseInt(n)}`} className="townFormGroup">
                                <Form.Label>Tipo de atracción:</Form.Label>
                                <Form.Control type="text" name="type" onChange={handleInputAttractionchange}
                                    defaultValue={town ? town.attractions[n] ? town.attractions[n].type : "" : ""}></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group as={Row} controlId={`formAttractionDist${parseInt(n)}`} className="townFormGroup">
                            <Form.Label column >Distancia:</Form.Label>
                            <Col>
                                <Form.Control type="text" name="distance" onChange={handleInputAttractionchange}
                                    defaultValue={town ? town.attractions[n] ? town.attractions[n].distance : "" : ""} />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId={`formUrlImage${parseInt(n)}`} className="townFormGroup">
                            <Form.Label>URL de la imagen (imagen de la atracción):</Form.Label>
                            <Form.Control type="text" name="img" onChange={handleInputAttractionchange}
                                defaultValue={town ? town.attractions[n] ? town.attractions[n].img : "" : ""} />
                        </Form.Group>
                    </div>
                )}
                <div className="formButton">
                    <Button type="submit">{town ? "Modificar" : "Agregar"}</Button>
                </div>
            </Form>
        </div>
    );
}

export default TownForm;