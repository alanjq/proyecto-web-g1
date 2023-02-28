import './App.css';
import AboutSection from './sections/about/AboutSection';
import HomeSection from './sections/home/Home';
import ServicesSection from './sections/services/ServicesSection';
import WorkSection from './sections/work/WorkSection';


function App() {
  return (
    <main className='flex flex-col'>
      <HomeSection />

      <AboutSection />

      <ServicesSection />

      <WorkSection />
    </main>

  );
}

export default App;
