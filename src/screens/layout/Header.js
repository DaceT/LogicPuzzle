import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div>
            {/* <header style={headerStyle}>
            <h1>BoggleSolver!</h1>
            </header>  */}
                
                <Navbar style={{backgroundColor: "#ff91a4"}} expand="lg">
                    <Navbar.Brand href="." style={{color: "#fff", fontWeight: "100", fontSize: "1.5em"}}>Logic Puzzles</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="https://github.com/DaceT/LogicPuzzle">github</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
        </div>
    )
}

export default Header;