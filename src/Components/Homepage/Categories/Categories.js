import React from 'react';
import './_Categories.scss';

import watch from '../../../Images/Home/Categories/category_img_01.jpg';
import shoe from '../../../Images/Home/Categories/category_img_02.jpg';
import glasses from '../../../Images/Home/Categories/category_img_03.jpg';

import {Container, Row, Col, Figure, Button} from 'react-bootstrap';



const Categories = () => {
    return (
        <div>
            <Container className='cate-container'>
                <Row>
                    <Col xs sm md lg={12} className='pt-5'>
                    <h1>Categories of The Month</h1>

                    </Col>
                    <Col className='pb-4'>
                    <p>Interested in seeing which categories are our customers favorites?  <br/>Check them out below! We update this on the first of the month so be on the look out.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Figure>
                            <Figure.Image 
                                src={watch}
                                width={270}
                                height={280}
                                roundedCircle
                                alt= 'Watches'
                            />
                            <Figure.Caption >
                                <h5>Watches</h5>
                            </Figure.Caption>
                                <Button variant='success' className='cate-btn'>
                                    Go Shop
                                </Button>
                        </Figure>
                    </Col>
                    <Col>
                        <Figure>
                            <Figure.Image 
                                src={shoe}
                                width={270}
                                height={280}
                                roundedCircle
                                alt= 'Shoes' 
                            />
                            <Figure.Caption>
                                <h5>Shoes</h5>
                            </Figure.Caption>
                                <Button variant='success' className='cate-btn'>
                                    Go Shop
                                </Button>
                        </Figure>
                    </Col>
                    <Col>
                        <Figure>
                            <Figure.Image 
                                src={glasses}
                                width={270}
                                height={280}
                                roundedCircle
                                alt= 'Accessories' 
                            />
                            <Figure.Caption>
                                <h5>Accessories</h5>
                            </Figure.Caption>
                                <Button variant='success' className='cate-btn'>
                                    Go Shop
                                </Button>
                        </Figure>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Categories;
