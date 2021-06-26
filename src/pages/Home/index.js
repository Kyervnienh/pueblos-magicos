import React from 'react';
import Footer from '../../components/Footer';
import Recommendations from './components/Recommendations';
import SuggestionsComponent from './components/Suggestions/index';
import NavSidebar from '../../components/NavSidebar';
import Cookies from 'universal-cookie';
import Image from '../../assets/background.png';

const cookies = new Cookies();

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
      <Footer />
    </>
  );
};

export default Home;
