import s from './Progress.module.scss';
import {useState, useEffect} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Progress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;
            const scrolled = scrollTop / (fullHeight - windowHeight) * 100;
            setProgress(scrolled);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <>
            <ProgressBar className={s.progress} now={progress}/>
        </>
    );
}

export default Progress;