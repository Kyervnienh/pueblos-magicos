import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Recommendations from './components/Recommendations';
import SuggestionsComponent from './components/Suggestions/index';
import Slider from '../../components/Slider';

const Home = () => {
  return (
    <>
      <NavSidebar />
      <Slider />
      <SuggestionsComponent />
      <Recommendations />
      <Footer />
    </>
  );
};

export default Home;
