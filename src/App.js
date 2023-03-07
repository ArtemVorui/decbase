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

    const [timer, setTimer] = useState(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (window.confirm('Are you still here? Click OK if you want to continue browsing the website.')) {
                setTimer(null);
            } else {
                window.close();
            }
        }, 65000);

        setTimer(timeoutId);

        return () => clearTimeout(timeoutId);
    }, []);

    function handleUserActivity() {
        if (timer) {
            clearTimeout(timer);
        }

        const timeoutId = setTimeout(() => {
            if (window.confirm('Are you still here? Click OK if you want to continue browsing the website.')) {
                setTimer(null);
            } else {
                window.close();
            }
        }, 60000);

        setTimer(timeoutId);
    }

    return (
        <>
            <Preloader/>
            <div onMouseMove={handleUserActivity} onClick={handleUserActivity}>
                <Header/>
                <Services/>
                <About/>
                <Statistics/>
                <Testimonials/>
                <Blog/>
                <Contact/>
                <Footer/>
            </div>
        </>
    );
}

export default App;
