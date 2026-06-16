import GlobalCTA from '../components/Banner'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import ServiceSection from '../components/ServiceSection'
import Gallery from '../components/GallerySection'
import TestimonialsSection from '../components/Review'
import Findus from '../components/Findus'
import Contact from '../components/ContactSection'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <About />
            <ServiceSection />
            <Gallery />
            <TestimonialsSection />
            <Findus />
            <Contact />
            <GlobalCTA />
        </div>
    )
}

export default Home
