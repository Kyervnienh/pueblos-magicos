import React from 'react';
import InfoAttractions from './components/InfoAttractions';
import NavSidebar from '../../components/NavSidebar';
import SliderQuotes from '../../components/SliderQuotes';

const DescriptionPage = ({ match }) => {
    let query = match.params.id;
    return (
        <div>
            <NavSidebar/>
            <InfoAttractions town={query} />
            <SliderQuotes/>
        </div>
    )
}

export default DescriptionPage;