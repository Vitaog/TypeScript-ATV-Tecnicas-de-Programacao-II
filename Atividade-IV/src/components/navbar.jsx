import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          Atlantis Park
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <NavDropdown title="Cadastro Clientes" id="basic-nav-dropdown">
              <Link to="/titular" className="dropdown-item">
                Titular
              </Link>
              <Link to="/dependente" className="dropdown-item">
                Dependente
              </Link>
            </NavDropdown>
            <Link to="/services" className="nav-link">
              Serviços
            </Link>
            <Link to="/contact" className="nav-link">
              Contato
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
