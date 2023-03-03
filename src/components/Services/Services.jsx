import s from './Services.module.scss';
import {Container, Row, Col} from 'react-bootstrap';
import Filters from './Filters';
import Cards from './Cards';

const Services = () => {
    return (
        <div id='services' className={s.container}>
            <Container className={s.services}>
                <Row>
                    <Col>
                        <h3 className={s.services__subtitle}>WHAT WE DO</h3>
                        <h2 className={`mb-xxl-4 mb-xl-4 mb-lg-4 mb-2 ${s.services__title}`}>Our Service</h2>
                    </Col>
                </Row>
                <Row className={`mb-xxl-5 mb-xl-5 mb-lg-5 mb-3`}>
                    <Filters/>
                </Row>
                <Row className={`justify-content-between justify-content-lg-around`}>
                    <Cards/>
                </Row>
            </Container>
        </div>
    )
}

export default Services;