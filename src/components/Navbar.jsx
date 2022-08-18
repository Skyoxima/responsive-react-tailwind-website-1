import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
    const [sidenav, setNav] = useState(false);
    const sidebarStyleCommon = 'fixed top-0 w-[60%] h-full border-r border-r-gray-600 bg-[#070707] ease-in-out duration-500';
    
    const handleSideNav = () => {
        setNav(!sidenav);
    } 

    return (
        <div className='h-24 max-w-[1240px] mx-auto px-4 bg-opacity-20 flex justify-between items-center text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className='hidden md:flex'> 
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>

            <div onClick={ handleSideNav } className='block md:hidden'>
                { sidenav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
            </div>

            {/* Side-Navbar (Mobile view)*/}
            <div className={ sidenav ? `${sidebarStyleCommon} left-0` : `${sidebarStyleCommon} -left-full` }>
                <h1 className='w-full m-4 text-3xl font-bold text-[#00df9a]'>REACT.</h1>
                <ul className='uppercase px-4'>
                    <li className='p-4 border-b border-gray-700'>Home</li>
                    <li className='p-4 border-b border-gray-700'>Company</li>
                    <li className='p-4 border-b border-gray-700'>Resources</li>
                    <li className='p-4 border-b border-gray-700'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    )
}
// md is 'breakpoint', used for responsiveness
export default Navbar;