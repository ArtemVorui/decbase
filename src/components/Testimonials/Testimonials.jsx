import s from './Testimonials.module.scss';
import {Container, Row, Col} from 'react-bootstrap';
import d from './TestimonialsData.json';
import {useState} from 'react';

const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const onNextClick = () => {
        setCurrentIndex((currentIndex + 2) % d.length);
    };

    const onPrevClick = () => {
        setCurrentIndex(currentIndex === 0 ? d.length - 2 : currentIndex - 2);
    };

    return (
        <div className={s.container}>
            <Container className={s.testimonials}>
                <Row>
                    <Col className='text-center'>
                        <h3 className={s.testimonials__subtitle}>TESTIMONIALS</h3>
                        <h2 className={s.testimonials__title}>Client says about us</h2>
                    </Col>
                </Row>
                <Row className='mb-xxl-5 mb-xl-5 mb-lg-5 mb-3 justify-content-end'>
                    <Col className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2'>
                        <button
                            className={`d-flex justify-content-center align-items-center ${s.testimonials__btn} ${s.previous}`}
                            onClick={() => onPrevClick()}>
                        </button>
                    </Col>
                    <Col className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2'>
                        <button
                            className={`d-flex justify-content-center align-items-center ${s.testimonials__btn} ${s.next}`}
                            onClick={() => onNextClick()}>
                        </button>
                    </Col>
                </Row>
                <Row className='justify-content-around'>
                    {d.slice(currentIndex, currentIndex + 2).map(i => (
                        <Col key={i.id} className={`col-xxl-5 col-xl-5 col-lg-5 col-md-8 col-sm-12 col-12 mb-2`}>
                            <div className={s.testimonials__card}>
                                <div className={s.testimonials__card_avatar_block}>
                                    <img src={i.imgSrc} alt='avatar'/>
                                </div>
                                <h3 className={s.testimonials__card_name}>
                                    {i.name}
                                    <span className={s.testimonials__card_position}>{i.position}</span>
                                </h3>
                                <p className={s.testimonials__card_text}>{i.text}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials;