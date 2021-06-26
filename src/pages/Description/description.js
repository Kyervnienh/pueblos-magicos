import React, { useState, useEffect } from 'react';
import InfoAttractions from './components/InfoAttractions';
import NavSidebar from '../../components/NavSidebar';
import SliderQuotes from '../../components/SliderQuotes';
import CommentHeader from '../../components/CommentHeader';
import Footer from '../../components/Footer';
import NotFoundPage from '../NotFound/notfound';

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
  }, []);

  return town ? (
    <>
      <NavSidebar hero={town} />
      <InfoAttractions town={town} isLoading={isLoading} />
      <SliderQuotes town={query} />
      <CommentHeader town={query} />
      <Footer />
    </>
  ) : (
    <NotFoundPage />
  );
};

export default DescriptionPage;
