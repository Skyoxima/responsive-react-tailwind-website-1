import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
    return (
        <div className='text-white'>
            <div className="max-w-[800px] w-full h-screen mt-[-96px] mx-auto flex flex-col justify-center items-center text-center">
                <p className="p-2 text-[#00df9a] font-[800] md:text-xl sm:text-lg text-base">GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:py-6 md:text-7xl sm:text-6xl text-4xl font-bold'>Grow with data.</h1>
                
                <div className='py-4 flex justify-center items-center'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold'>
                        Fast, flexible financing for
                    </p>
                    <Typed 
                        strings={['BTB', 'BTC', 'SASS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                        className='md:pl-3 pl-2 md:text-4xl sm:text-3xl text-xl font-bold text-[#696969]' />
                </div>
                <p className='md:text-2xl text-xl font-bold text-[#696969]'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
                <button className='w-[200px] my-6 py-3 rounded-md bg-[#00df9a] text-black font-semibold'>Get Started</button>
            </div>
        </div>
)
}

export default Hero;