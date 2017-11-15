import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

// Header komponenta, sluzi za navigaciju u samoj app
const Header = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <IndexLink to="/" activeClassName="active">React Quiz</IndexLink>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1}>
                        <IndexLink to="/" activeClassName="active">Home</IndexLink>
                    </NavItem>
                    <NavItem eventKey={3}>
                        <Link to="/questions" activeClassName="active">Make a Quiz</Link>
                    </NavItem>
                    <NavItem eventKey={5}>
                        <Link to="/quizzes" activeClassName="active">Quiz</Link>
                    </NavItem> 
                    <NavItem eventKey={7}>
                        <Link to="/courses" activeClassName="active">Courses</Link>
                    </NavItem>
                    <NavItem eventKey={9}>
                    <Link to="/CoursePage" activeClassName="active">Course Page</Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
