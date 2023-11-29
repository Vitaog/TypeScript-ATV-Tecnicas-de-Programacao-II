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
            <NavDropdown
              title="Clientes"
              id="basic-nav-dropdown"
              menuVariant="dark"
            >
              <NavDropdown
                title="Cadastro"
                id="basic-nav-dropdown-cadastro"
                className="custom-dropdown" 
              >
                <NavDropdown.Item>
                  <Link to="/cadastroTitular" className="dropdown-item">
                    Cadastro Titular
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/cadastroDependente" className="dropdown-item">
                    Cadastro Dependente
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
