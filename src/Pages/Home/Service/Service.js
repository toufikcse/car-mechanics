import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, price, img, description} = service;
    return (
        <div className='service pb-3'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h5>Price: {price}</h5>
            <p>{description}</p>
            <Link to={`/booking/${id}`}>
                <button className='btn btn-warning'>Book {name}</button>
            </Link>
        </div>
    );
};

export default Service;