import { useState, useEffect } from 'react';

import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";


const NavbarComponent = () => {

    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () =>{
        if(window.screenY > 10) {
            setChangeColor(true);
        }else{
            setChangeColor(false);
        }

    };

    useEffect(() => {
        changeBackgroundColor();
        
        window.addEventListener("scroll", changeBackgroundColor);
    });

    return <div>
        <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
            <Container>
            <Navbar.Brand href="#home">Ngode.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                {navLinks.map((link) => {
                    return(
                        <div className="nav-link" key={link.id}>
                        <NavLink to={link.path} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }>{link.text}</NavLink>
                    </div>
                    );  
                })}
                </Nav>

                <div>
                    <Button className="btn btn-items">Gabung Kelas</Button>
                </div>

            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
};

export default NavbarComponent;