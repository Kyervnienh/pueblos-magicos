import React, { useEffect, useState } from "react";
import NavSidebar from "../../components/NavSidebar";
import NotFound from "../../components/NotFound";
import Footer from "../../components/Footer";
import Image from "../../assets/communidad.png";
import "./index.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardUser from "../../components/CardUser";
import Col from "react-bootstrap/Col";
import Pagination from "../TownList/components/Pagination";
import BtnScrollToTop from "../../components/BtnScrollToTop";

const baseURL = `${process.env.REACT_APP_BACKEND_URL}`;

const CommunityPage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inferiorLimit, setInferiorLimit] = useState(0);
  const [superiorLimit, setSuperiorLimit] = useState(1);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${baseURL}/users`);
        const data = await response.json();
        setUsers(data.reverse());
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  
  let newUsers = [];
  for (let i = 0; i < users.length; i += 6) {
    let piece = users.slice(i, i + 6);
    newUsers.push(piece);
  }

  const hero = {
    titleP1: "CONOCE NUESTRA",
    titleP2: "COMUNIDAD",
    subtitle: "",
    img: [String(Image)],
  };

  const changePage = (e) => {
    setCurrentPage(parseInt(e.target.value));
    setInferiorLimit((parseInt(e.target.value) - 1));
    if (parseInt(e.target.value) >= newUsers.length) {
      setSuperiorLimit(newUsers.length);
    } else {
      setSuperiorLimit(parseInt(e.target.value) * 2 - 1);
    }
  };

  const filterDropdown = () => {
    let newUsersPaginator = [];

    for (let i = inferiorLimit; i < superiorLimit; i++) newUsersPaginator.push(newUsers[i]);
    return newUsersPaginator;
  };

  return (
    <>
      <NavSidebar hero={hero} />
      <Container className="community">
        <Row className="rowStyle">
          <h1 className="titleCommunity">Últimos perfiles registrados</h1>
        </Row>
        {users.length ? (
        <div>
          {console.log(inferiorLimit, superiorLimit, newUsers.length, newUsers)}
          {filterDropdown().map((item) => (
            <Row className="rowStyle" key={newUsers.indexOf(item)}>          
              {item?.map((newSet) => (
                <Col key={newSet.id}>
                <CardUser name={newSet.name} profilePhoto={newSet.image} description={newSet.description} key={newSet.id} />
                </Col>
              ))}
            </Row>
          ))}
        </div>
      ) : (
        <NotFound>No se encontraron datos</NotFound>
      )}
      </Container>
      <Pagination
        numberOfCards={users.length * 0.5}
        currentPage={currentPage}
        changePage={changePage}
      />
      <BtnScrollToTop />
      <Footer />
    </>
  );
};

export default CommunityPage;
