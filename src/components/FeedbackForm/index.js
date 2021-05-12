import { useState } from 'react';
import './index.scss';
import StarRatings from 'react-star-ratings';
import Cookies from 'universal-cookie';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const baseURL = 'http://localhost:4000/comments';
const cookies = new Cookies();

function FeedbackForm({ show, setShow, handleClose, town }) {
  const profile_photo_url =
    'https://icongr.am/fontawesome/user-circle-o.svg?size=148&color=c2c2c2';
  console.log(town);
  let idUser = cookies.get('id');
  let userName = cookies.get('name');
  const [data, setData] = useState({
    id: 0,
    name: userName,
    body: '',
    pts: 0,
    dataTownId: town,
    userId: idUser,
    img: profile_photo_url,
  });

  const [error, setError] = useState({});
  const [validated, setValidated] = useState(false);

  const changeRating = (pts) => setData({ ...data, pts });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const validate = () => {
    const errors = {};
    if (!data.body) errors.body = 'Por favor, agregue su comentario';

    return errors;
  };

  const [comments, setComments] = useState([]);

  const addComment = async () => {
    const lastComment = comments[comments.length - 1];
    const newId = lastComment?.id + 1;
    setData({
      ...data,
      id: newId,
      dataTownId: town,
      userId: idUser,
      name: userName,
      img: profile_photo_url,
    });
    console.log(data);
    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Response not ok');

      const newComment = await response.json();

      setComments(comments.concat([newComment]));
      setData({
        id: 0,
        name: '',
        body: '',
        pts: 0,
        dataTownId: 0,
        userId: 0,
        img: '',
      });
      setShow(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Añade un comentario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated}>
            <Form.Group controlId="comments">
              <Form.Label>Comentario:</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                name="body"
                value={data.body}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {error.body}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Label>Calificación:</Form.Label>

            <StarRatings
              rating={data.pts}
              starRatedColor="orange"
              changeRating={changeRating}
              numberOfStars={5}
              name="pts"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={addComment}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FeedbackForm;
