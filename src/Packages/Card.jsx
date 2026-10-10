import React, { use } from 'react';
import CardInfo from './CardInfo';

const Card = ({allInfo}) => {
    const cardInfo = use(allInfo);
    return (
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 p-3 gap-12'>
            {
                cardInfo.map(card => <CardInfo key={card.id} card={card}></CardInfo>)
            }
        </div>
    );
};

export default Card;