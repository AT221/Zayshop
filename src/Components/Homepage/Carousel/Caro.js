import React from 'react';
import './_Caro.scss';
import {Row, Col, Container, Carousel} from 'react-bootstrap';

import shoe from '../../../Images/Home/Carousel/banner_img_01.jpg';
import bottle from '../../../Images/Home/Carousel/banner_img_02.jpg';
import lamp from '../../../Images/Home/Carousel/banner_img_03.jpg';

const Caro = () => {
    return (
        <div>
            <Container fluid  >
                <Carousel>
                    <Carousel.Item  className='caro-item' >
                        <Container>
                            <Row className='align-items-center justify-content-center'>
                            <Col sm md lg={8}>
                                <img
                                className="d-block w-100 caro-img"
                                src={shoe}
                                alt="First slide"
                                />
                            </Col>
                            <Col className='first-caption me-5'>
                                <h3>Zay<span> eCommerce </span></h3>
                                <h4>The Perfect Place to Shop</h4>
                                <p>Zay is a revolutionary eCommerce site that utilizes users, 
                                prices and quality over everything. We source from ethically and eco friendly suppliers all over the world.</p>
                            </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item className='caro-item'>
                        <Container>
                            <Row className='align-items-center justify-content-center'>
                            <Col sm md lg={7}>
                                <img
                                className="d-block w-100 caro-img"
                                src={bottle}
                                alt="Second slide"
                                />
                            </Col>
                            <Col className='me-5'>
                                <h3>Expert Tailors</h3>
                                <h4>Just when you thought shopping couldn't get any better</h4>
                                <p> We have the perfect fit for all of our products gauranteed. Our team of expert tailors make sure each size is as accuarte as possible.</p>
                            </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item className='caro-item'>
                    <Container>
                        <Row className='align-items-center justify-content-center'>
                        <Col sm md lg={7}>
                            <img
                            className="d-block w-100 caro-img"
                            src={lamp}
                            alt="Third slide"
                            />
                        </Col>
                        <Col className='me-5'>
                            <h3>The Store</h3>
                            <h4>The products you are looking for are all here</h4>
                            <p>Take a look at the store to see all of our amazing products. We guarantee your product will fit or your money back.</p>
                        </Col>
                        </Row>
                    </Container>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}

export default Caro;
