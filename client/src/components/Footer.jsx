import React from 'react'
import Container from 'react-bootstrap/Container'

import { MdOutlineEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return(
        <Container className="text-center footer mt-5 p-3">
                <MdOutlineEmail className='mx-5' />
                <GrLinkedin className='mx-5' />
                <FaInstagram className='mx-5' />
        </Container>
    );
};

export default Footer;