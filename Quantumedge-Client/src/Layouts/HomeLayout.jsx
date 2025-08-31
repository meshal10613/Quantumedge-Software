import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className=''>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default HomeLayout;