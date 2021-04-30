import React from 'react';
import PropTypes from 'prop-types';
import { dataTows } from '../../../../fixtures/dataTownsExample.fixture';
import InfoAttraction from '../../../../components/InfoAttraction';
import InfoGeneral from '../../../../components/InfoGeneral';
import BannerComponent from '../../../../components/Banner';

const InfoAttractions = (props) => {
  let townId = parseInt(props.town)
    const filterTown = query => {
        return dataTows.filter((town) =>
          town.id === query
        );
      }

      let filteredTown = filterTown(townId)[0];

      let attr = filteredTown.attractions;
      let name = filterTown(townId)[0].name;
      let img = filterTown(townId)[0].img;
      let infoState = filterTown(townId)[0].infoState;

    return (
        <>
            <>
            <BannerComponent label = {name}/>
            <InfoGeneral
              name = {name}
              img = {img}
              infoState = {infoState}
            />
                {attr.map(attraction => (
                    <InfoAttraction
                    attractionName = {attraction.name}
                    info = {attraction.info}
                    img = {attraction.img}
                    cost = {attraction.cost}
                    distance = {attraction.distance}
                    type = {attraction.type}
                    key = {attraction.name} />
                ))}
            </>
        </>
    )
} 
  
  InfoAttractions.propTypes = {
    town: PropTypes.string.isRequired,
}

export default InfoAttractions;