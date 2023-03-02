import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import AboutSection from './sections/about/AboutSection';
import ContactSection from './sections/contact/ContactSection';
import HomeSection from './sections/home/Home';
import ServicesSection from './sections/services/ServicesSection';
import WorkSection from './sections/work/WorkSection';
import TestimonialsSection from './sections/testimonials/TestimonialsSection';

function App() {
  return (
    <>
      <Navbar />

      <main className='flex flex-col'>
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <ContactSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
