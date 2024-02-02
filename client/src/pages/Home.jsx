import React from 'react'
import Container from 'react-bootstrap/Container'

import { Link } from 'react-router-dom'

import bg1 from '../assets/images/bg1.png';

const Home = () => {
    document.querySelector("#bg").setAttribute("style", `background-image: url(${bg1})`);

    return (
        <Container className="home text-center mx-auto">
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