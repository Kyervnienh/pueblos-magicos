import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Menu';
import Footer from '../../components/Footer';
import Recommendations from './components/Recommendations';
import SuggestionsComponent from './components/Suggestions/index';
import Slider from '../../components/Slider';
import Filter from '../../components/Filter';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Slider />
      <Filter />
      <SuggestionsComponent />
      <Recommendations />
      <Footer />
    </>
  );
};

export default Home;
