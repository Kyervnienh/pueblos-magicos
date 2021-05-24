import React from 'react';
import './index.scss';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const StatisticsCard = (
    {
        number = 54,
        label = 'Usuarios',
        iconString = 'fa-bars'
    }) => {
    return (
        <Card body>
            <div>
                <p className="number">{number}</p>
                <p className="staticsName">{label}</p>
            </div>
            <i className={`fa ${iconString} iconCard`} aria-hidden="true"></i>
        </Card>
    );
}

 StatisticsCard.propTypes = {
    number: PropTypes.number,
    label: PropTypes.string,
    iconString: PropTypes.string,
}


export default StatisticsCard;