import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import "./styles/navbar.css"
import {Navbar, Container, Nav, NavDropdown, Form, Button,FormControl} from 'react-bootstrap'
import carrito from "./img/carrito.png"
import logo from "./img/logo.png"


function Menu() {
  return (
    <div className='body'>
 <div className="container">
    
    <Navbar bg="dark" expand="lg" variant="dark"  >
 
      <Navbar.Brand href="#">  <img src={logo} alt="" className='logo'/> </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll"  />
      <Navbar.Collapse id="navbarScroll" >
        <Nav
          className="me-auto my-2 my-lg-0 "
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1" variant="light">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
        
        
        </Nav> 
        <Form className="d-flex " >
          <FormControl
            type="search"
            placeholder="Search"
            className="me-auto form-control"
            aria-label="Search"
          />
          <Button variant="outline-warning">Search</Button>
        </Form>
        <img src={carrito} alt="" className='image'/>
      </Navbar.Collapse>

  </Navbar>



  </div>
  </div>
  )
}

export default Menu
