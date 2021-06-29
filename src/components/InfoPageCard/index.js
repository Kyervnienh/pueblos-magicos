import React from 'react';
import Image from 'react-bootstrap/Image';
import './index.scss';

const InfoPageCard = ({subtitle, title, description, imagen, orderD, orderImg}) => {

    return (
        <div className="infoPageCard" fluid="true">
            <div className="firtCard" style={{order : `${orderD}`}}>
                    <p className="subtitleInfo">{subtitle}</p>
                    <p className="infoText">{title}</p>
                    <p className="infoDetail">{description}</p>
            </div>
            <div className="divImage"style={{order : `${orderImg}`}} >
                    <Image src={imagen} rounded  className="imageInfo"/>
            </div>
        </div>
    );
}

export default InfoPageCard;