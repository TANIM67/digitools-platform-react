import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    const navLink = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'];
    return (
        <div className='p-3'>
            <div className='container w-10/12 mx-auto m-5 flex gap-20 items-center justify-between'>
                <div>
                    <h1 className='text-3xl text-[#9514FA] font-semibold'>DigiTools</h1>
                </div>
                <div>
                    {
                        navLink.map(nav =>
                            <a className='mr-5 text-gray-700' href="">{nav}</a>
                        )
                    }
                </div>
                <div className='flex gap-4 items-center'>
                    <ShoppingCart></ShoppingCart>
                    <a href="">Login</a>
                    <button className='btn btn-primary rounded-4xl'>Get Started</button>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Navbar;