import React, { useEffect, useState } from 'react';
import NavSidebar from '../../components/NavSidebar';
import Slider from '../../components/Slider';
import Filter from '../../components/Filter';
import CardComponent from '../../components/Card';
import Pagination from './components/Pagination';
import Footer from '../../components/Footer';
import './index.scss';
import NotFound from '../../components/NotFound';
import Image from '../../assets/pueblosMagicos.png';

const TownList = () => {
  const [state, setState] = useState('Todos los pueblos');
  const [allTowns, setAllTowns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inferiorLimit, setInferiorLimit] = useState(0);
  const [superiorLimit, setSuperiorLimit] = useState(3);

  let hero = {
    titleP1: 'DESCUBRE',
    titleP2: 'MÉXICO',
    subtitle: 'Enamórate de sus Pueblos Mágicos.',
    img: [String(Image)],
  };

  useEffect(() => {
    const getTownsFilteredAPI = async () => {
      const url = 'http://localhost:4000/dataTown';
      const response = await fetch(url);
      const result = await response.json();
      setAllTowns(result);
    };

    getTownsFilteredAPI();
  }, []);

  const getUnique = () => {
    const unique = allTowns
      //store the comparison values in array
      .map((e) => e.state)

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => allTowns[e])

      .map((e) => allTowns[e]);

    return unique;
  };

  const uniqueState = getUnique();

  const handleChangeState = (e) => {
    setState(e.target.parentNode.firstChild.value);
    setCurrentPage(1);
    setInferiorLimit(0);
    setSuperiorLimit(3);
  };

  const townsFiltered = allTowns.filter((result) => {
    if (state === 'Todos los pueblos') return true;

    return result.state === state;
  });

  const filterDropdown = () => {
    let towns = [];

    for (let i = inferiorLimit; i < superiorLimit; i++) {
      if (townsFiltered[i]) towns.push(townsFiltered[i]);
    }
    return towns;
  };

  const exampleAction = (name) => {
    console.log(`Se seleccionó ${name}`);
  };

  const changePage = (e) => {
    setCurrentPage(parseInt(e.target.value));
    setInferiorLimit((parseInt(e.target.value) - 1) * 3);
    if (parseInt(e.target.value) * 3 >= townsFiltered.length) {
      setSuperiorLimit(townsFiltered.length);
    } else {
      setSuperiorLimit(parseInt(e.target.value) * 3);
    }
  };

  return (
    <>
      <NavSidebar hero={hero} />
      <Filter uniqueState={uniqueState} handleChangeState={handleChangeState} />
      {townsFiltered.length ? (
        <>
          <div className="cardContainer">
            {filterDropdown().map((town) => (
              <CardComponent
                name={town.name}
                state={town.state}
                pts={town.pts}
                img={town.img}
                key={town._id}
                id={town._id}
                action={() => exampleAction(town.name)}
              />
            ))}
          </div>
          <Pagination
            numberOfCards={townsFiltered.length}
            currentPage={currentPage}
            changePage={changePage}
          />
        </>
      ) : (
        <NotFound>No se encontraron datos</NotFound>
      )}
      <Footer />
    </>
  );
};

export default TownList;
