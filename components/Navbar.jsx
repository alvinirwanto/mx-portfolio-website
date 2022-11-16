import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    // Add shadow to the navbar when scroll
    const [shadowNav, setShadowNav] = useState(false)

    const addShadowNav = () => {
        window.scrollY >= 60 ? setShadowNav(true) : setShadowNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', addShadowNav)
        return () => window.removeEventListener('scroll', addShadowNav);
    })

    return (
        <div className={shadowNav ? 'shadow-md hidden md:block fixed top-0 w-full bg-white z-[999] duration-300' : 'hidden md:block fixed top-0 w-full bg-transparent z-[999] duration-300'} >
            <div className='md:max-w-[700px] xl:max-w-[1300px] mx-auto flex justify-between items-center py-6'>
                <div>
                    <Image src='/favicon.ico' alt='logo' height={40} width={40} />
                </div>

                <div className={shadowNav ? 'flex items-center gap-9 text-black font-medium' : 'flex items-center gap-9 text-white font-medium'}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact-us" className={
                        shadowNav
                            ? 'bg-[color:var(--blue-color)] text-white hover:bg-gray-100 hover:text-[color:var(--blue-color)] rounded-md duration-300 px-5 py-2'
                            : 'bg-white text-[color:var(--blue-color)] hover:bg-[color:var(--blue-color)] hover:text-white rounded-md duration-300 px-5 py-2'}>Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar