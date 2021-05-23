import React from "react";
import PropTypes from 'prop-types';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./index.scss";

const baseURL = "http://localhost:4000/dataTown";

const ModalDelete = (props) => {

  const deleteTown = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${baseURL}/${props.townId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (!response.ok) throw new Error("Response not ok");
    } catch (error) {
      console.error(error);
    }
    window.location.href = "./dashboard";
  };
  const handleClose = () => props.setShow(false);
  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`¿Eliminar ${props.townName}?`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Si eliminas esta reseña no se podrá recuperar</Modal.Body>
        <Modal.Footer>
          <div className="DeleteBtn">
            <Button onClick={deleteTown} type="submit">Eliminar</Button>
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

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default ModalDelete;
