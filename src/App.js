import './App.css';
// import Box from './sections/services/box';
// import Container from './components/container/Container';
import HomeSection from './sections/home/Home';
import ServicesSection from './sections/services/ServicesSection';
// import WorkSection from './sections/work/WorkSection';
import AboutSection from './sections/about/AboutSection';

function App() {
  return (
    <main className='flex flex-col'>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
    </main>
    

export default App;
