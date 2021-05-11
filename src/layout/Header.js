import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <Navbar collapseOnSelect id="navigation" expand="lg">
            <Navbar.Brand>
                <Link to="/">React Routing</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                    <NavLink exact to="/about-us">
                        About us
                    </NavLink>
                    <NavLink exact to="/services">
                        Services
                    </NavLink>
                    <NavLink exact to="/contact-us">
                        Contact us
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
