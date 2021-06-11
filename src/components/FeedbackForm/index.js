import { useState, useEffect } from "react";
import "./index.scss";
import StarRatings from "react-star-ratings";
import Cookies from "universal-cookie";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const baseURL = "http://localhost:8080/comments";
const cookies = new Cookies();

function FeedbackForm({ show, setShow, handleClose, town, quote, pts, idComment }) {
  const [isLogged, setisLogged] = useState(false);
  const profile_photo_url =
    "https://icongr.am/fontawesome/user-circle-o.svg?size=148&color=c2c2c2";
  let idUser = cookies.get("userId");

  useEffect(() => {
    if (cookies.get("username")) {
      setisLogged(true);
    } else {
      setisLogged(false);
    }
    if (idComment) setData({ ...data, body: quote, pts })
  }, []);

  const [data, setData] = useState({
    body: "",
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
    if (!data.body) errors.body = "Por favor, agregue su comentario";

    return errors;
  };

  const addComment = async () => {
    setData({
      ...data,
      dataTownId: town,
      userId: idUser,
      img: profile_photo_url,
    });
    try {
      const response = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Response not ok");

    } catch (error) {
      console.error(error);
    }
    console.log(town, data)
    window.location = `/pueblosmagicos/${town}`
  };

  const editComment = async () => {
    console.log(`town:${town}`, `url: ${baseURL}/${idComment}`, data)
    try {
      const response = await fetch(`${baseURL}/${idComment}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Response not ok");

      setShow(false);
    } catch (error) {
    }
    window.location = `/pueblosmagicos/${town}`
  }

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
                defaultValue={quote ? quote : data.body}
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

            {!isLogged ? (
              <Form.Label>Inicia sesion para comentar por favor</Form.Label>
            ) : null}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={!isLogged}
            variant="primary"
            type="submit"
            onClick={idComment ? editComment : addComment}
          >
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FeedbackForm;
