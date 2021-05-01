import React from 'react';
import InfoAttractions from './components/InfoAttractions';
import NavSidebar from '../../components/NavSidebar';
import SliderQuotes from '../../components/SliderQuotes';
import CommentHeader from '../../components/CommentHeader'
import Footer from '../../components/Footer';

const DescriptionPage = ({ match }) => {
    let query = match.params.id;
    return (
        <div>
            <NavSidebar/>
            <InfoAttractions town={query} />
            <SliderQuotes/>
            <CommentHeader />
            <Footer />
        </div>
    )
}

export default DescriptionPage;