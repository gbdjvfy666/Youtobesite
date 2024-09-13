import React, { Components } from 'react'
import { FormControl, Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import logo from './logo192.png'


export default class Header extends Components {
  render() {
    return(
      <Navbar collapseOnSelect expend='md' bg='dark' variant='dark' >
        <Container>
          <Navbar.Brand href='/'>
            <img
              src={logo}
              height='30'
              width='30'
              className='d-inline-block align-top'
              alt='Logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
                <Nav.Link href='/'> Home </Nav.Link>
                <Nav.Link href='/info'> info of project </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl 
              type='text'
              placeholder='Search'
              className='mr-sm-2'
              />
              <Button variant='outline-info'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}