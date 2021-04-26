import React from 'react';
import PropTypes from 'prop-types';
import { dataTows } from '../../../../fixtures/dataTownsExample.fixture';
import InfoAttraction from '../../../../components/InfoAttraction'

const InfoAttractions = (props) => {
    const filterTown = query => {
        return dataTows.filter((town) =>
          town.name === query
        );
      }

      let filteredTown = filterTown(props.town)[0];

      let attr = filteredTown.attractions;

    return (
        <>
            <div>
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
            </div>
        </>
    )
}

InfoAttractions.propTypes = {
    town: PropTypes.string,
  }
  
InfoAttractions.defaultProps = {
    town: 'Valle de Bravo'
  }

export default InfoAttractions;