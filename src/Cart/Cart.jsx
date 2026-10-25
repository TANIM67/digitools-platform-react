import React, { useState } from 'react';
import SingleCart from './SingleCart';

const Cart = ({ allCarts }) => {
    // console.log(allCarts);
    return (
        <div>
            {
                allCarts.map(cart => <div key={cart.id}><SingleCart cart={cart}></SingleCart></div>)
            }
        </div>
    );
};

export default Cart;