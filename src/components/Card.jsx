import React from 'react'

const Card = (props) => {
    return (
        <>
        <div className={`w-full p-4 my-8 flex flex-col ${props.cardNo % 2 === 0 ? 'bg-gray-100 md:my-0': 'bg-white'} shadow-xl rounded-lg hover:scale-105 duration-300`}>
                <img 
                    src={props.img} 
                    alt={props.alt} 
                    className='w-20 mx-auto mt-[-3rem] bg-transparent' 
                />
                <h2 className='py-8 text-2xl font-bold text-center'>{props.userType}</h2>
                <p className='text-center text-4xl font-bold'>{props.price}</p>
                <div className='text-center font-medium'>
                    <p className='mt-8 mx-8 py-2 border-b border-t'>{props.storage}</p>
                    <p className='mx-8 py-2 border-b '>{props.noofusers}</p>
                    <p className='mx-8 py-2 border-b '>{props.sendUpto}</p>
                </div>
                <button className={`w-[200px] mx-auto my-6 py-3 rounded-md ${props.cardNo % 2 === 0 ? 'bg-black text-[#00df9a]':'bg-[#00df9a] text-black'} font-semibold`}>
                    Start Trial
                </button>
            </div>
        </>
    )
}

//! mx-8 is used for the text inside the card to have the borders(p-tag itself) automatically increase/decrease in size
//! flex items-center was also achieving center aligned text but the borders were of strict length
export default Card;