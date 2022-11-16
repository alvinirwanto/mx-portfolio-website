import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#18191B] w-full text-white'>
            <div className='max-w-[1300px] mx-auto py-[5rem]'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr] gap-9'>
                    <div>
                        <h3 className='text-xl font-semibold'>
                            Logo Tektik
                        </h3>
                        <p className='mt-9 text-sm font-light'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, officiis dignissimos. Totam assumenda facilis laudantium?
                        </p>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold'>
                            Quick Links
                        </h3>

                        <div className='flex flex-col gap-3 mt-9'>
                            <Link href='/' className='text-sm font-light'>
                                About Our Company
                            </Link>
                            <Link href='/' className='text-sm font-light'>
                                Our Products
                            </Link>
                            <Link href='/' className='text-sm font-light'>
                                Customer Services
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='text-xl font-semibold'>
                            Address
                        </h3>
                        <p className='mt-9 text-sm font-light'>
                            Tedja Buana Building, 2nd Fl. Menteng Raya No 29, Kebon sirih Central Jakarta
                        </p><br />

                        <p className='text-sm font-light'>
                            +6221 8066 9656 <br />
                            +62 811 1163 777
                        </p><br />

                        <p className='text-sm font-light'>
                            hello@sobatmx.com
                        </p>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold'>
                            Media Socials
                        </h3>
                        <div className='mt-9 flex flex-col gap-4'>
                            <Link href='/' className='text-sm font-light'>
                                Linkedin
                            </Link>
                            <Link href='/' className='text-sm font-light'>
                                Instagram
                            </Link>
                            <Link href='/' className='text-sm font-light'>
                                Facebook
                            </Link>
                            <Link href='/' className='text-sm font-light'>
                                Tiktok
                            </Link>
                        </div>
                    </div>


                </div>

                <div>
                    <hr className='w-full bg-white mt-[5rem]' />
                    <div className='flex flex-col md:flex-row items-center justify-between mt-8'>
                        <p className='text-sm'>© 2021, MX Global - PT.Max Solution Indonesia, Inc. All Right Reserved.</p>
                        <div className='flex gap-4 text-sm items-center justify-center'>
                            <Link href='/'>
                                About
                            </Link>
                            <Link href='/'>
                                Product
                            </Link>
                            <Link href='/'>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer