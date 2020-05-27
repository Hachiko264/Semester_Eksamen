import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";

import Home from "../home/Home.js";
import Bio from "../bio/Bio.js";
import Gallery from "../gallery/Gallery.js";
import Disco from "../disco/Disco.js";
import Merch from "../merch/Merch.js";
import Gigs from "../gigs/Gigs.js";
import Contact from "../contact/Contact.js";


function Layout() {
    return (
        <Router>
            <Navbar variant="dark" expand="lg">
                <NavLink to="/" exact>
                    <Navbar.Brand href="/">
                      <img
                        alt=""
                        src={require('./images/ashes_logo_white.svg')}
                        height="200px"
                        className="navbar-brand"
                      />{' '}
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact className="nav-link"> Home </NavLink>
                        <h2>|</h2>
                        <NavLink to="/bio" className="nav-link"> Bio </NavLink>
                        <h2>|</h2>
                        <NavLink to="/gallery" className="nav-link"> Gallery </NavLink>
                        <h2>|</h2>
                        <NavLink to="/disco" className="nav-link"> Disco </NavLink>
                        <h2>|</h2>
                        <NavLink to="/merch" className="nav-link"> Merch </NavLink>
                        <h2>|</h2>
                        <NavLink to="/gigs" className="nav-link"> Gigs </NavLink>
                        <h2>|</h2>
                        <NavLink to="/contact" className="nav-link"> Contact </NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      Follow us: <a href="#">Social Media icons</a>
                    </Navbar.Text>
                  </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/bio" component={Bio} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/disco" component={Disco} />
                    <Route path="/merch" component={Merch} />
                    <Route path="/gigs" component={Gigs} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Container>
            <> 
               <footer className='footer mt-auto py-1 pb-4 '>
                    <div className='container'>NOROFF 2020 &copy; Martha H. Rosenlund</div>
               </footer>
            </>
        </Router>
    );
}

export default Layout;