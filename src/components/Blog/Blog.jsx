import s from './Blog.module.scss';
import {Container, Row, Col} from 'react-bootstrap';
import imgSrc1 from '../../assets/images/b-1.jpg';
import imgSrc2 from '../../assets/images/b-2.jpg';
import {useInView} from 'react-intersection-observer';

const Blog = () => {

    const {ref, inView} = useInView({
        threshold: 0.5
    });

    return (
        <div id='blog' className={s.container}>
            <Container className={s.blog}>
                <Row>
                    <Col className='text-center mb-xxl-5 mb-xl-5 mb-lg-5 mb-3'>
                        <h3 className={s.blog__subtitle}>LETEST NEWS</h3>
                        <h2 className={s.blog__title}>From Our Blog</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className='me-xxl-5 me-xl-5 me-lg-5 me-md-2 me-sm-1 me-1'>
                        <div className={inView ? `${s.blog__news} ${s.visible}` : `${s.blog__news}`} ref={ref}>
                            <div className={`mb-xxl-5 mb-xl-5 mb-lg-5 mb-md-3 mb-sm-3 mb-3 ${s.blog__news_img_block}`}>
                                <img src={imgSrc1} alt='interior'/>
                            </div>
                            <h4 className={s.blog__news_title}>2020 Interior Design Trends</h4>
                            <p className={`mb-xxl-5 mb-xl-5 mb-lg-5 mb-md-3 mb-sm-2 mb-2 ${s.blog__news_text}`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut
                                labore et dolore magna aliqua.
                            </p>
                            <button className={`mb-3 ${s.blog__news_btn}`}>CONTINUE READING....</button>
                        </div>
                    </Col>
                    <Col className='ms-xxl-5 ms-xl-5 ms-lg-5 ms-md-2 ms-sm-1 ms-1'>
                        <div className={inView ? `${s.blog__news} ${s.visible}` : `${s.blog__news}`} ref={ref}>
                            <div className={`mb-xxl-5 mb-xl-5 mb-lg-5 mb-md-3 mb-sm-3 mb-3 ${s.blog__news_img_block}`}>
                                <img src={imgSrc2} alt='interior'/>
                            </div>
                            <h4 className={s.blog__news_title}>28 Notable Product at ARC Interior Design</h4>
                            <p className={`mb-xxl-5 mb-xl-5 mb-lg-5 mb-md-3 mb-sm-2 mb-2 ${s.blog__news_text}`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut
                                labore et dolore magna aliqua.
                            </p>
                            <button className={`mb-3 ${s.blog__news_btn}`}>CONTINUE READING....</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Blog;