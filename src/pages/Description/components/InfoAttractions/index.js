import React from 'react';
import PropTypes from 'prop-types';
import InfoAttraction from '../../../../components/InfoAttraction';
import InfoGeneral from '../../../../components/InfoGeneral';
import BannerComponent from '../../../../components/Banner';
import LoadingComponent from '../../../../components/Loading';

const InfoAttractions = ({ town, isLoading }) => {
  return isLoading ? (
    <LoadingComponent />
  ) : (
    <>
      {/* <BannerComponent label = {town.name}/> */}
      <InfoGeneral name={town.name} img={town.img} infoState={town.infoState} />
      {town.attractions.map((attraction) => (
        <InfoAttraction
          attractionName={attraction.name}
          info={attraction.info}
          img={attraction.img}
          cost={attraction.cost}
          distance={attraction.distance}
          type={attraction.type}
          key={attraction.name}
        />
      ))}
    </>
  );
};

InfoAttractions.propTypes = {
  town: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default InfoAttractions;
