import s from './Cards.module.scss';
import {Col} from 'react-bootstrap';

const Card = () => {
    return (
        <>
            <Col className={`col-xxl-4 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-11 m-1 ${s.card} ${s.interior}`}>
                <h4 className={s.card__title}>Interior Design 1</h4>
                <p className={s.card__text}>
                    Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.
                </p>
            </Col>
            <Col className={`col-xxl-4 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-11 m-1 ${s.card} ${s.architecture}`}>
                <h4 className={s.card__title}>Architecture 1</h4>
                <p className={s.card__text}>
                    Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.
                </p>
            </Col>
            <Col className={`col-xxl-4 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-11 m-1 ${s.card} ${s.planning}`}>
                <h4 className={s.card__title}>Planning 1</h4>
                <p className={s.card__text}>
                    Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.
                </p>
            </Col>
        </>
    )
}

export default Card;