import React, { useState } from 'react';
import SingleCart from './SingleCart';

const Cart = ({ allCarts }) => {
    return (
        <div className='cart-container w-10/12 border border-gray-500 rounded-4xl mx-auto mt-4'>
            <div className='p-10'>
                <h2 className='text-2xl p-5 font-semibold'>Your Cart</h2>
                {
                    allCarts.map(cart => <div key={cart.id}><SingleCart cart={cart}></SingleCart></div>)
                }
                <button className="btn bg-[#8A2BE2] hover:bg-[#7A1FA2] text-white btn-block rounded-full border-none normal-case text-lg py-3 mt-7 h-auto disabled:opacity-60">Proceed To Checkout</button>
            </div>
        </div>
    );
};

export default Cart;