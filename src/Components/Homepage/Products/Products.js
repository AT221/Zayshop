import React from 'react';
import './_Products.scss';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

import flashlight from '../../../Images/Home/Featured/feature_prod_01.jpg';
import watch from '../../../Images/Home/Featured/feature_prod_02.jpg';
import camera from '../../../Images/Home/Featured/feature_prod_03.jpg';
import {FaStar} from 'react-icons/fa';

const Products = () => {
    return (
        <div>
            <Container className='product-container pb-5' fluid>
                <Container>
                    <Row className='first-row'>
                            <Row>
                                <Col xs sm md lg={12} className='pt-5'>
                                <h1>Featured Products</h1>
                                </Col>
                                <Col className='pb-4'>
                                <p>Here are our featured products.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card style={{ width: '25rem' }}>
                                        <Card.Img variant="top" src={flashlight} />
                                        <Card.Header>
                                        <Row>
                                            <Col>
                                                <FaStar className='star'/>
                                                <FaStar className='star'/>
                                                <FaStar className='star'/>
                                                <FaStar/>
                                                <FaStar/>
                                            </Col>
                                            <Col>
                                                <p>$240.00</p>
                                            </Col>
                                        </Row>
                                        </Card.Header>
                                        <Card.Body>
                                          <Card.Title>Flashlight</Card.Title>
                                          <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                          </Card.Text>
                                            <Card.Footer>Reviews (24)</Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '25rem' }}>
                                        <Card.Img variant="top" src={watch} />
                                        <Card.Header>
                                        <Row>
                                            <Col>
                                                <FaStar className='star'/>
                                                <FaStar className='star'/>
                                                <FaStar className='star'/>
                                                <FaStar className='star'/>
                                                <FaStar/>
                                            </Col>
                                            <Col>
                                                <p>$480.00</p>
                                            </Col>
                                        </Row>
                                        </Card.Header>
                                        <Card.Body>
                                          <Card.Title>Apple Watch</Card.Title>
                                          <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                          </Card.Text>
                                            <Card.Footer>Reviews (48)</Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '25rem' }}>
                                        <Card.Img variant="top" src={camera} />
                                        <Card.Header>
                                        <Row>
                                            <Col>
                                                <FaStar className='star'/>
                                                <FaStar className='star'/>
                                                <FaStar className='star'/>
                                                <FaStar className='star'/>
                                                <FaStar className='star'/>
                                            </Col>
                                            <Col>
                                                <p>$360.00</p>
                                            </Col>
                                        </Row>
                                        </Card.Header>
                                        <Card.Body>
                                          <Card.Title>Polaroid Camera</Card.Title>
                                          <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                          </Card.Text>
                                            <Card.Footer>Reviews (74)</Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Products;
