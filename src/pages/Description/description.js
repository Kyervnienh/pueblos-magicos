import React from 'react';
import InfoAttractions from './components/InfoAttractions';
import NavSidebar from '../../components/NavSidebar';
import SliderQuotes from '../../components/SliderQuotes';
import CommentHeader from '../../components/CommentHeader';
import Footer from '../../components/Footer';
import NotFoundPage from '../NotFound/notfound';

const DescriptionPage = ({ match }) => {
  let query = match.params.id;
  return (
    !isNaN(query) ?
    <>
      <NavSidebar />
      <InfoAttractions town={query} />
      <SliderQuotes town={query} />
      <CommentHeader town={query} />
      <Footer />
    </> : <NotFoundPage/>
  );
};

export default DescriptionPage;
