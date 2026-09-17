import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom';
import logo from './logo.png';

import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Contacts from '../pages/Contacts';
import Rezume from '../pages/Rezume';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md"
                        style={{ backgroundColor: '#143e52' }} variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="35"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> Добро пожаловать!
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/Rezume">⌞Резюме⌝</Nav.Link>
                                <Nav.Link href="/portfolio">⌞Портфолио⌝</Nav.Link>
                                <Nav.Link href="/contacts">⌞Контакты⌝</Nav.Link>
                            </Nav>

                            <Form className="d-flex">
                                <FormControl
                                    type="text"
                                    placeholder="Поиск.."
                                    className="me-2"
                                />
                                <Button variant="outline-info">Найти⌕</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Rezume' element={<Rezume/>}/>
                    <Route path='/portfolio' element={<Portfolio/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                </Routes>
            </>
        );
    }
}