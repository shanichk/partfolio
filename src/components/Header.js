import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom';
import logo from './logo.png';
import seal from './seal.webp';
import './Header.css';

import Home from '../pages/Home';
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
                                <Nav.Link href="/rezume">⌞Резюме⌝</Nav.Link>
                                <Nav.Link href="/contacts">⌞Контакты⌝</Nav.Link>
                            </Nav>

                            <a
                                className="seal-wrap"
                                href="https://ru.wikipedia.org/wiki/Нерпы"
                                target="_blank"
                                rel="noreferrer"
                                title="Перейти к статье о нерпах"
                            >
                                <img
                                    src={seal}
                                    alt="Тюлень"
                                    className="seal-gif"
                                />
                            </a>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/rezume' element={<Rezume/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                </Routes>
            </>
        );
    }
}