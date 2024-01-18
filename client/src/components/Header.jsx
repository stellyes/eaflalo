import React from 'react';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <Container>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </Container>
    );
};

export default Header;