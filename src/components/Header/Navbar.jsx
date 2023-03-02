import s from './Navbar.module.scss';
import {Container, Navbar, Nav} from 'react-bootstrap';
import logoSrc from '../../assets/icons/logo.svg';

const Navibar = () => {
    return (
        <Navbar id='home' className={`mt-5 mb-5 ${s.navibar}`} collapseOnSelect expand='lg'>
            <Container>
                <Navbar.Brand href='/'>
                    <img src={logoSrc} alt='decbase-logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
                    <Nav>
                        <Nav.Link className={`px-3 ${s.navibar__link}`} href='#home'>HOME</Nav.Link>
                        <Nav.Link className={`px-3 ${s.navibar__link}`} href='#project'>PROJECT</Nav.Link>
                        <Nav.Link className={`px-3 ${s.navibar__link}`} href='#services'>SERVICES</Nav.Link>
                        <Nav.Link className={`px-3 ${s.navibar__link}`} href='#about'>ABOUT</Nav.Link>
                        <Nav.Link className={`px-3 ${s.navibar__link}`} href='#blog'>BLOG</Nav.Link>
                        <Nav.Link className={`px-3 ${s.navibar__link}`} href='#shop'>SHOP</Nav.Link>
                        <Nav.Link className={`px-3 ${s.navibar__link}`} href='#contact'>CONTACT</Nav.Link>
                    </Nav>
                    <button className={`ms-xl-5 ms-lg-2 ${s.navibar__btn}`}>Sign up</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navibar;