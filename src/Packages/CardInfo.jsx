import React from 'react';
import logo from '../assets/products/writing_2327400 1.png'

const CardInfo = ({ card }) => {
    console.log(card);
  return (
    <div className=''>
      <div className="card w-96 bg-base-100 shadow-sm border border-base-200">

        <div className="card-body">
          <div className="flex justify-between items-start">
            <div className="avatar placeholder">
              <div className="bg-base-200 text-3xl rounded-full w-14 h-14 flex items-center justify-center">
                <img className='w-7 h-7' src={logo} alt="logo" />
              </div>
            </div>
            <span className="badge badge-md bg-orange-100 text-orange-700 border-none font-semibold py-3 px-4 rounded-full">
              {card.tag}
            </span>
          </div>

          
          <div className="mt-4">
            <h2 className="text-3xl font-bold text-neutral">{card.name}</h2>
            <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
              {card.description}
            </p>
          </div>

          <div className="mt-4">
            <span className="text-3xl font-bold">{card.price}</span>
            <span className="text-md text-base-content/60 font-medium">/Mo</span>
          </div>

          
          <ul className="mt-5 flex flex-col gap-3 text-sm text-base-content/80">
            <li className="flex items-center gap-2">
              <span>
                {
                    card.features.map (feature => 
                    <h1 className='flex gap-2 items-center'>
                        <i class="fa-solid fa-check"></i>
                        {feature}
                    </h1>)
                }
              </span>
            </li>
            
          </ul>

          <div className="mt-6">
            <button className="btn bg-[#8A2BE2] hover:bg-[#7A1FA2] text-white btn-block rounded-full border-none normal-case text-lg py-3 h-auto">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
