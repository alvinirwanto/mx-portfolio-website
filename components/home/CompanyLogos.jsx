import React from 'react'
import Image from 'next/image'

const CompanyLogos = () => {
    return (
        <div className='relative'>
            <Image className='object-cover object-left-bottom h-screen md:h-[50vh] w-screen' width={2000} height={2000} src='/dummy.png' />
            <div className='z-[55] absolute flex flex-col gap-5 justify-center items-center w-full h-screen md:h-[50vh] top-0 bg-gradient-to-t from-[#1261a698] to-[#1261a698]'>
                <div className='flex flex-col md:flex-row gap-9 justify-between items-center w-full max-w-[1100px] mx-auto'>
                    <div className='home__items-service'>
                    </div>
                    <div className='home__items-service'>
                    </div>
                    <div className='home__items-service'>
                    </div>
                    <div className='home__items-service'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyLogos