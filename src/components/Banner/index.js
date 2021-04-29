import React from 'react';
import img from '../../assets/pueblos.jpg';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import './index.scss';

const BannerComponent = (
    {
        label = 'Villa del Carbón',
    }
) => {
    return (
        <div className="baneer">
            <Image src={img} className="imgBack"/>
            <div className="centrado">
                <h1 data-text={label} className="label">{label}</h1>
            </div>
        </div>
    )
}

BannerComponent.propTypes = {
    label: PropTypes.string.isRequired,
}
 
export default BannerComponent;