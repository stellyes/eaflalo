import React from 'react'
import Container from 'react-bootstrap/Container'

import { Link } from 'react-router-dom'

const Home = () => {
    return(
       <Container className="home text-center mx-3">
            <Container className="logo-text mb-3">
                <Link to="/">ELISHA AFLALO</Link>
            </Container>
            <Container className="nav-links">
                <Link to="/blog" className='mx-3'>Blog</Link>
                <Link to="/portfolio" className='mx-3'>Portfolio</Link>
                <Link to="/about" className='mx-3'>About</Link>
            </Container>
        </Container>
    );
};

export default Home;