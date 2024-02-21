import React from 'react';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

const License = () => {
    return (
        <Container>
            <Container className="license-title text-end my-3">
                <h1>License</h1>
            </Container>
            <Container className='text-start license-text'>
                <p>This work is licensed under Attribution-NonCommercial-ShareAlike 4.0 International.</p>
                <p>To view a copy of this license, <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">click here.</a></p>
            </Container>
        </Container>
    )
};

export default License;