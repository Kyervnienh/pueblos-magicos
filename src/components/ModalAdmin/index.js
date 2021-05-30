import React from "react";
import PropTypes from 'prop-types';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./index.scss";

const baseURL = "http://localhost:4000";

const ModalAdmin = (props) => {

  const changeStateAdmin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${baseURL}/${props.model}/${props.userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({["isAdmin"]: props.userIsAdmin})
      });
      if (!response.ok) throw new Error("Response not ok");
    } catch (error) {
      console.error(error);
    }
    window.location.href = "./dashboard";
  };
  const handleClose = () => props.setShowAdmin(false);
  return (
    <>
      <Modal show={props.showAdmin} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`¿Estas seguro de ${props.action} los permisos de administrador de ${props.userName}?`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Los permisos de administrador incluyen acciones como visualizar, eliminar o editar información sensible de TURI`}</Modal.Body>
        <Modal.Footer>
          <div className="DeleteBtn">
            <Button onClick={changeStateAdmin} type="submit">Continuar</Button>
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

ModalAdmin.propTypes = {
  showAdmin: PropTypes.bool.isRequired,
  userIsAdmin: PropTypes.bool.isRequired,
  action: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
}

export default ModalAdmin;
