import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./index.scss";
import Cookies from "universal-cookie";

const baseURL = `${process.env.REACT_APP_BACKEND_URL}`;
const cookies = new Cookies();

const ModalDelete = (props) => {
  const deleteTown = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${baseURL}/${props.model}/${props.elementId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authentication: cookies.get("token"),
          },
        }
      );
      if (!response.ok) throw new Error("Response not ok");
    } catch (error) {
      console.error(error);
    }
    if (props.cleanCookies === true) {
      cookies.remove("userId", { path: "/" });
      cookies.remove("email", { path: "/" });
      cookies.remove("isLogged", { path: "/" });
      cookies.remove("name", { path: "/" });
      cookies.remove("username", { path: "/" });
      cookies.remove("isAdmin", { path: "/" });
      cookies.remove("image", { path: "/" });
      cookies.remove("token", { path: "/" });
    }
    window.location.href = `./${props.location}`;
  };
  const handleClose = () => props.setShow(false);
  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`¿Eliminar ${props.elementName}?`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Si eliminas ${props.typeInfo} no se podrá recuperar`}</Modal.Body>
        <Modal.Footer>
          <div className="DeleteBtn">
            <Button onClick={deleteTown} type="submit">
              Eliminar
            </Button>
          </div>
          <div className="CancelBtn">
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalDelete.propTypes = {
  show: PropTypes.bool.isRequired,
  typeInfo: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};

export default ModalDelete;
