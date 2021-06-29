import React, { useEffect, useState } from "react";
import "./index.scss";
import Table from "react-bootstrap/Table";
import { RiDeleteBinLine } from "react-icons/ri";
import ModalDelete from "../ModalDelete";
import NotFound from "../../components/NotFound";
import Pagination from "../../pages/TownList/components/Pagination";

const baseURL = `${process.env.REACT_APP_BACKEND_URL}`;

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [commentInfo, setCommentInfo] = useState({});
  const [show, setShow] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [inferiorLimit, setInferiorLimit] = useState(0);
  const [superiorLimit, setSuperiorLimit] = useState(3);

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
        const responseComment = await fetch(`${baseURL}/comments`);
        const dataComment = await responseComment.json();
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
                    <tr key={item._id}>
                      <td>{item.userId.name}</td>
                      <td>{item.body}</td>
                      <td>{item.dataTownId.name}</td>
                      <td>{item.pts}</td>
                      <td className="DeleteIcon">
                        <RiDeleteBinLine
                          onClick={() => handleShow(item.userId.name, item._id)}
                          size={25}
                        ></RiDeleteBinLine>
                      </td>
                    </tr>
                  ))
                  :
                  comments.map((item) => (
                    <tr key={item._id}>
                      <td>{item.userId.name}</td>
                      <td>{item.body}</td>
                      <td>{item.dataTownId.name}</td>
                      <td>{item.pts}</td>
                      <td className="DeleteIcon">
                        <RiDeleteBinLine
                          onClick={() => handleShow(item.userId.name, item._id)}
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
        cleanCookies={false}
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
