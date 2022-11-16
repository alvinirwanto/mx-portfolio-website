import Layout from '../components/Layout'

import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import AboutOurCompany from '../components/home/AboutOurCompany'
import AboutOurCompany2 from '../components/home/AboutOurCompany2'
import CompanyLogos from '../components/home/CompanyLogos'
import OurProject from '../components/home/OurProject'

export default function Home() {
    return (
        <Layout pageTitle='home'>
            <Hero />
            <Services />
            <AboutOurCompany />
            <AboutOurCompany2 />
            <CompanyLogos />
            <OurProject />
        </Layout>
    )
}
