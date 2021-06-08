import React from 'react';
import {Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import './_Footer.scss';
import { AiFillPhone, AiOutlineMail, AiFillTwitterCircle, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai';
import {BiMap} from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h4>Zay Shop</h4>
                        <Col>
                            <BiMap/> 123 Manhattan New York
                        </Col>
                        <Col>
                        <AiFillPhone/> 123-457-7890
                        </Col>
                        <Col>
                        <AiOutlineMail /> info@company.com
                        </Col>
                    </Col> 
                    {/* Products */}
                    <Col>
                        <h4>Products</h4>
                        <Col>
                            Luxury
                        </Col>
                        <Col>
                            Sport Wear
                        </Col>
                        <Col>
                            Men's Shoes
                        </Col>
                        <Col>
                            Women's Shoes
                        </Col>
                        <Col>
                            Popular Dresses
                        </Col>
                        <Col>
                            Gym Accessories
                        </Col>
                        <Col>
                            Sport Shoes
                        </Col>
                    </Col>
                    <Col>
                        <h4>Futher Info</h4>
                        <Col>
                            Home
                        </Col>
                        <Col>
                            About Us
                        </Col>
                        <Col>
                            Shop Locations
                        </Col>
                        <Col>   
                            FAQs
                        </Col>
                        <Col>
                            Contact
                        </Col>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <Row>
                            <Col xs={3} sm md lg={2}>
                                <FaFacebook size='2.5em'/>
                            </Col>
                            <Col xs={3} sm md lg={2}>
                                <AiOutlineInstagram size='2.5em'/>
                            </Col>
                            <Col xs={3} sm md lg={2}>
                                <AiFillTwitterCircle size='2.5em'/>
                            </Col>
                            <Col xs={3} sm md lg={2}>
                                <AiFillLinkedin size='2.5em'/>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <InputGroup className="mb-3" >
                            <FormControl 
                              placeholder="Email address"
                              aria-label="Email addresse"
                              aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append >
                              <InputGroup.Text id="basic-addon2">Subscribe</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;
