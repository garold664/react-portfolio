import './App.scss';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
