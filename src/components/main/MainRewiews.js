import '../../scss/custom.scss'
import { Col, Container, Figure, Row } from "react-bootstrap";
import { FilePerson, PersonCircle, Quote, ShieldFillCheck, StarFill, StarHalf } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

function MainRewiews() {
    return <section className={'mt-4p bg-light'}>
        <Container>
            <Row className={'g-4 g-lg-5 align-items-center'}>
                <Col xl={7} className={'order-2 order-xl-1'}>
                    <Row className={'mt-0 mt-xl-5'}>
                        <Col md={7} className={'position-relative mb-0 mt-0 mt-md-5'}>
                            <Figure className={'opacity-2 position-absolute top-0 start-0 translate-middle mb-3'}>
                                <svg width={'13.1875rem'} height={'13.1875rem'} fill={'#d6293e'}>
                                    <path d={'M210.030,105.011 C210.030,163.014 163.010,210.029 105.012,210.029 C47.013,210.029 -0.005,163.014 -0.005,105.011 C-0.005,47.015 47.013,-0.004 105.012,-0.004 C163.010,-0.004 210.030,47.015 210.030,105.011 Z'}></path>
                                </svg>
                            </Figure>
                            <div className={'bg-body shadow text-center p-4 rounded-3 position-relative mb-5 mb-md-0'}>
                                <div className={'mb-3'}>
                                    <PersonCircle className={'avatar avatar-xl text-info'} />
                                </div>
                                <blockquote className={'text-dark'}>
                                    <p>
                                        <span className={'me-1 small'}>
                                            <Quote />
                                        </span>
                                        Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing
                                        <span className={'ms-1 small'}>
                                            <Quote />
                                        </span>
                                    </p>
                                </blockquote>
                                <ul className={'list-inline mb-2'}>
                                    <li className={'list-inline-item me-0 small'}>
                                        <StarFill className={'text-warning'} />
                                    </li>
                                    <li className={'list-inline-item me-0 small'}>
                                        <StarFill className={'text-warning'} />
                                    </li>
                                    <li className={'list-inline-item me-0 small'}>
                                        <StarFill className={'text-warning'} />
                                    </li>
                                    <li className={'list-inline-item me-0 small'}>
                                        <StarFill className={'text-warning'} />
                                    </li>
                                    <li className={'list-inline-item me-0 small'}>
                                        <StarHalf className={'text-warning'} />
                                    </li>
                                </ul>
                                <h6 className={'mb-0'}>Carolyn Ortiz</h6>
                            </div>
                        </Col>
                        <Col md={5} className={'mt-5 mt-md-0 d-none d-md-block'}>
                            <div className={'bg-body shadow p-4 rounded-3 d-inline-block position-relative'}>
                                <div className={'icon-lg bg-warning rounded-circle position-absolute top-0 start-100 translate-middle'}>
                                    <ShieldFillCheck className={'text-dark fs-5'} />
                                </div>
                                <h6 className={'mb-3 text-dark'}>100+ Verified Mentors</h6>
                                <div className={'d-flex align-items-center mb-3'}>
                                    <div className={'avatar avatar-sm'}>
                                        <FilePerson className={'avatar-img text-danger'} />
                                    </div>
                                    <div className={'ms-2 text-dark'}>
                                        <h6 className={'mb-0'}>Lori Stevens</h6>
                                        <p className={'mb-0 small'}>Tutor of physic</p>
                                    </div>
                                </div>
                                <div className={'d-flex align-items-center mb-3'}>
                                    <div className={'avatar avatar-sm'}>
                                        <FilePerson className={'avatar-img text-orange'} />
                                    </div>
                                    <div className={'ms-2 text-dark'}>
                                        <h6 className={'mb-0'}>Billy Vasquez</h6>
                                        <p className={'mb-0 small'}>Tutor of chemistry</p>
                                    </div>
                                </div>
                                <div className={'d-flex align-items-center'}>
                                    <div className={'avatar avatar-sm'}>
                                        <FilePerson className={'avatar-img text-purple'} />
                                    </div>
                                    <div className={'ms-2 text-dark'}>
                                        <h6 className={'mb-0'}>Larry Lawson</h6>
                                        <p className={'mb-0 small'}>Tutor of technology</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className={'mt-5 mt-xl-0'}>
                        <Col className={'col-7 mt-0 mt-xl-5 text-end position-relative z-index-1 d-none d-md-block'}>
                            <Figure className={'position-absolute top-0 start-50 mt-n7 ms-6 ps-3 pt-2 d-none d-lg-block'}>
                                <svg enableBackground={'new 0 0 160.7 159.8'} height={'11.25rem'} fill={'#d6293e'}>
                                    <path d={'m153.2 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m116.4 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m134.8 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m135.1 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m153.5 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m98.3 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z'}></path>
                                    <ellipse cx={'116.7'} cy={'99.1'} rx={'2.1'} ry={'2.2'}></ellipse>
                                    <path d={'m153.2 149.8c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m135.1 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2 0-1.3 0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m153.5 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m80.2 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z'}></path>
                                    <path d={'m117 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m98.6 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m135.4 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m153.8 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m80.6 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z'}></path>
                                    <ellipse cx={'98.9'} cy={'63.9'} rx={'2.1'} ry={'2.2'}></ellipse>
                                    <path d={'m117.3 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z'}></path>
                                    <ellipse cx={'62.2'} cy={'63.9'} rx={'2.1'} ry={'2.2'}></ellipse>
                                    <ellipse cx={'154.1'} cy={'63.9'} rx={'2.1'} ry={'2.2'}></ellipse>
                                    <path d={'m135.7 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m154.4 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m80.9 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m44.1 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m99.2 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z'}></path>
                                    <ellipse cx={'117.6'} cy={'46.3'} rx={'2.1'} ry={'2.2'}></ellipse>
                                    <path d={'m136 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m62.5 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m154.7 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m62.8 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z'}></path>
                                    <ellipse cx={'136.3'} cy={'28.6'} rx={'2.1'} ry={'2.2'}></ellipse>
                                    <path d={'m99.6 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m117.9 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z'}></path>
                                    <path d={'m81.2 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z'}></path>
                                    <path d={'m26 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z'}></path>
                                    <ellipse cx={'44.4'} cy={'28.6'} rx={'2.1'} ry={'2.2'}></ellipse>
                                    <path d={'m136.6 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z'}></path>
                                    <path d={'m155 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z'}></path>
                                    <path d={'m26.3 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z'}></path>
                                    <path d={'m81.5 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z'}></path>
                                    <path d={'m63.1 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z'}></path>
                                    <path d={'m44.7 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z'}></path>
                                    <path d={'m118.2 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z'}></path>
                                    <path d={'m7.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z'}></path>
                                    <path d={'m99.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2z'}></path>
                                </svg>
                            </Figure>
                            <div className={'pattern-block p-3 bg-primary d-inline-block rounded-4 shadow-lg text-center'}>
                                <h5 className={'text-white mb-0'}>
                                    4.5/5.0
                                </h5>
                                <ul className={'list-inline mb-2'}>
                                    <li className={'list-inline-item me-0 small'}>
                                        <StarFill className={'text-warning'} />
                                    </li>
                                    <li className={'list-inline-item me-0 small'}>
                                        <StarFill className={'text-warning'} />
                                    </li>
                                    <li className={'list-inline-item me-0 small'}>
                                        <StarFill className={'text-warning'} />
                                    </li>
                                    <li className={'list-inline-item me-0 small'}>
                                        <StarFill className={'text-warning'} />
                                    </li>
                                    <li className={'list-inline-item me-0 small'}>
                                        <StarHalf className={'text-warning'} />
                                    </li>
                                </ul>
                                <p className={'text-white mb-0'}>Based on 3265 ratings</p>
                            </div>
                        </Col>
                        <Col md={5} className={'mt-n6 mb-0 mb-md-5'}>
                            <div className={'bg-body shadow text-center p-4 rounded-3'}>
                                <div className={'mb-3'}>
                                    <PersonCircle className={'avatar avatar-xl text-pink'} />
                                </div>
                                <blockquote className={'px-2 text-dark'}>
                                    <p>
                                        <span className={'me-1 small'}>
                                            <Quote />
                                        </span>
                                        At weddings believed laughing although the Moonlight nespaper up its enjoyment agreeable depending.
                                        <span className={'ms-1 small'}>
                                            <Quote />
                                        </span>
                                    </p>
                                </blockquote>
                                <ul className={'list-inline mb-2'}>
                                    <li className={'list-inline-item me-0 small'}>
                                        <StarFill className={'text-warning'} />
                                    </li>
                                    <li className={'list-inline-item me-0 small'}>
                                        <StarFill className={'text-warning'} />
                                    </li>
                                    <li className={'list-inline-item me-0 small'}>
                                        <StarFill className={'text-warning'} />
                                    </li>
                                    <li className={'list-inline-item me-0 small'}>
                                        <StarFill className={'text-warning'} />
                                    </li>
                                    <li className={'list-inline-item me-0 small'}>
                                        <StarHalf className={'text-warning'} />
                                    </li>
                                </ul>
                                <h6 className={'mb-0'}>Dennis Barrett</h6>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xl={5} className={'order-1 text-center text-xl-start text-dark'}>
                    <h2 className={'fs-1'}>Some valuable feedback from our students</h2>
                    <p>
                        Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how.
                    </p>
                    <Link to='#' className={'btn btn-primary mb-0'}>View Reviews</Link>
                </Col>
            </Row>
        </Container>
        
    </section>
}

export default MainRewiews;