import React, { use, useState } from 'react';
import CardInfo from './CardInfo';
import Cart from '../Cart/Cart';

const Card = ({allInfo, allCarts, handleCarts}) => {
    const cardInfo = use(allInfo);
    
    return (
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 p-3 gap-12'>
            {
                cardInfo.map(card => <CardInfo key={card.id} card={card} addCart={handleCarts} isAdded={allCarts.some(c => c.id === card.id)}></CardInfo>)
            }
        </div>
    );
};

export default Card;