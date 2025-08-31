import React from 'react';
import { Link } from 'react-router';
import logo from '/logo.png'
import img1 from '../assets/footer-img.png'
import design from '../assets/navbar-design.png'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-secondary text-accent py-20 mt-20'>
            <div className='max-w-7xl mx-auto space-y-20 relative'>
                {/* 1st section */}
                <div className='flex flex-col md:flex-row justify-between gap-y-10 pl-5 md:pl-0'>
                    <h2 className='text-3xl font-bold'>Reach Your Requirement Goals Right on <br /> Schedule</h2>
                    <div className='space-y-5'>
                        <h4 className='text-base-100'>Sign up, complete your profile, and start browsing projects. Submit <br /> proposals and communicate with clients to get hired.</h4>
                        <Link className='bg-primary btn rounded-3xl border-none text-accent'>Get Started</Link>
                    </div>
                </div>
                {/* 2nd section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto border-t-2 border-[#cccccc10] z-30'>
                    <Link className='w-fit h-fit p-10'>
                        <img src={logo} alt="logo" className='w-52' />
                    </Link>
                    <div className='flex flex-col gap-y-5 p-10 border-[#cccccc10] border-l-2 lg:border-l-0'>
                        <Link className='w-fit'>About</Link>
                        <Link className='text-base-100 w-fit'>About Us</Link>
                        <Link className='text-base-100 w-fit'>Become Seller</Link>
                        <Link className='text-base-100 w-fit'>ProProJobs</Link>
                    </div>
                    <div className='flex flex-col gap-y-5 border-x-2 border-b-2 border-[#cccccc10] p-10 border-t-2 lg:border-t-0'>
                        <Link className='w-fit'>Categories</Link>
                        <Link className='text-base-100 w-fit'>Design & Creative</Link>
                        <Link className='text-base-100 w-fit'>Development & IT</Link>
                        <Link className='text-base-100 w-fit'>Music & Audio</Link>
                        <Link className='text-base-100 w-fit'>Programming & Tech</Link>
                    </div>
                    <div className='flex flex-col gap-y-5 p-10 border-b-2 border-[#cccccc10] border-t-2 lg:border-t-0'>
                        <Link className='w-fit'>Support</Link>
                        <Link className='text-base-100 w-fit'>Help & Support</Link>
                        <Link className='text-base-100 w-fit'>FAQ</Link>
                        <Link className='text-base-100 w-fit'>Contact Us</Link>
                        <Link className='text-base-100 w-fit'>Terms & Services</Link>
                    </div>
                </div>
                {/* 3rd section */}
                <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-y-10'>
                    <div className='flex gap-3 z-30 pl-10 md:pl-0'>
                        <Link className='w-10 h-10 rounded-full  bg-gray-800 hover:bg-primary text-accent flex items-center justify-center'>
                            <FaFacebookF size={20} />
                        </Link>
                        <Link className='w-10 h-10 rounded-full bg-gray-800 hover:bg-primary text-accent flex items-center justify-center'>
                            <FaInstagram size={20} />
                        </Link>
                        <Link className='w-10 h-10 rounded-full  bg-gray-800 hover:bg-primary text-accent flex items-center justify-center'>
                            <FaXTwitter size={20} />
                        </Link>
                    </div>
                    <div className='pl-10 md:pl-0'>
                        <h2 className='mb-5 text-xl font-semibold'>Our Popular Post</h2>
                        <div className='flex flex-col lg:flex-row gap-10 justify-between items-center'>
                            <div className='flex gap-3 justify-between'>
                                <img src={img1} alt="" className='w-40' />
                                <div className='space-y-3'>
                                    <p className='text-base-100 text-xs'>November 7, 2024</p>
                                    <h2 className='text-sm'>Unveils the Best Canadian Cities for Biking</h2>
                                </div>
                            </div>
                            <div className='flex gap-3 justify-between'>
                                <img src={img1} alt="" className='w-40' />
                                <div className='space-y-3'>
                                    <p className='text-base-100 text-xs'>November 7, 2024</p>
                                    <h2 className='text-sm'>Unveils the Best Canadian Cities for Biking</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={design} alt="design" className='absolute bottom-1/12 z-20' />
                </div>
                {/* 4th section */}
                <div className='text-center border-t-2 border-[#cccccc10] pt-10'>
                    <h2 className='text-base-100'>© QuantumEdge Software INC. 2025. All rights reserved.</h2>
                </div>
            </div>
        </div>
    );
}; 

export default Footer;