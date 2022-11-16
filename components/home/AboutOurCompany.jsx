import React from 'react'
import Image from 'next/image'

import { IoIosArrowForward } from 'react-icons/io'

const AboutOurCompany = () => {
    return (
        <div className='w-full h-full md:h-screen grid grid-cols-1 md:grid-cols-2 my-[10rem]'>
            <Image src='/dummy.png' className='object-cover object-left-top w-full h-full' width={1000} height={1000} />

            <div className='bg-white w-full h-full max-w-[600px] py-8 px-6 md:mx-auto flex flex-col gap-[7rem] justify-center'>
                <div className='max-w-[400px] flex flex-col gap-4'>
                    <h2 className='text-xl text-[color:var(--orange-color)] font-semibold'>About Our Company</h2>
                    <h2 className='text-2xl text-black font-bold'>Best IT-Solutions Company in Indonesia</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sit quae consequuntur omnis magnam magni.</p>

                    <button className='group hover:opacity-80 flex justify-start items-center mt-4 gap-2 text-base text-[color:var(--blue-color)]'>
                        More Info
                        <div className='group-hover:ml-3 duration-300 flex items-center justify-center border-2 border-[color:var(--blue-color)] rounded-full p-1 '>
                            <IoIosArrowForward className='text-[color:var(--orange-color)]' />
                        </div>
                    </button>
                </div>

                <div className='flex flex-col gap-9'>
                    <div className="flex gap-6">
                        <Image src='/icon-infra.svg' width={100} height={100} />
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-[color:var(--orange-color)] font-semibold text-lg'>Our Company History</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit, labore aperiam corporis dolorum totam.</p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <Image src='/icon-infra.svg' width={100} height={100} />
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-[color:var(--orange-color)] font-semibold text-lg'>Our Company History</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit, labore aperiam corporis dolorum totam.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutOurCompany