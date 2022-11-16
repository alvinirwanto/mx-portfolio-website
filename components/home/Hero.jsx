import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <Image className='object-cover h-[120vh] w-screen' width={2000} height={2000} src='/dummy.png' />
            <div className='z-[55] absolute flex flex-col gap-5 justify-center items-center w-full h-[120vh] top-0 bg-gradient-to-t from-[#1260a6a6] to-[#1261a6e0]'>
                <h2 className='text-white text-sm md:text-2xl font-semibold text-center md:text-right'>Welcome to The Digital Startup Agency</h2>
                <h1 className='text-white px-6 text-3xl md:text-6xl font-bold max-w-[900px] leading-[2.5rem] md:leading-[4.5rem] break-words text-center'>Modern Business Solution in Global Era</h1>
                <button className='bg-white text-blue-500 hover:bg-blue-500 hover:text-white duration-300 px-9 py-4 mt-9 text-sm font-semibold rounded-md'>
                    Read More
                </button>
            </div>
        </div>
    )
}

export default Hero