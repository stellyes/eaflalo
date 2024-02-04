import React from 'react';
import Container from 'react-bootstrap/Container';

import { MdOutlineEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

    const handleRedirect = (link) => {
        window.location.assign(link);
    };

    return (
        <React.Fragment>
            <Container className="footer mt-5 text-center">
                <MdOutlineEmail className='mx-4' onClick={() => handleRedirect("mailto:elisha.a808@gmail.com")} />
                <GrLinkedin className='mx-4' onClick={() => handleRedirect("https://www.linkedin.com/in/elisha-aflalo-776806177/")} />
                <FaInstagram className='mx-4' onClick={() => handleRedirect("https://instagram.com/t0olucky")} />
            </Container>
            <p className='my-3 credits footer text-center'>Website by <a href="https://ryanengland.onrender.com">Ryan England</a></p>
        </React.Fragment>
    );
};

export default Footer;