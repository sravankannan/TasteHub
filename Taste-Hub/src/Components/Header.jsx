import React from 'react'
import {  Container,  Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
    <Navbar expand="lg" variant='dark' className="bg-dark fixed-top">
      <Container>
        <Navbar.Brand> 
          <Link to={'/'} style={{textDecoration:"none",fontSize:"30px",color:"yellow",fontFamily:"-apple-system"}}>
          <img src="https://thumbs.dreamstime.com/b/food-icon-isolated-black-background-simple-vector-logo-food-icon-isolated-black-background-164144307.jpg" alt="logo" width={"40px"} height={"40px"} className='mx-2'/>
           Taste-Hub
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
             <Nav.Link  style={{color:"white",fontWeight:"bold"}} href="/">Home</Nav.Link>
             <Nav.Link  style={{color:"white",fontWeight:"bold"}} href="/recipecard">Add Recipe</Nav.Link>
             <Nav.Link  style={{color:"white",fontWeight:"bold"}} href="/recipe">Recipes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
