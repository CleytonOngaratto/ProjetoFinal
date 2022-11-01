import React, { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';




class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (

            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
                <span class="navbar-brand" >MultiCe</span>

                <Container>

                    <Navbar.Brand href="/">MultiCe</Navbar.Brand>
                    <Navbar.Toggle className='bg-dark' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='' id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Página Inicial</Nav.Link>
                            <Nav.Link href="/destinos">Carrinho de Compras</Nav.Link>
                            
                        </Nav>
                        
                    </Navbar.Collapse>


                </Container>
            </Navbar>

        )
    }
}

export default HeaderComponent;