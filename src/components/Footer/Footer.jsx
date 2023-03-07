import s from './Footer.module.scss';
import {Container, Row, Col} from 'react-bootstrap';
import iconSrc1 from '../../assets/icons/logo.svg';
import iconSrc2 from '../../assets/icons/facebook.svg';
import iconSrc3 from '../../assets/icons/twitter.svg';
import iconSrc4 from '../../assets/icons/instagram.svg';
import iconSrc5 from '../../assets/icons/linkedin.svg';
import {useEffect, useState} from 'react';

const Footer = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={s.container}>
            <Container className={s.footer}>
                <Row className='mb-5'>
                    <Col className='col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3'>
                        <div className={s.footer__logo_block}><img src={iconSrc1} alt='logo'/></div>
                        <p className={s.footer__text}>
                            But i must explain to you all this mistaken idea of dencouncing pleasure.
                        </p>
                    </Col>
                    <Col className='col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12 mb-3'>
                        <h3 className={s.footer__title}>Quick Links</h3>
                        <a className={s.footer__link} href='#'>About Our Company</a>
                        <a className={s.footer__link} href='#'>Services WE provide</a>
                        <a className={s.footer__link} href='#'>Career & Opportunity</a>
                        <a className={s.footer__link} href='#'>Privacy & policy</a>
                        <a className={s.footer__link} href='#'>Contact US</a>
                    </Col>
                    <Col className='col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12 mb-3'>
                        <h3 className={s.footer__title}>Company</h3>
                        <a className={s.footer__link} href='#'>About Company</a>
                        <a className={s.footer__link} href='#'>Our Testimonials</a>
                        <a className={s.footer__link} href='#'>Latest News</a>
                        <a className={s.footer__link} href='#'>Our misson</a>
                        <a className={s.footer__link} href='#'>Get a free Quot</a>
                    </Col>
                    <Col className='col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12 mb-3'>
                        <h3 className={s.footer__title}>Contact us</h3>
                        <p className={s.footer__text}>Sagrada Familia, Herba</p>
                        <p className={s.footer__text}>Street Front USA</p>
                        <a className={s.footer__link} href='mailto:brandoxide@gmail.com'>brandoxide@gmail.com</a>
                        <a className={s.footer__link} href='tel:+002568423591'>002-568423591</a>
                    </Col>
                    <Col className='col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3'>
                        <h3 className={s.footer__title}>Follow Us</h3>
                        <Row>
                            <Col className='p-0 col-md-2 col-sm-1 col-1 ms-2'>
                                <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                                    <div className={s.footer__social_icon_block}>
                                        <img src={iconSrc2} alt='facebook'/>
                                    </div>
                                </a>
                            </Col>
                            <Col className='p-0 col-md-2 col-sm-1 col-1'>
                                <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
                                    <div className={s.footer__social_icon_block}>
                                        <img src={iconSrc3} alt='twitter'/>
                                    </div>
                                </a>
                            </Col>
                            <Col className='p-0 col-md-2 col-sm-1 col-1'>
                                <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                                    <div className={s.footer__social_icon_block}>
                                        <img src={iconSrc4} alt='instagram'/>
                                    </div>
                                </a>
                            </Col>
                            <Col className='p-0 col-md-2 col-sm-1 col-1'>
                                <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
                                    <div className={s.footer__social_icon_block}>

                                        <img src={iconSrc5} alt='linkedin'/>
                                    </div>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <hr className={s.footer__hr}/>
            <p className={s.footer__copyright}>Copyright @ {date.toLocaleString()} Brandoxide.all right reserved.</p>
        </div>
    )
}

export default Footer;