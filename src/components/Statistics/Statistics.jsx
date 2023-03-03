import s from './Statistics.module.scss';
import {Container, Row, Col} from 'react-bootstrap';
import iconSrc from '../../assets/icons/curve.svg';

const Statistics = () => {
    return (
        <div className={s.container}>
            <Container className={s.statistics}>
                <Row className='py-5 justify-content-center'>
                    <Col className='col-8 text-center'>
                        <h2 className={s.statistics__title}>3000+ Completed Work Which WE have Successfully Done</h2>
                    </Col>
                </Row>
                <Row className={`justify-content-between ${s.statistics__row}`}>
                    <Col className={`align-self-start text-center ${s.statistics__card} ${s.statistics__card_first}`}>
                        <p className={s.statistics__card_value}>980</p>
                        <p className={s.statistics__card_name}>Project</p>
                    </Col>
                    <Col className='p-0 align-self-center'>
                        <img src={iconSrc} alt='curve-line'/>
                    </Col>
                    <Col className={`align-self-end text-center ${s.statistics__card} ${s.statistics__card_second}`}>
                        <p className={s.statistics__card_value}>520</p>
                        <p className={s.statistics__card_name}>Happy Client</p>
                    </Col>
                    <Col className={`p-0 align-self-center ${s.statistics__curve_rotate}`}>
                        <img src={iconSrc} alt='curve-line'/>
                    </Col>
                    <Col className={`align-self-start text-center ${s.statistics__card} ${s.statistics__card_third}`}>
                        <p className={s.statistics__card_value}>330</p>
                        <p className={s.statistics__card_name}>Winners</p>
                    </Col>
                    <Col className='p-0 align-self-center'>
                        <img src={iconSrc} alt='curve-line'/>
                    </Col>
                    <Col className={`align-self-end text-center ${s.statistics__card}`}>
                        <p className={s.statistics__card_value}>120</p>
                        <p className={s.statistics__card_name}>Recoment</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Statistics;