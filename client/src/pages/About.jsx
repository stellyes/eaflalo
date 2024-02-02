import React from 'react'
import Container from 'react-bootstrap/Container'

import bg3 from '../assets/images/bg3.png';

const About = () => {
    document.querySelector("#bg").setAttribute("style", `background-image: url(${bg3})`);

    return (
        <Container className="about">
            <Container className="about-title my-4">
                <h2 className="about-header text-end">Elisha Aflalo is a multimedia artist currently based in San Francisco.</h2>
                <h3 className="about-subheader text-start">She is a graduate of Bennington College where she studied poetry, printmaking, and performance.</h3>
            </Container>
        </Container>
    );
};

export default About;