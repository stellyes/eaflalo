import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import bg3 from '../assets/images/bg3.png';
import profile from '../assets/images/profile.jpg';

const About = () => {
    document.querySelector("#bg").setAttribute("style", `background-image: url(${bg3})`);

    return (
        <Container className="about">
            <Container className="about-title my-4">
                <h2 className="about-header text-end">Elisha Aflalo is a multimedia artist currently based in San Francisco.</h2>
                <h3 className="about-subheader text-start">She is a graduate of Bennington College where she studied poetry, printmaking, and performance.
                    Her work is driven by her relationship to the human body, especially the female form, and how it relates to modern culture and media.
                    She is published amongst various literary journals and the inside of your frontal lobe.
                    She is the co-founder of <a href="https://shopping-addicts-anonymous.onrender.com">Shopping Addicts Anonymous</a>,
                    a project that was born out of her passion for physical and wearable art combined with the ephemerality of the internet and culture.
                </h3>
                <Image src={profile} alt="Elisha Aflalo" style={{ width: "70%", margin: "auto 15%" }} />
            </Container>
        </Container>
    );
};

export default About;