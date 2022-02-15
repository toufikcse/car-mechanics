import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {bookId} = useParams();
    return (
        <div>
            <h2>This is Booking: {bookId}</h2>
        </div>
    );
};

export default Booking;