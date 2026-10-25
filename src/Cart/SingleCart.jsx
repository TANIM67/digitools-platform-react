import React from 'react';

const SingleCart = ({cart}) => {
    console.log(cart.name);
    return (
        <div>
            <h1 className='text-red-600'>{cart.name}</h1>
        </div>
    );
};

export default SingleCart;