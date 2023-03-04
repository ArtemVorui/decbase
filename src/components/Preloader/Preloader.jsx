import s from './Preloader.module.scss';

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <div className={s.preloader__inner}>
                <div className={s.preloader__icon}></div>
            </div>
        </div>
    );
};

export default Preloader;