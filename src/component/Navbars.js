import React, { useState } from 'react'
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navbars = ({filterbysearch}) => {
  const [serchval, setserchval] = useState()
  const textsearch =  () =>{
    filterbysearch(serchval)
    filterbysearch('')
  }
  return (
    <Row>
    <Navbar expand="lg" bg="dark" className=" nav_style">
    <Container>
      <Navbar.Brand href="#" className='nav_title'>مطعم جديد</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
        >
          
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="بحث"
            className="mx-2"
            aria-label="بحث"
            onChange={(e) => {setserchval(e.target.value)}}

          />
          <Button onClick={()=> textsearch() }variant="outline-success">بحث</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </Row>
  )
}
