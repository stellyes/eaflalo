import React from 'react';
import Container from 'react-bootstrap/Container';

import { MdOutlineEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <Container className="footer my-5 text-center">
            <MdOutlineEmail className='mx-4' />
            <GrLinkedin className='mx-4' />
            <FaInstagram className='mx-4' />
        </Container>
    );
};

export default Footer;