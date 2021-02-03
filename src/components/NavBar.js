import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
    return(
        <div>
            <>
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Navbar.Brand href="/">Project Nonprofit</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href='/categories'>All Categories</Nav.Link>
                    <Nav.Link href="/nonprofits/new">Add A Nonprofit</Nav.Link>
                    <Nav.Link href="/nonprofits">All Nonprofits</Nav.Link>
                </Nav>
            </Navbar>
            </>
        </div>
    )
    
}

export default NavBar