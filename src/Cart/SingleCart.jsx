import React from 'react';
import logo from '../assets/products/writing_2327400 1.png'


const SingleCart = ({ cart }) => {

    return (
        <div className="flex items-center justify-between mx-auto mb-4 p-4 bg-base-100 rounded-2xl shadow-sm border border-base-200 w-full">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center overflow-hidden">
                    <img
                        src={logo}
                        alt={cart.name}
                        className="w-8 h-8 object-contain"
                    />
                </div>

                <div>
                    <h3 className="font-semibold text-neutral text-base">{cart.name}</h3>
                    <p className="text-sm text-base-content/60">{cart.price}</p>
                </div>
            </div>

            <div>
                <button className="btn btn-ghost btn-sm text-secondary font-bold hover:bg-secondary/10 normal-case">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default SingleCart;