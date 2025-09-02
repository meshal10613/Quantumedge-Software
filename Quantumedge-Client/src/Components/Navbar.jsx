import React from 'react';
import { Link } from 'react-router';
import design from '../assets/navbar-design.png'
import category from '../assets/category.png'
import useAuthContext from '../Hooks/useAuthContext';

const Navbar = () => {
    const { user, logoutUser } = useAuthContext();

    const handleLogout = () => {
        logoutUser()
        .then(() => {
            console.log("Sign out successfully!")
        })
        .catch((error) => {
            console.log(error)
        })
    };

    return (
    <div className='bg-secondary'>
        <div className="navbar justify-between max-w-7xl mx-auto py-5 border-b-2 border-[#cccccc10]">
            <div className="z-20 flex items-center gap-3">
                <Link to="/" className="text-xl cursor-pointer w-52">
                    <img src="/logo.png" alt="logo" className='w-52' />
                </Link>
                <img src={category} alt="" className='w-28' />
            </div>
            <div className="flex gap-4 z-20">
                <div className="bg-[#1a2416] px-4 py-2 lg:flex justify-baseline items-center rounded-md w-72 hidden">
                    <select className="select select-sm bg-[#2a3226] text-white rounded-md w-fit">
                        <option>Freelancer</option>
                        <option>Developer</option>
                        <option>Designer</option>
                        <option>Manager</option>
                    </select>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <Link className='text-primary hidden lg:block'>BECOME A SELLER</Link>
                    {
                        user ? 
                        <Link onClick={handleLogout} className='bg-primary hover:bg-green-700 py-2 px-4 text-white rounded-3xl p-1 border-none'>LOGOUT</Link> :
                        <div className='flex items-center gap-5'>
                            <Link to='/login' className='text-white hidden lg:block'>LOGIN</Link>
                            <Link to='/register' className='bg-primary hover:bg-green-700 py-2 px-4 text-white rounded-3xl p-1 border-none'>REGISTRATION</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
        <img src={design} alt="" className='absolute top-0 left-0 z-10' />
    </div>
    );
};

export default Navbar;