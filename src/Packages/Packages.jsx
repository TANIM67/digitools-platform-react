import React, { useState } from 'react';

const Packages = () => {
    const [products, setProducts] = useState(true);

    return (
        <div className='mt-20 p-12'>
            <div className='headings w-4/12 mx-auto'>
                <h1 className='text-4xl text-center font-semibold'>Premium Digital Tools</h1>
                <p className='text-gray-700 text-center mt-5'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className='buttons md:border border-gray-300 rounded-3xl w-full md:w-5/12 mx-auto mt-5 flex'>
                    <button className={`btn rounded-3xl text-xl md:mr-1 ${products ? 'text-white' : 'text-black'} ${products ? 'bg-blue-700' : 'bg-white'}`} onClick={()=> setProducts(true)}>Products</button>
                    <button className={`btn rounded-3xl text-xl ${products ? 'text-black' : 'text-white'} ${products ? 'bg-white' : 'bg-blue-700'}`} onClick={()=> setProducts(false)}>Carts</button>
                </div>
            </div>
        </div>
    );
};

export default Packages;