import React from 'react';
import Footer from '../../components/Footer';
import Recommendations from './components/Recommendations';
import SuggestionsComponent from './components/Suggestions/index';
import NavSidebar from '../../components/NavSidebar';
import Cookies from 'universal-cookie';
import Image from '../../assets/background.png';

const cookies = new Cookies();

const Home = () => {
  const img = [String(Image)];
  let titleP1 = "DESCUBRE";
  let titleP2 = "LA MAGIA";
  let subtitle = "Descubre México y enamórate de sus Pueblos Mágicos.";

  return (
    <>
      <NavSidebar bgImage={img} titleP1={titleP1} titleP2={titleP2} subtitle={subtitle}/>
      <SuggestionsComponent />
      <Recommendations />
      <Footer />
    </>
  );
};

export default Home;
