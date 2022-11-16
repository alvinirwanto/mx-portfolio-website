import React from 'react'
import Image from 'next/image'

const Services = () => {
    return (
        <div className='w-full -mt-[6rem] max-w-[1100px] mx-auto flex flex-col items-center gap-[4rem] md:flex-row md:justify-between'>
            <div className='home__items-service'>
                <Image src='/icon-lms.svg' alt='logo-erp' className='h-[4rem] w-[4rem] py-2' width={70} height={70} />
                <p className='text-center font-semibold'>Learning Management System</p>
            </div>

            <div className='home__items-service'>
                <Image src='/icon-erp.svg' alt='logo-erp' className='h-[4rem] w-[4rem] py-2' width={70} height={70} />
                <p className='text-center font-semibold'>ERP</p>
            </div>

            <div className='home__items-service'>
                <Image src='/icon-services.svg' alt='logo-erp' className='h-[4rem] w-[4rem] py-2' width={70} height={70} />
                <p className='text-center font-semibold'>Managed Services</p>
            </div>

            <div className='home__items-service'>
                <Image src='/icon-infra.svg' alt='logo-erp' className='h-[4rem] w-[4rem] py-2' width={70} height={70} />
                <p className='text-center font-semibold'>Infrastructure</p>
            </div>
        </div>
    )
}

export default Services