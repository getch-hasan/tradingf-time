import React from 'react';
import UseTime from '../Shared/UseTime';

const Remining = () => {
    const [timeLeft] = UseTime()
    console.log(timeLeft)
    return (
        <div className='backgroud p-10 bg-center bg-cover h-screen' >
            <div>
                <h1 className='text-5xl font-semibold text-white '>WELCOME </h1>
                <h1 className='text-5xl font-semibold text-white '>TO</h1>
                <h1 className='text-5xl font-semibold text-white '>ORION TRADING SYSTEM</h1>
            </div>
            <div>
                <h1 className='text-5xl font-semibold mt-10 text-white'>WE ARE COMING SOON....</h1>
                <p className='text-white'>Orion Trading Systems is changing how brokers, educators, and traders acquire and use trading software. Our platform can trade any asset and be connected. OTS Trade stocks, futures, futures options, forex, and crypto in one experience. Connections to many brokers and real-time data sources</p>
            </div>
            <div className='grid grid-cols-4 mt-16 justify-center items-center gap-20'>
                <div className=' rounded-xl shadow-xl overflow-hidden'>
                    <div className='p-12 bg-gradient-to-tl from-custom1 to-custom2'>
                        <h1 className='text-5xl font-semibold text-white'>{timeLeft.days}</h1>
                    </div>
                    <div className='bg-[#FFFFFF] p-4 font-bold'>Days</div>
                </div>
                <div className=' rounded-xl shadow-xl overflow-hidden'>
                    <div className='p-12 bg-gradient-to-tl from-custom1 to-custom2'>
                        <h1 className='text-5xl font-semibold text-white'>{timeLeft.hours}</h1>
                    </div>
                    <div className='bg-[#FFFFFF] p-4 font-bold'>Hours</div>
                </div>
                <div className=' rounded-xl shadow-xl overflow-hidden'>
                    <div className='p-12 bg-gradient-to-tl from-custom1 to-custom2'>
                        <h1 className='text-5xl font-semibold text-white'>{timeLeft.minutes}</h1>
                    </div>
                    <div className='bg-[#FFFFFF] p-4 font-bold'>Minutes</div>
                </div>
                <div className=' rounded-xl shadow-xl overflow-hidden'>
                    <div className='p-12 bg-gradient-to-tl from-custom1 to-custom2'>
                        <h1 className='text-5xl font-semibold text-white'>{timeLeft.seconds}</h1>
                    </div>
                    <div className='bg-[#FFFFFF] p-4 font-bold'>Seconds</div>
                </div>
               


            </div>
        </div>
    );
};

export default Remining;