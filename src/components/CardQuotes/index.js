import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import star from '../../assets/icons/star.svg';
import './index.scss';
import PropTypes from 'prop-types';
import Cookies from "universal-cookie";
import avatar from '../../assets/icons/avatar.png';
import FeedbackForm from '../FeedbackForm';
import ModalDelete from '../ModalDelete';
import Image from 'react-bootstrap/Image'

const cookies = new Cookies();
const baseURL = "http://localhost:8080/uploads";

const CardQuotes = (
    {
        img = avatar,
        quote = 'Lorem ipmsum...',
        person = 'Antonio Moreno',
        pts = '4.3',
        town,
        idComment
    }
) => {
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => {
        setShow(true);
      };

    const handleClose = () => setShowModal(false);
    const handleShowEdit = () => setShowModal(true);
    let userName = cookies.get("name");

    return (
        <>
            <Card className="cardQuotes">
                <Image src={`${baseURL}/${img.substring(15, img.length)}`} roundedCircle  className="imgAvatar"  width="60"
                  height="60"/>
                <Card.Body className="body">
                    <div>
                        {userName === person ? (<>
                            <Button className="buttonComment" type="button" onClick={handleShowEdit}><i class="fa fa-pencil"></i></Button>
                            <Button className="buttonComment" onClick={handleShow}><i class="fa fa-trash" aria-hidden="true"></i></Button>
                        </>) : (
                            null
                        )}
                        <Card.Text className="quote">
                            <q>
                                {quote}
                            </q>
                        </Card.Text>
                        <Card.Text className="person">
                            {person}
                        </Card.Text>
                        <div className="pts">
                            <img src={star} className="icon"
                                alt=''
                            />
                            <Card.Text className="">
                                {pts}
                            </Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <FeedbackForm
                show={showModal}
                handleClose={handleClose}
                setShow={setShowModal}
                town={town}
                quote={quote}
                pts={pts}
                idComment={idComment}
            />
            <ModalDelete
                show={show}
                setShow={setShow}
                elementName={"comentario"}
                elementId={idComment}
                typeInfo={"este comentario"}
                model={"comments"}
                location={town}
                cleanCookies={false}
            />
        </>
    );
}

CardQuotes.propTypes = {
    img: PropTypes.string.isRequired,
    pts: PropTypes.number.isRequired,
    quote: PropTypes.string.isRequired,
    person: PropTypes.string.isRequired,
    town: PropTypes.string.isRequired,
    idComment: PropTypes.string.isRequired
}

export default CardQuotes;