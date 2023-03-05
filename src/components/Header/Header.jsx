import s from './Header.module.scss';
import {Container, Row, Col} from 'react-bootstrap';
import imgSrc from '../../assets/images/h-1.jpg';
import Navibar from './Navbar';
import Progress from './Progress';

const Header = () => {
    return (
        <div id='project' className={s.container}>
            <Navibar/>
            <Progress/>
            <Container className={s.header}>
                <Row>
                    <Col className={`col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center`}>
                        <h3 className={s.header__subtitle}>MODERN INTERIOR</h3>
                        <h1 className={`mb-xxl-5 mb-xl-4 mb-lg-3 mb-md-2 mb-sm-1 mb-1 ${s.header__title}`}>
                            Create Your Interior Design.
                        </h1>
                        <p className={`mb-xxl-5 mb-xl-4 mb-lg-3 mb-md-2 mb-sm-1 mb-1 ${s.header__text}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                        <button className={s.header__btn}>CONTACT</button>
                    </Col>
                    <Col className='col-md-6 col-sm-12 col-12 mt-sm-4 mt-3'>
                        <div className={s.header__img_block}>
                            <img src={imgSrc} alt='interior'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;