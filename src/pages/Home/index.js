import React, {useState} from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Menu';
import Footer from '../../components/Footer';
import IntroduccionRecomendaciones from './components/IntroduccionRecomendaciones';
import UltimasRecomendaciones from './components/UltimasRecomendaciones';
import Slider from '../../components/Slider';
import Filter from '../../components/Filter';

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
