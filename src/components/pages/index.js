import React, {useState} from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Menu';
import Footer from '../Footer';
import IntroduccionRecomendaciones from '../../Home/components/IntroduccionRecomendaciones';
import UltimasRecomendaciones from '../../Home/components/UltimasRecomendaciones/index';
import Slider from '../Slider';
import Filter from '../Filter';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen)
    }
    return (
        <>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Slider />
        <Filter />
        <UltimasRecomendaciones/>
        <IntroduccionRecomendaciones />
        <Footer />
        </>
    )
}

export default Home;
