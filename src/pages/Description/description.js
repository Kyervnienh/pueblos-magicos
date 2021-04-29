import React from 'react';
import OverviewGeneral from './components/OverviewGeneral';
import NavbarMenu from '../../components/Menu';
import InfoAttractions from './components/InfoAttractions';

const DescriptionPage = () => {
    let query = 'Valle de Bravo';
    return (
        <div>
            <NavbarMenu/>
            <OverviewGeneral/>
            <InfoAttractions town={query} />
        </div>
    )
}

export default DescriptionPage;