import React from 'react'
import Container from 'react-bootstrap/Container'

import bg1 from '../assets/images/bg1.png';

const Home = () => {
    document.querySelector("#bg").setAttribute("style", `background-image: url(${bg1})`);

    return (
        <Container>
            <div>Coming Soon!</div>
        </Container>
    );
};

export default Home;