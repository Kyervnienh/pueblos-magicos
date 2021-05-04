import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InfoAttraction from '../../../../components/InfoAttraction';
import InfoGeneral from '../../../../components/InfoGeneral';
import BannerComponent from '../../../../components/Banner';
import LoadingComponent from '../../../../components/Loading';

const baseURL = "http://localhost:4000/dataTown";

const InfoAttractions = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [town, setTown] = useState({});
  let townId = parseInt(props.town);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${baseURL}/${townId}`);
        const data = await response.json();
        setTown(data);
        setIsLoading(false);
      } catch(error) {
        console.error(error);
      }
    };

    getData();
  }, []);

    return (
      isLoading ? <LoadingComponent /> :
        <>
          <BannerComponent label = {town.name}/>
            <InfoGeneral
              name = {town.name}
              img = {town.img}
              infoState = {town.infoState}
            />
                {town.attractions.map(attraction => (
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
    )
} 
  
  InfoAttractions.propTypes = {
    town: PropTypes.string.isRequired,
}

export default InfoAttractions;