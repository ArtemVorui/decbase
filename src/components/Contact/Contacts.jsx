import s from './Contact.module.scss';
import {Container, Row, Col} from 'react-bootstrap';

const Contact = () => {
    return (
        <div id='contact' className={s.container}>
            <Container className={s.contact}>
                <Row className='justify-content-center text-center'>
                    <Col className='col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12'>
                        <h2 className={s.contact__title}>DON’T FORGET TO SIGN UP</h2>
                        <hr className={`mb-xxl-5 mb-xl-5 mb-lg-5 mb-3 ${s.contact__hr}`}/>
                        <p className={`mb-xxl-4 mb-xl-4 mb-lg-4 mb-2 ${s.contact__text}`}>
                            Find out early about all upcoming promotions and new product releases with our newsletter.
                        </p>

                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12'>
                        <form className={`d-flex flex-column ${s.contact__form}`} action=''>
                            <Row>
                                <Col className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 mb-3'>
                                    <input type='text' placeholder='Enter your name.....'/>
                                </Col>
                                <Col className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 mb-3'>
                                    <input type='text' placeholder='Enter your surname.....'/>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='col-12 mb-xxl-5 mb-xl-5 mb-lg-5 mb-md-5 mb-sm-3 mb-3'>
                                    <input type='email' placeholder='Enter your e-mail.....'/>
                                </Col>
                            </Row>
                            <button className={`align-self-center ${s.contact__btn}`}>SUBSCRIBE</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;