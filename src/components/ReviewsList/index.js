import React from "react";
import NavSidebar from "../NavSidebar";
import Table from 'react-bootstrap/Table'

const ReviewsList = () => {
  return (
    <>
      <NavSidebar />
      <Table responsive>
        <thead>
          <tr>
            <th>Pueblo Mágico</th>
            <th>Estado</th>
            <th>Calificación</th>
            <th>Descripción</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
    </>
  );
};

export default ReviewsList;
