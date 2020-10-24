import React from 'react';
import {Nav, Button, Navbar, Form, FormControl,} from "react-bootstrap";

const Navbarabc = () => {
  
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">PERFUME PALACE</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Products</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
     
  </>
  )
}


export default Navbarabc;