import React, { useState, useEffect } from 'react';
import InfoAttractions from './components/InfoAttractions';
import NavSidebar from '../../components/NavSidebar';
import SliderQuotes from '../../components/SliderQuotes';
import CommentHeader from '../../components/CommentHeader';
import Footer from '../../components/Footer';
import NotFoundPage from '../NotFound/notfound';
import BtnScrollToTop from '../../components/BtnScrollToTop';

const baseURL = 'http://localhost:8080/towns';

const DescriptionPage = ({ match }) => {
  let query = match.params.id;
  const [town, setTown] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${baseURL}/${query}`);
        const data = await response.json();
        setTown(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
    // eslint-disable-next-line
  }, []);

  const hero = {
    titleP1: town.name,
    titleP2: "",
    subtitle: town.infoState,
    img: town.img,
  };

  return town ? (
    <>
      <NavSidebar hero={hero} />
      <InfoAttractions town={town} isLoading={isLoading} />
      <SliderQuotes town={query} />
      <CommentHeader town={query} />
      <BtnScrollToTop />
      <Footer />
    </>
  ) : (
    <NotFoundPage />
  );
};

export default DescriptionPage;
