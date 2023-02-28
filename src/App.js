import './App.css';
import HomeSection from './sections/home/Home';
import ServicesSection from './sections/services/ServicesSection';
import WorkSection from './sections/work/WorkSection';

function App() {
  return (
    <main className='flex flex-col'>
      <HomeSection />

      <ServicesSection />

      <WorkSection />
    </main>

  );
}

export default App;
