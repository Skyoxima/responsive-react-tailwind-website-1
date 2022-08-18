import React from 'react'
import Card from './Card.jsx';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
    return (
        <div className='w-full px-4 py-[10rem] bg-white'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <Card 
                    img={Single} 
                    alt={'Single User'} 
                    userType={'Single User'}
                    price={'$149'} 
                    storage={'500 GB Storage'} 
                    noofusers={'1 User Allowed'}
                    sendUpto={'Send up to 2 GB'}
                    cardNo={1}
                />

                <Card 
                    img={Double} 
                    alt={'Partnership'} 
                    userType={'Partnership'}
                    price={'$199'} 
                    storage={'1 TB Storage'} 
                    noofusers={'3 Users Allowed'}
                    sendUpto={'Send up to 10 GB'}
                    cardNo={2}
                />

                <Card 
                    img={Triple} 
                    alt={'Group Account'} 
                    userType={'Group Account'}
                    price={'$299'} 
                    storage={'5 TB Storage'} 
                    noofusers={'10 Users Allowed'}
                    sendUpto={'Send up to 20 GB'}
                    cardNo={3}
                />
            </div>
        </div>
)
}

export default Cards;