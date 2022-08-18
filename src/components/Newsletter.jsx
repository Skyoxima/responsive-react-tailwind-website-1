import React from 'react'

const Newsletter = () => {
    return (
    <div className='w-full px-4 py-16 text-white'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            {/* Header */}
            <div className='lg:col-span-2'>
                <h1 className='py-2 font-bold md:text-4xl sm:text-3xl text-2xl'>
                    Want tips & tricks to optimize your flow?
                </h1>
                <p className="">
                    Sign Up to our newsletter and stay up to date.
                </p>
            </div>

            {/* Inputs */}
            <div className="my-5">
                <div className='flex items-center flex-col sm:flex-row'>
                    <input 
                        type="email" 
                        placeholder='Enter Email' 
                        className='p-3 flex w-full rounded-md text-black'
                    />
                    <button className='w-[200px] till_sm:mt-4 sm:ml-4 py-3 rounded-md bg-[#00df9a] text-black font-semibold'>
                        Notify Me!
                    </button>
                </div>
                <p className='mt-2'>We care about the privacy of your data. Read our {' '} 
                    <a className='text-[#00df9a] underline' href='/'>Privacy Policy.</a>
                </p>
            </div>
        </div>
    </div>
    )
}
//! Using # in an href in react gives off a warning...
export default Newsletter;