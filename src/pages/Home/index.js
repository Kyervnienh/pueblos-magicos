import React from 'react';
import Footer from '../../components/Footer';
import Recommendations from './components/Recommendations';
import SuggestionsComponent from './components/Suggestions/index';
import NavSidebar from '../../components/NavSidebar';
import Image from '../../assets/background.png';
import BtnScrollToTop from '../../components/BtnScrollToTop';

const Home = () => {
  const hero = {
    titleP1: 'DESCUBRE',
    titleP2: 'LA MAGIA',
    subtitle: 'Descubre México y enamórate de sus Pueblos Mágicos.',
    img: [String(Image)],
  };

  return (
    <>
      <NavSidebar hero={hero} />
      <SuggestionsComponent />
      <Recommendations />
      <BtnScrollToTop />
      <Footer />
    </>
  );
};

export default Home;
