import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
    <footer className="bg-dark text-white pt-5 pb-3">
    <Container>
    <Row>
    <Col className="mb-4">
    <h4 className="text-warning fw-bold">
    <i class="fa-solid fa-utensils text-secondary"></i> Taste-Hub
    </h4>
    <p className="text-light mt-3"> Discover delicious recipes, explore new dishes,
    and share your favorite recipes with everyone.
    </p>
    </Col>

    <Col className="mb-4">
    <h5 className="text-warning mb-3">Quick Links </h5>
    <ul>
    <li className="mb-2">
     <Link to="/home" className="text-white text-decoration-none"> Home</Link>
     </li>
    <li className="mb-2">
    <Link to="/recipe" className="text-white text-decoration-none"> Recipes </Link>
     </li>
    <li>
    <Link to="/recipecard" className="text-white text-decoration-none"> Add Recipe </Link>
    </li>
    </ul>
    </Col>

    <Col  className="mb-4">
    <h5 className="text-warning mb-3"> Contact Us </h5>
    <p className="mb-2">
    <i class="fa-solid fa-envelope text-success"></i> tastehub@gmail.com</p>
    <p className="mb-2"><i class="fa-solid fa-phone text-info"></i> +91 98765 43210</p>
    <p><i class="fa-solid fa-location-dot text-danger"></i> Kerala, India</p>
    </Col>
    </Row>
    <hr className="border-secondary" />
    
    <Row className="align-items-center">
    <Col> 
    <p className="mb-0 text-light"> © 2026 Taste-Hub. All Rights Reserved. </p>
    </Col>
    </Row>
    </Container>
    </footer>
    </div>
  )
}

export default Footer
