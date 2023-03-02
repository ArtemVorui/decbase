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
                        <h2 className={`mb-4 ${s.services__title}`}>Our Service</h2>
                    </Col>
                </Row>
                <Row className={`mb-5`}>
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