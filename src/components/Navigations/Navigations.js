import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const Navigations = () => {
    return (
        <Navbar color="light" light expand="md">
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink tag={RouterNavLink} to={"/pages/home"}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RouterNavLink} to={"/pages/about"}>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RouterNavLink} to={"/pages/contact"}>Contact</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RouterNavLink} to={"/pages/documentation"}>Documentation</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RouterNavLink} to={"/pages/gallery"}>Gallery</NavLink>
                </NavItem>
            </Nav>
            <NavbarBrand tag={RouterNavLink} to="/edit">Admin</NavbarBrand>
        </Navbar>
    );
};

export default Navigations;