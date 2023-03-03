import s from './Testimonials.module.scss';
import {Container, Row, Col} from 'react-bootstrap';
import imgSrc1 from '../../assets/images/ava1.jpg';
import imgSrc2 from '../../assets/images/ava2.jpg';

const Testimonials = () => {
    return (
        <div className={s.container}>
            <Container className={s.testimonials}>
                <Row className='pt-5'>
                    <Col className='text-center'>
                        <h3 className={s.testimonials__subtitle}>TESTIMONIALS</h3>
                        <h2 className={s.testimonials__title}>Client says about us</h2>
                    </Col>
                </Row>
                <Row className='mb-xxl-5 mb-xl-5 mb-lg-5 mb-3 justify-content-end'>
                    <Col className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2'>
                        <button
                            className={`d-flex justify-content-center align-items-center ${s.testimonials__btn} ${s.previous}`}>
                        </button>
                    </Col>
                    <Col className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2'>
                        <button
                            className={`d-flex justify-content-center align-items-center ${s.testimonials__btn} ${s.next}`}>
                        </button>
                    </Col>
                </Row>
                <Row className='justify-content-lg-around'>
                    <Col className={`me-xxl-5 me-xl-5 me-lg-5 mx-md-5 mb-3 ${s.testimonials__card}`}>
                        <div className={s.testimonials__card_avatar_block}>
                            <img src={imgSrc1} alt='avatar'/>
                        </div>
                        <h3 className={s.testimonials__card_name}>
                            Louis Saville
                            <span className={s.testimonials__card_position}> /CEO at Google inc</span>
                        </h3>
                        <p className={s.testimonials__card_text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                    </Col>
                    <Col className={`ms-xxl-5 ms-xl-5 ms-lg-5 mx-md-5 mb-3 ${s.testimonials__card}`}>
                        <div className={s.testimonials__card_avatar_block}>
                            <img src={imgSrc2} alt='avatar'/>
                        </div>
                        <h3 className={s.testimonials__card_name}>
                            Rekha Varadwaz
                            <span className={s.testimonials__card_position}> /Manager at Nike inc</span>
                        </h3>
                        <p className={s.testimonials__card_text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials;