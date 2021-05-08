import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Navbar collapseOnSelect id="navigation" expand="lg">
            <Navbar.Brand>
                <Link to="/">React Routing</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About us</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact-us">Contact us</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
