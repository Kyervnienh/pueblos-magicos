import React, { useState } from 'react';
import Footer from '../../components/Footer';
import IntroduccionRecomendaciones from './components/IntroduccionRecomendaciones';
import SuggestionsComponent from './components/Suggestions/index';
import Slider from '../../components/Slider';
import NavSidebar from '../../components/NavSidebar';

const Home = () => {
  return (
    <>
    <NavSidebar/>
      <Slider />
      <SuggestionsComponent />
      <IntroduccionRecomendaciones />
      <Footer />
    </>
  );
};

export default Home;
