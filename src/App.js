import './App.scss';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import About from './components/About/About';
import Statistics from './components/Statistics/Statistics';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
      <>
        <Header/>
        <Services/>
        <About/>
        <Statistics/>
        <Testimonials/>
      </>
  );
}

export default App;
