import React from 'react'
import Container from 'react-bootstrap/Container'

const About = () => {
    return (
        <Container className="about">
            <Container className="about-title my-5">
                <h2 className="about-header text-end">Elisha Aflalo is a multimedia artist currently based in San Francisco.</h2>
                <h3 className="about-subheader text-start">She is a graduate of Bennington College where she studied poetry, printmaking, and performance.</h3>
            </Container>
        </Container>
    );
};

export default About;