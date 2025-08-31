import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div className=''>
            <Navbar/>
            <div className='min-h-[calc(100vh-1232px)]'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default HomeLayout;