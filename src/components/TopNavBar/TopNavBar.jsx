import React, { Fragment } from 'react'
import '../../assets/css/custom.css'
import '../../assets/css/bootstrap.min.css'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';


const TopNavBar = () => {
 
  return (
     <Fragment>
           
            <Navbar className="navBackground" fixed="top" collapseOnSelect expand="lg" >
            <Container>
            
                <Navbar.Brand className="navTitle" href="#home">EduCavo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className=" navBarMain me-auto">
                    <Nav.Link className="navItem" href="#home">Home</Nav.Link>
                    <Nav.Link className="navItem" href="#home">About</Nav.Link>
                    <Nav.Link className="navItem" href="#home">Courses</Nav.Link>
                    <Nav.Link className="navItem" href="#home">Contact</Nav.Link>
                    <Nav.Link className="navItem" href="#link">Tuitorial</Nav.Link>
                    <Nav.Link className="navItem" href="#link">Blog</Nav.Link>
                    <Nav.Link className="navItem" href="#link">Contact</Nav.Link>                 
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            
     </Fragment>

    
    
  )
}

export default TopNavBar