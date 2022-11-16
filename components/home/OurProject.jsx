import React from 'react'
import Image from 'next/image'

const OurProject = () => {
    return (
        <div className='w-full py-[10rem] max-w-[1100px] mx-auto px-6'>
            <h2 className='text-[color:var(--orange-color)] text-xl font-semibold'>Our Project</h2>
            <h2 className='text-4xl font-bold max-w-[500px] pt-4'>Broad Knowledge Base Deep Insights</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 mt-[5rem] gap-[5rem]'>
                <div className='flex flex-col gap-4 mx-auto items-center justify-center px-9 shadow-lg rounded-xl 
                h-full w-full py-[3rem] md:h-[25rem] md:w-[25rem]'>
                    <Image src='/icon-lms.svg' className='py-4 h-[7rem] w-[7rem]' width={500} height={500} />
                    <h2 className='text-lg font-semibold text-center'>Learning Management System</h2>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, provident optio numquam quos nostrum adipisci veritatis consequuntur fugiat minima dicta!</p>
                </div>

                <div className='flex flex-col gap-4 mx-auto items-center justify-center px-9 shadow-lg rounded-xl h-full w-full py-[3rem] md:h-[25rem] md:w-[25rem]'>
                    <Image src='/icon-erp.svg' className='py-2 h-[7rem] w-[7rem]' width={500} height={500} />
                    <h2 className='text-lg font-semibold text-center'>ERP</h2>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, provident optio numquam quos nostrum adipisci veritatis consequuntur fugiat minima dicta!</p>
                </div>

                <div className='flex flex-col gap-4 mx-auto items-center justify-center px-9 shadow-lg rounded-xl h-full w-full py-[3rem] md:h-[25rem] md:w-[25rem]'>
                    <Image src='/icon-services.svg' className='py-2 h-[7rem] w-[7rem]' width={500} height={500} />
                    <h2 className='text-lg font-semibold text-center'>Managed Services</h2>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, provident optio numquam quos nostrum adipisci veritatis consequuntur fugiat minima dicta!</p>
                </div>

                <div className='flex flex-col gap-4 mx-auto items-center justify-center px-9 shadow-lg rounded-xl h-full w-full py-[3rem] md:h-[25rem] md:w-[25rem]'>
                    <Image src='/icon-infra.svg' className='py-2 h-[7rem] w-[7rem]' width={500} height={500} />
                    <h2 className='text-lg font-semibold text-center'>Infrastructure</h2>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, provident optio numquam quos nostrum adipisci veritatis consequuntur fugiat minima dicta!</p>
                </div>

            </div>
        </div>
    )
}

export default OurProject