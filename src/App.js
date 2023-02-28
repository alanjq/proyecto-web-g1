import './App.css';
import HomeSection from './sections/home/Home';
import ServicesSection from './sections/services/ServicesSection';

function App() {
  return (
    <main className='flex flex-col'>
      <HomeSection />

      <ServicesSection />

    </main>

  );
}

export default App;
