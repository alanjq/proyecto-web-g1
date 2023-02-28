import './App.css';
import AboutSection from './sections/about/AboutSection';
import HomeSection from './sections/home/Home';

function App() {
  return (
    <main className='flex flex-col'>
      <HomeSection />
      <AboutSection/>
    </main>
  );
}

export default App;
