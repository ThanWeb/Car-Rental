import type { ReactElement } from 'react'
import Header from '../components/Header'
import Overview from '../components/Overview'
import OurServices from '../components/OurServices'
import WhyUs from '../components/WhyUs'
import Testimonial from '../components/Testimonial'
import StartRent from '../components/StartRent'
import FrequentlyAskQuestions from '../components/FrequentlyAskQuestions'
import Footer from '../components/Footer'

const LandingPage = (): ReactElement => {
    return (
        <div>
            <Header />
            <main>
                <Overview />
                <OurServices />
                <WhyUs />
                <Testimonial />
                <StartRent />
                <FrequentlyAskQuestions />
            </main>
            <Footer />
        </div>
    )
}

export default LandingPage
