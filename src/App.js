import './App.css';
import HomeSection from './sections/home/Home';

function App() {
  return (
    <main className='flex flex-col'>
      <HomeSection />

      {/* tres columnas */}
      <div className='flex-row flex mb-4'>
        <p className='bg-blue-100 flex-auto'>Columna</p>
        <p className='bg-blue-200 flex-auto'>Columna</p>
        <p className='bg-blue-300 flex-auto'>Columna</p>
      </div>

      {/* dos */}
      <div className='flex-row flex'>
        <p className='bg-red-100 flex-auto'>Columna A</p>
        <p className='bg-red-200 flex-auto'>Columna B</p>
      </div>
    </main>
  );
}

export default App;
