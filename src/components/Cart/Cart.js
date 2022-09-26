
import { faCarTunnel } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'

const Card = ({cart}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>

        </div>
    );
};

export default Card;