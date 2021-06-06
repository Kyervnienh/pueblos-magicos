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

const CommentsList = () => {
  const [towns, setTowns] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentInfo, setCommentInfo] = useState({});
  const [show, setShow] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [inferiorLimit, setInferiorLimit] = useState(0);
  const [superiorLimit, setSuperiorLimit] = useState(3);

  const commentTown = (townId) => {
      let name = '';
    towns.forEach(function(town) {
        if(Number(townId) === Number(town.id)) {
            name = town.name;
        }
    })
    return name;
};

  const handleShow = (name, id) => {
    setShow(true);
    setCommentInfo({ name: name, id: id });
  };

  const changePage = (e) => {
    setCurrentPage(parseInt(e.target.value));
    setInferiorLimit((parseInt(e.target.value) - 1) * 3);
    if (parseInt(e.target.value) * 3 >= comments.length) {
      setSuperiorLimit(comments.length);
    } else {
      setSuperiorLimit(parseInt(e.target.value) * 3);
    }
  };

  const filterDropdown = () => {
    let newComments = [];

    for (let i = inferiorLimit; i < superiorLimit; i++) newComments.push(comments[i]);
    return newComments;
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${baseURL}/dataTown`);
        const responseComment = await fetch(`${baseURL}/comments`);
        const data = await response.json();
        const dataComment = await responseComment.json();
        setTowns(data);
        setComments(dataComment);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);
  return (
    <>
      <h1>Administrar Comentarios</h1>
      {comments.length ? (
        <div className="table">
          <Table responsive className="justify-content-start pr-0">
            <tbody>
              <tr>
                <th>Usuario</th>
                <th>Comentario</th>
                <th>Pueblo</th>
                <th>Calificación</th>
                <th>Eliminar</th>
              </tr>
              {
                  comments.length >= 3 ? 
                  filterDropdown().map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.body}</td>
                      <td>{commentTown(item.dataTownId)}</td>
                      <td>{item.pts}</td>
                      <td className="DeleteIcon">
                        <RiDeleteBinLine
                          onClick={() => handleShow(item.name, item.id)}
                          size={25}
                        ></RiDeleteBinLine>
                      </td>
                    </tr>
                  ))
                  :
                  comments.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.body}</td>
                      <td>{commentTown(item.dataTownId)}</td>
                      <td>{item.pts}</td>
                      <td className="DeleteIcon">
                        <RiDeleteBinLine
                          onClick={() => handleShow(item.name, item.id)}
                          size={25}
                        ></RiDeleteBinLine>
                      </td>
                    </tr>
                  ))
              }
            </tbody>
          </Table>
        </div>
      ) : (
        <NotFound>No se encontraron datos</NotFound>
      )}
      <ModalDelete
        show={show}
        setShow={setShow}
        elementName={commentInfo.name}
        elementId={commentInfo.id}
        typeInfo={"este comentario"}
        model={"comments"}
        location={"dashboard"}
      />
      <Pagination
        numberOfCards={comments.length}
        currentPage={currentPage}
        changePage={changePage}
      />
    </>
  );
};

export default CommentsList;
