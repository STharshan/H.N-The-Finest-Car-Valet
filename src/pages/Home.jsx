import React from 'react'
import GlobalCTA from '../components/Banner'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import ServiceSection from '../components/ServiceSection'
import Gallery from '../components/GallerySection'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <About />
            <ServiceSection />
            <Gallery />
            <GlobalCTA />
        </div>
    )
}

export default Home
