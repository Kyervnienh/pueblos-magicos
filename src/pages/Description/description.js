import React from 'react';
import OverviewGeneral from './components/OverviewGeneral';
import Navbar from '../../components/Menu';
import InfoAttractions from './components/InfoAttractions';

const DescriptionPage = () => {
    let query = 'Valle de Bravo';
    return (
        <div>
            <Navbar/>
            <OverviewGeneral/>
            <InfoAttractions town={query} />
        </div>
    )
}

export default DescriptionPage;