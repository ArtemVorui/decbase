import s from './Header.module.scss';
import {Container, Row, Col} from 'react-bootstrap';
import imgSrc from '../../assets/images/h-1.jpg';
import Navibar from './Navbar';

const Header = () => {
    return (
        <div className={s.container}>
            <Navibar/>
            <Container id='project' className={s.header}>
                <Row>
                    <Col className={`d-flex flex-column justify-content-center`}>
                        <h2 className={s.header__subtitle}>MODERN INTERIOR</h2>
                        <h1 className={`mb-5 ${s.header__title}`}>Create Your Interior Design.</h1>
                        <p className={`mb-5 ${s.header__text}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                        <button className={s.header__btn}>CONTACT</button>
                    </Col>
                    <Col>
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