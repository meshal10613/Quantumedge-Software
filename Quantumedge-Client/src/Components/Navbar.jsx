import React from 'react';
import { Link } from 'react-router';
import design from '../assets/navbar-design.png'

const Navbar = () => {
    return (
    <div className='bg-secondary'>
        <div className="navbar justify-between max-w-7xl mx-auto py-5 border-b border-b-gray-500">
            <div className="z-20">
                <Link to="/" className="text-xl cursor-pointer w-52">
                    <img src="/logo.png" alt="logo" className='w-52' />
                </Link>
            </div>
            <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                <div className='flex items-center justify-center gap-5'>
                    <Link className='text-primary'>BECOME A SELLER</Link>
                    <Link className='text-white'>LOGIN</Link>
                    <Link className='bg-primary hover:bg-green-700 py-2 px-4 text-white rounded-3xl p-1 border-none'>REGISTRATION</Link>
                </div>
            </div>
        </div>
        <img src={design} alt="" className='absolute top-0 left-0 z-10' />
    </div>
    );
};

export default Navbar;