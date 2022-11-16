import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

import Head from 'next/head'

const Layout = ({ children, pageTitle }) => {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name='keywords' content='next react seo' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className='overflow-x-hidden'>
                {children}
            </main>

            <Footer>
                <Footer />
            </Footer>
        </>
    )
}

export default Layout