import React, { useEffect, useState } from "react";
import "./index.scss";
import Table from "react-bootstrap/Table";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillFileAdd } from "react-icons/ai";
import Card from "react-bootstrap/Card";
import ModalDelete from "../ModalDelete";
import NotFound from "../../components/NotFound";
import Pagination from '../../pages/TownList/components/Pagination';
import { Link } from "react-router-dom";

const baseURL = "http://localhost:4000/dataTown";

const ReviewsList = () => {
  const [towns, setTowns] = useState([]);
  const [townInfo, setTownInfo] = useState({});
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [inferiorLimit, setInferiorLimit] = useState(0);
  const [superiorLimit, setSuperiorLimit] = useState(3);

  const changePage = (e) => {
    setCurrentPage(parseInt(e.target.value));
    setInferiorLimit((parseInt(e.target.value) - 1) * 3);
    if (parseInt(e.target.value) * 3 >= towns.length) {
      setSuperiorLimit(towns.length)
    } else {
      setSuperiorLimit(parseInt(e.target.value) * 3);
    }
  }

  const filterDropdown = () => {
    let newTowns = [];

    for (let i = inferiorLimit; i < superiorLimit; i++) newTowns.push(towns[i]);
    return newTowns;
  }

  const handleShow = (name, id) => {
    setShow(true);
    setTownInfo({ 'name': name, 'id': id });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(baseURL);
        const data = await response.json();
        setTowns(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <h1>Administrar Reseñas</h1>
      <div className="AddReviewButton">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="m-0">Agregar nueva Reseña</Card.Title>
            <Link to="/dashboard/addTown"><AiFillFileAdd className="AddReviewIcon" size={30}></AiFillFileAdd></Link>
          </Card.Body>
        </Card>
      </div>
      {towns.length ? (
        <div className="table">
          <Table responsive className="justify-content-start pr-0">
            <tbody>
              <tr>
                <th>Pueblo Mágico</th>
                <th>Estado</th>
                <th>Calificación</th>
                <th>Descripción</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>

              {filterDropdown().map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.state}</td>
                  <td>{item.pts}</td>
                  <td>{item.infoState.slice(0, 100) + '...'}</td>
                  <td className="EditIcon">
                    <Link to={{ pathname: "/dashboard/editTown", town: item }} className="linkEditTown"><TiEdit size={30}></TiEdit></Link>
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
        elementName={townInfo.name}
        elementId={townInfo.id}
        typeInfo={"esta reseña"}
        model={"dataTown"}
        locations={"dashboard"}
      />
      <Pagination numberOfCards={towns.length} currentPage={currentPage} changePage={changePage} />
    </>
  );
};

export default ReviewsList;