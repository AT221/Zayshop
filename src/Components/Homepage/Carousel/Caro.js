import React from 'react';
import './_Caro.scss';
import {Row, Col, Container, Carousel} from 'react-bootstrap';

import shoe from '../../../Images/Home/Carousel/banner_img_01.jpg';
import bottle from '../../../Images/Home/Carousel/banner_img_02.jpg';
import lamp from '../../../Images/Home/Carousel/banner_img_03.jpg';

const Caro = () => {
    return (
        <div>
            <Container fluid >

                        <Carousel variant='dark' >
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={shoe}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={bottle}
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={lamp}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
            </Container>
        </div>
    )
}

export default Caro;
