import s from './Services.module.scss';
import {Container, Row, Col} from 'react-bootstrap';
import d from './CardsData.json';
import {useState} from 'react';

const Services = () => {

    const filterAll = () => {
        const firstItems = {};
        [...d].forEach(i => {
            if (!firstItems[i.category]) {
                firstItems[i.category] = i;
            }
        })
        return Object.values(firstItems);
    }

    const [filtered, setFiltered] = useState(filterAll);

    const servicesFilter = (category) => {
        if (category === 'all') {
            setFiltered(filterAll);
        } else {
            let arr = [...d].filter(i => i.category === category);
            setFiltered(arr);
        }
    }

    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterClick = (category) => {
        setActiveFilter(category);
    }

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
                    <Col className={`col-xl-2 col-lg-3 col-md-4 col-sm-8 col-8 m-1`}
                         onClick={() => servicesFilter('all')}>
                        <button
                            className={activeFilter === 'all' ? `${s.services__filter} ${s.active}` : `${s.services__filter}`}
                            onClick={() => handleFilterClick('all')}>
                            ALL
                        </button>
                    </Col>
                    <Col className={`col-xl-2 col-lg-3 col-md-4 col-sm-8 col-8 m-1`}
                         onClick={() => servicesFilter('interior')}>
                        <button
                            className={activeFilter === 'interior' ? `${s.services__filter} ${s.active}` : `${s.services__filter}`}
                            onClick={() => handleFilterClick('interior')}>
                            INTERIOR DESIGN
                        </button>
                    </Col>
                    <Col className={`col-xl-2 col-lg-3 col-md-4 col-sm-8 col-8 m-1`}
                         onClick={() => servicesFilter('architecture')}>
                        <button
                            className={activeFilter === 'architecture' ? `${s.services__filter} ${s.active}` : `${s.services__filter}`}
                            onClick={() => handleFilterClick('architecture')}>
                            ARCHITECTURE
                        </button>
                    </Col>
                    <Col className={`col-xl-2 col-lg-3 col-md-4 col-sm-8 col-8 m-1`}
                         onClick={() => servicesFilter('planning')}>
                        <button
                            className={activeFilter === 'planning' ? `${s.services__filter} ${s.active}` : `${s.services__filter}`}
                            onClick={() => handleFilterClick('planning')}>
                            PLANNING
                        </button>
                    </Col>
                </Row>
                <Row className={`justify-content-between justify-content-lg-around`}>
                    {filtered.map(i => (
                        <Col key={i.id} className={`col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-sm-12 col-12 mb-1`}>
                            <div
                                className={i.category === 'architecture' ? `${s.services__card} ${s.architecture}` : `${s.services__card}`}>
                                <div className={s.services__card_img_block}>
                                    <img src={i.imgSrc} alt={i.category}/>
                                </div>
                                <h4 className={s.services__card_title}>{i.title}</h4>
                                <p className={s.services__card_text}>{i.text}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Services;