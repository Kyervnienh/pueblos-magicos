import React from 'react';
import noDataImg from '../../assets/icons/nodata.jpg';
import './index.scss'

const NotFound = (props) => 
    <div className='noData'>
        <img src={noDataImg} alt="https://www.freepik.com/vectors/data" className='imgNoData' />
        <p className="title">{props.children}</p>
    </div>

export default NotFound;