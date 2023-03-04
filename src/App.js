import './App.scss';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import About from './components/About/About';
import Statistics from './components/Statistics/Statistics';
import Testimonials from './components/Testimonials/Testimonials';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contacts';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import {useEffect, useState} from 'react';

function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Preloader/>
            ) : (
                <>
                    <Header/>
                    <Services/>
                    <About/>
                    <Statistics/>
                    <Testimonials/>
                    <Blog/>
                    <Contact/>
                    <Footer/>
                </>
            )}
        </>
    );
}

export default App;
