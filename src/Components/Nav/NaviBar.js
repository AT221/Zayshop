import React from 'react';
import {Container, Row, Col, Navbar, Nav, Image} from 'react-bootstrap';
import './_NaviBar.scss';
import logo from '../../Images/Home/Nav/logo.png';

import { FaCartArrowDown, FaSearch } from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs';

const NaviBar = () => {
    return (
        <div>
          <Container fluid>
            <Row className='test'>
              <Col>

              <Navbar fixed='top' collapseOnSelect expand="md" >
                <Col sm md lg ={3}>
                  <Navbar.Brand href="#home">
                    <Image src={logo}/>
                  </Navbar.Brand>
                </Col>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Col sm md lg ={7}>
                  <Nav className="mr-auto">
                  
                    <Col>
                    <Nav.Link href="#Home">Home</Nav.Link>
                    </Col>

                    <Col>
                    <Nav.Link href="#About">About</Nav.Link>
                    </Col>

                    <Col>
                    <Nav.Link  href="#Shop">Shop</Nav.Link>
                    </Col>

                    <Col>
                    <Nav.Link href="#Contact"> Contact </Nav.Link>
                    </Col>

                  </Nav>
                  </Col>

                  <Col>
                  <Nav>
                    <Nav.Link><FaCartArrowDown></FaCartArrowDown></Nav.Link>
                    <Nav.Link><FaSearch></FaSearch></Nav.Link>
                    <Nav.Link><BsFillPersonFill></BsFillPersonFill></Nav.Link>
                  </Nav>
                  </Col>
                </Navbar.Collapse>
              </Navbar>





















              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default NaviBar;
