import s from './Preloader.module.scss';
import {useEffect, useState} from 'react';

const Preloader = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && (
                <div className={s.preloader}>
                    <div className={s.preloader__icon}>Loading...</div>
                </div>
            )}
        </>
    );
};

export default Preloader;