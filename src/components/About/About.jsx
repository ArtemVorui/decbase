import s from './About.module.scss';
import imgSrc1 from '../../assets/images/a-1.jpg';
import imgSrc2 from '../../assets/images/a-2.jpg';
import imgSrc3 from '../../assets/images/twenty.png';
import {Container, Row, Col} from 'react-bootstrap';

const About = () => {
    return (
        <div id='about' className={s.container}>
            <Container className={s.about}>
                <Row className={s.about__row}>
                    <Col>
                        <div className={`me-xxl-5 me-xl-4 me-lg-3 me-md-0 me-0 ms-4 ${s.about__img_top_block}`}>
                            <img src={imgSrc1} alt='interior1'/>
                        </div>
                    </Col>
                    <Col className={`d-flex flex-column col-md-6 col-sm-12 col-12`}>
                        <h3 className={`mb-xxl-5 mb-xl-4 mb-lg-3 mb-md-2 mb-sm-1 mb-1 ${s.about__subtitle}`}>ABOUT US</h3>
                        <h2 className={s.about__title}>Interioris The Will of An Epoch Mextreo</h2>
                        <p className={`mb-xxl-5 mb-xl-4 mb-lg-3 mb-md-2 mb-sm-1 mb-1 ${s.about__text}`}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form injected humour, or randomised words which don't look even
                            slightly believable.If you are going to use a passage of Lorem Ipsum, sure there isn't
                            anything embarrassing hidden the middleof text. All the Lorem Ipsum generators on the
                            Internettend to repeat predefined chunks as necessary,making this the first true generator
                            on the Internet.
                        </p>
                        <button className={s.about__btn}>LEARN MORE</button>
                    </Col>
                </Row>
                <Row>
                    <Col className={`d-flex flex-column justify-content-center col-md-6 col-sm-12 col-12`}>
                        <div className={`mb-xxl-4 mb-xl-4 mb-lg-3 mb-md-2 mb-sm-1 mb-1 ${s.about__img_twenty_block}`}>
                            <img src={imgSrc3} alt='twenty-years'/>
                        </div>
                        <h2 className={`mb-xxl-5 mb-xl-4 mb-lg-3 mb-md-2 mb-sm-1 mb-1 ${s.about__title}`}>
                            Years Of Successful Working The Market
                        </h2>
                        <button className={s.about__btn}>READ MORE</button>
                    </Col>
                    <Col>
                        <div className={`ms-xxl-5 ms-xl-4 ms-lg-3 ms-md-2 ms-sm-0 ms-0 mt-5 me-1 ${s.about__img_bot_block}`}>
                            <img src={imgSrc2} alt='interior2'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;