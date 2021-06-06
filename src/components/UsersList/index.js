import React, { useEffect, useState } from "react";
import "./index.scss";
import Table from "react-bootstrap/Table";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { RiDeleteBinLine } from "react-icons/ri";
import ModalDelete from "../ModalDelete";
import ModalAdmin from "../ModalAdmin";
import NotFound from "../../components/NotFound";
import Pagination from "../../pages/TownList/components/Pagination";

const baseURL = "http://localhost:4000";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [show, setShow] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [inferiorLimit, setInferiorLimit] = useState(0);
  const [superiorLimit, setSuperiorLimit] = useState(3);

  const commentsCont = (userName) => {
      let cont = 0;
      comments.forEach(function(comment) {
          if(userName === comment.name) {
              cont++;
          }
      })
      return cont;
  };

  const handleShowAdmin = (name, id, userIsAdmin) => {
    setShowAdmin(true);
    setIsAdmin(userIsAdmin);
    setUserInfo({ name: name, id: id });
  };

  const handleShow = (name, id) => {
    setShow(true);
    setUserInfo({ name: name, id: id });
  };

  const changePage = (e) => {
    setCurrentPage(parseInt(e.target.value));
    setInferiorLimit((parseInt(e.target.value) - 1) * 3);
    if (parseInt(e.target.value) * 3 >= users.length) {
      setSuperiorLimit(users.length);
    } else {
      setSuperiorLimit(parseInt(e.target.value) * 3);
    }
  };

  const filterDropdown = () => {
    let newUsers = [];

    for (let i = inferiorLimit; i < superiorLimit; i++) newUsers.push(users[i]);
    return newUsers;
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${baseURL}/users`);
        const responseComment = await fetch(`${baseURL}/comments`);
        const data = await response.json();
        const dataComment = await responseComment.json();
        setUsers(data);
        setComments(dataComment);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);
  return (
    <>
      <h1>Administrar Usuarios</h1>
      {users.length ? (
        <div className="table">
          <Table responsive className="justify-content-start pr-0">
            <tbody>
              <tr>
                <th>Usuario</th>
                <th>Nombre Completo</th>
                <th>Correo Electrónico</th>
                <th>Comentarios</th>
                <th>Privilegios de Administrador</th>
                <th>Eliminar</th>
              </tr>
              {filterDropdown().map((item) => (
                <tr key={item.id}>
                  <td>{item.username}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{commentsCont(item.name)}</td>
                  <td>
                    <BootstrapSwitchButton
                      checked={item.isAdmin}
                      style="SwitchStyle"
                      onlabel="Admin User"
                      offlabel="Regular User"
                      onChange={() => handleShowAdmin(item.name, item.id, item.isAdmin)}
                    />
                  </td>
                  <td className="DeleteIcon">
                    <RiDeleteBinLine
                      onClick={() => handleShow(item.name, item.id)}
                      size={25}
                    ></RiDeleteBinLine>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <NotFound>No se encontraron datos</NotFound>
      )}
      <ModalDelete
        show={show}
        setShow={setShow}
        elementName={userInfo.name}
        elementId={userInfo.id}
        typeInfo={"este usuario"}
        model={"users"}
        location={"dashboard"}
      />
      <Pagination
        numberOfCards={users.length}
        currentPage={currentPage}
        changePage={changePage}
      />
      <ModalAdmin
        showAdmin={showAdmin}
        setShowAdmin={setShowAdmin}
        userName={userInfo.name}
        userId={userInfo.id}
        action={isAdmin ? "remover": "agregar"}
        userIsAdmin={isAdmin ? false : true}
        model={"users"}

      />
    </>
  );
};

export default UsersList;
