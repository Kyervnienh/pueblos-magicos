import React, { useState } from "react";
import NavSidebar from "../../components/NavSidebar";
import Image from "../../assets/Profile.jpg";
import Cookies from "universal-cookie";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap/";
import "./index.scss";
import ModalDelete from "../../components/ModalDelete";
import NotFound from "../../components/NotFound";

const cookies = new Cookies();

const baseURL = "http://localhost:8080";

const UserProfilePage = () => {
  const [show, setShow] = useState(false);
  const id = cookies.get("userId");
  const name = cookies.get("name");
  const imgPath = cookies.get("image");
  const email = cookies.get("email");
  const username = cookies.get("username");
  const description = cookies.get("description");
  const [data, setData] = useState({
    id: id,
    name: name,
    image: imgPath,
    email: email,
    username: username,
    description: description,
  });
  const hero = {
    titleP1: name !== "undefined" ? name : "",
    titleP2: imgPath !== "undefined" ? imgPath : "",
    subtitle: description !== "undefined" ? description : "",
    img: [String(Image)],
  };

  const handleShow = (name, id) => {
    setShow(true);
  };

  const handleInputChange = (event) => {
    if (event.target.name === "image") {
      setData({
        ...data,
        [event.target.name]: event.target.files[0].name,
      });
    } else {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
    }
  };

  const updateUser = async (event) => {
    event.preventDefault();
    setData({ ...data });
    console.log("data", data);
    console.log("image", data.image)
    try {
      const response = await fetch(`${baseURL}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authentication: cookies.get("token"),
        },
        body: JSON.stringify(data),
      });
      cookies.set("userId", data.id);
      cookies.set("name", data.name);
      cookies.set("email", data.email);
      cookies.set("username", data.username);
      cookies.set("description", data.description);
      if (!response.ok) throw new Error("Response not ok");
    } catch (error) {
      console.error(error);
    }
    window.location.href = `./perfil`;
  };
  return (
    <>
      <NavSidebar hero={hero} />
      {name ? (
        <div className="userProfileForm">
          <Form onSubmit={updateUser}>
            <h1 className="titleUpdateUserInfo">Actualizar información</h1>
            <Form.Group controlId="formBasicUserName">
              <Form.Label>Editar nombre de usuario</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                name="username"
                defaultValue={username}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Editar correo Electrónico</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                type="email"
                placeholder="Ingresa tu correo electrónico"
                name="email"
                defaultValue={email}
              />
            </Form.Group>
            <Form.Group controlId="formBasicFullName">
              <Form.Label>Editar nombre</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                type="text"
                placeholder="Ingresa tu nombre completo"
                name="name"
                defaultValue={name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Agrega una pequeña descripción sobre ti</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Descripción"
                  name="description"
                  defaultValue={description}
                />
              </Form.Group>
              <Form.Label>Actualizar foto de perfil</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                type="file"
                name="image"
              />
            </Form.Group>
            <div className="formButtonUserProfile">
              <Button type="submit">Guardar</Button>
            </div>
          </Form>
          <div className="deleteAccount">
            <Button onClick={() => handleShow(name, id)}>
              Eliminar cuenta
            </Button>
          </div>
        </div>
      ) : (
        <NotFound>No se encontraron datos</NotFound>
      )}

      <ModalDelete
        show={show}
        setShow={setShow}
        elementName={name}
        elementId={id}
        typeInfo={"este usuario"}
        model={"users"}
        location={""}
        cleanCookies={true}
      />
    </>
  );
};

export default UserProfilePage;
