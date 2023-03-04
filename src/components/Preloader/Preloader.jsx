import s from './Preloader.module.scss';

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <div className={s.preloader__icon}>Loading...</div>
        </div>
    );
};

export default Preloader;