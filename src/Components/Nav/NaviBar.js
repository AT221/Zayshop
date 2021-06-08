import React from 'react';

import './_NaviBar.scss';
import logo from '../../Images/Home/Nav/logo.png';
import {Container, Row, Col, Navbar, Nav, Image} from 'react-bootstrap';

import { FaCartArrowDown, FaSearch, FaFacebook,  } from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiOutlineInstagram, AiFillPhone, AiOutlineMail} from 'react-icons/ai';

const NaviBar = () => {
    return (
        <div>
          <Container fluid className='top-container'>
            <Row >
               <Navbar bg="dark" variant='dark' className='d-none d-md-block'>
                 <Navbar.Toggle aria-controls="basic-navbar-nav"  />

              <Row >
                 <Col>
                   <Nav className='align-items-center justify-content-center'>
                     <Nav.Link href="" >
                       <AiOutlineMail className='top-logos me-4'/>
                      <Navbar.Text>info@company.com </Navbar.Text> 
                     </Nav.Link>
                     <Nav.Link href="">
                       <AiFillPhone className='top-logos mx-4'/>
                      <Navbar.Text> 123-457-7890 </Navbar.Text> 
                     </Nav.Link>
                   </Nav>
                 </Col>
                 
                   <Col>
                   <Nav className="align-items-center justify-content-center" >
                     <Nav.Link href="" ><FaFacebook size='1.5em'/></Nav.Link>
                     <Nav.Link href="" ><AiOutlineInstagram size='1.5em'/></Nav.Link>
                     <Nav.Link href="" ><AiFillTwitterCircle size='1.5em'/></Nav.Link>
                     <Nav.Link href="" ><AiFillLinkedin size='1.5em'/></Nav.Link>
                   </Nav>
                   </Col>
              </Row>
              </Navbar>
            </Row>
          </Container>

          <Container>
            <Row >

              <Col>
              <Navbar  collapseOnSelect expand="md" >
                <Col sm md lg ={4}>
                  <Navbar.Brand href="#home" className='logo'>
                    <Image src={logo}/>
                  </Navbar.Brand>
                </Col>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Col sm md lg ={8}>
                  <Nav >
  
                    <Col>
                    <Nav.Link href="#Home" className='bottom-nav-links'>Home</Nav.Link>
                    </Col>

                    <Col>
                    <Nav.Link href="#About" className='bottom-nav-links'>About</Nav.Link>
                    </Col>

                    <Col>
                    <Nav.Link  href="#Shop" className='bottom-nav-links'>Shop</Nav.Link>
                    </Col>

                    <Col>
                    <Nav.Link href="#Contact" className='bottom-nav-links'> Contact </Nav.Link>
                    </Col>

                  </Nav>
                  </Col>

                  <Col>
                  <Nav className='ms-5'>
                    <Nav.Link><FaCartArrowDown size='1.5em'/></Nav.Link>
                    <Nav.Link className='px-4'><FaSearch  size='1.5em'/></Nav.Link>
                    <Nav.Link><BsFillPersonFill  size='1.8em'/></Nav.Link>
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
