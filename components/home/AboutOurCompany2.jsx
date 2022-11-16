import React from 'react'
import Image from 'next/image'

const AboutOurCompany2 = () => {
    return (
        <div className='w-full h-screen  grid grid-cols-1 md:grid-cols-2 my-[10rem]'>
            <div className='order-2 md:order-1 bg-white w-full h-full max-w-[600px] px-6 py-6 mx-auto flex flex-col items-center gap-[7rem] justify-center'>
                <div className='max-w-[400px] flex flex-col gap-4'>
                    <h2 className='text-2xl text-black font-bold'>Saving time in managing your business with our best services</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sit quae consequuntur omnis magnam magni.</p>
                </div>
            </div>
            <Image src='/dummy.png' className='order-1 md:order-2 object-cover object-right-top w-full h-full' width={1000} height={1000} />
        </div>
    )
}

export default AboutOurCompany2