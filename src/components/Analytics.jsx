import React from 'react'
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={Laptop} alt="/" className='w-[500px] mx-auto my-4'/>
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold md:text-lg">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="py-2 md:text-4xl sm:text-3xl text-2xl font-bold">Manage Data Analytics Centrally</h1>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Facere fuga vel necessitatibus similique, odit dolorem mollitia hic labore 
                        veniam quisquam quod quaerat ut amet magnam aspernatur fugiat 
                        unde veritatis quidem.
                    </p>
                    <button className='w-[200px] mx-auto md:mx-0 my-6 py-3 rounded-md bg-[#070707] text-[#00df9a] font-semibold'>Get Started</button>
                </div>
            </div>
        </div>
)
}

export default Analytics;