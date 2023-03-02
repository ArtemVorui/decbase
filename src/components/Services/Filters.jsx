import s from './Filters.module.scss';
import {Col} from 'react-bootstrap';

const Filters = () => {
    return (
        <>
            <Col className={`col-xl-2 col-lg-3 col-md-4 m-1`}>
                <button className={s.filter}>ALL</button>
            </Col>
            <Col className={`col-xl-2 col-lg-3 col-md-4 m-1`}>
                <button className={s.filter}>INTERIOR DESIGN</button>
            </Col>
            <Col className={`col-xl-2 col-lg-3 col-md-4 m-1`}>
                <button className={s.filter}>ARCHITECTURE</button>
            </Col>
            <Col className={`col-xl-2 col-lg-3 col-md-4 m-1`}>
                <button className={s.filter}>PLANNING</button>
            </Col>
        </>
    )
}

export default Filters;

