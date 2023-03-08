import s from './Contact.module.scss';
import {Container, Row, Col} from 'react-bootstrap';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const Contact = () => {

    const initialValues = {
        name: '',
        surName: '',
        email: ''
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .matches(/^[A-Z][a-z]+$/, {message: <span>* Invalid name format</span>})
            .required(<span>* Name is required</span>),
        surName: Yup.string()
            .matches(/^[A-Z][a-z]+$/, {message: <span>* Invalid surname format</span>})
            .required(<span>* Surname is required</span>),
        email: Yup.string()
            .matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, {message: <span>Invalid email format</span>})
            .required(<span>* Email is required</span>),
    });

    const onSubmit = (values) => {
        localStorage.setItem('formData', JSON.stringify(values));
    };

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
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            {({isValid, dirty}) => (
                                <Form className={`d-flex flex-column ${s.contact__form}`} action=''>
                                    <Row>
                                        <Col className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 mb-3'>
                                            <Field type='text' name='name' placeholder='Enter your name.....'
                                                   required/>
                                            <ErrorMessage name='name'/>
                                        </Col>
                                        <Col className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 mb-3'>
                                            <Field type='text' name='surName' placeholder='Enter your surname.....'
                                                   required/>
                                            <ErrorMessage name='surName'/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='col-12 mb-xxl-5 mb-xl-5 mb-lg-5 mb-md-5 mb-sm-3 mb-3'>
                                            <Field type='email' name='email' placeholder='Enter your e-mail.....'
                                                   required/>
                                            <ErrorMessage name='email'/>
                                        </Col>
                                    </Row>
                                    <button type='submit' className={`align-self-center ${s.contact__btn}`}
                                            disabled={!isValid || !dirty}>
                                        SUBSCRIBE
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;