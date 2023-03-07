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
                    <div className={s.preloader__icon}>
                        <div className={s.preloader__icon_stair_1}></div>
                        <div className={s.preloader__icon_stair_2}></div>
                        <div className={s.preloader__icon_stair_3}></div>
                        <div className={s.preloader__icon_stair_4}></div>
                        <div className={s.preloader__icon_stair_5}></div>
                        <div className={s.preloader__icon_dot}></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Preloader;