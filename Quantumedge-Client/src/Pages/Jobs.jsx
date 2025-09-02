import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { PiBagSimpleDuotone } from 'react-icons/pi';
import { useLoaderData } from 'react-router';

const Jobs = () => {
    const datas = useLoaderData();
    return (
        <div className='my-20 max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    datas.map((d) => (
                        <div key={d._id} className='bg-white rounded-md hover:shadow-xl p-3 space-y-3 group'>
                            <h4 className='text-[#888888] text-sm'>{d?.deadline}</h4>
                            <h2 className='text-xl font-semibold'>{d?.title}</h2>
                            <div className='flex items-center justify-between bg-[#CCCCCC] p-3 rounded-md'>
                                <h5 className='text-[#888888]'>Fixed Price Project</h5>
                                <h5>{d?.salary}</h5>
                            </div>
                            <p className='text-[#888888] text-sm'>{d?.description}</p>
                            <div className='flex items-center gap-3'>
                                <div className='bg-[#FAF7FF] text-[#9747FF] rounded-3xl text-sm px-3 py-2 flex items-center gap-1'><IoLocationOutline />{d?.type}</div>
                                <div className='bg-[#FFF5F5] text-[#DB3131] rounded-3xl text-sm px-3 py-2 flex items-center gap-1'><PiBagSimpleDuotone />{d?.level} level</div>
                                <div className='bg-[#E9FFEE] text-[#05AF2B] rounded-3xl text-sm px-3 py-2 flex items-center gap-1'><IoIosPeople />{d?.vacancy} Freelancer</div>
                            </div>
                            <div className='space-y-1 pb-4 border-b-2 border-[#cccccc50]'>
                                <div className='flex items-center justify-baseline gap-3'>
                                    {
                                        d?.skills.slice(0, 3).map((skill, index) => (
                                            <span key={index} className='text-sm font-semibold bg-[#CCCCCC] rounded-3xl px-3 py-2'>{skill}</span>
                                        ))
                                    }
                                </div>
                                <p className='text-sm font-semibold'>+ {parseInt(d?.skills.length) - 3} more</p>
                            </div>
                            <h2 className='text-sm font-semibold text-[#CCCCCC]'>Posted by <span className='text-base text-black'>{d?.userName}</span></h2>
                            <button className='btn w-fit bg-black text-white group-hover:bg-primary rounded-3xl'>Apply Now</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Jobs;