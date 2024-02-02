import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Image from 'react-bootstrap/Image';

import bg2 from '../assets/images/bg2.png';

import tp1 from '../assets/images/tp1.jpg'
import tp2 from '../assets/images/tp2.jpg'
import tp3 from '../assets/images/tp3.jpg'

import ia1 from '../assets/images/ia1.jpg'
import ia2 from '../assets/images/ia2.jpg'
import ia3 from '../assets/images/ia3.jpg'
import ia4 from '../assets/images/ia4.jpg'
import ia5 from '../assets/images/ia5.jpg'
import ia6 from '../assets/images/ia6.jpg'
import ia7 from '../assets/images/ia7.jpg'
import ia8 from '../assets/images/ia8.jpg'
import ia9 from '../assets/images/ia9.jpg'

const Portfolio = () => {
    document.querySelector("#bg").setAttribute("style", `background-image: url(${bg2})`);

    const [pfEntry, setPfEntry] = useState('');

    const getEntry = (entry) => {
        switch (entry) {
            case "two_poems":
                return (
                    <React.Fragment>
                        <Image src={tp1}></Image>
                        <Image src={tp2}></Image>
                        <Image src={tp3} style={{ rotate: "-90deg", scale: "1.3" }}></Image>
                    </React.Fragment>
                );
            case "inside_animal":
                return (
                    <React.Fragment>
                        <Image src={ia1}></Image>
                        <Image src={ia2}></Image>
                        <Image src={ia3}></Image>
                        <Image src={ia4}></Image>
                        <Image src={ia5}></Image>
                        <Image src={ia6}></Image>
                        <Image src={ia7}></Image>
                        <Image src={ia8}></Image>
                        <Image src={ia9}></Image>
                    </React.Fragment>
                );
            default:
                return (<></>);

        };
    };

    return (
        <Container className="portfolio">
            <Row>
                <Col xl={2} xs={12} className='portfolio-menu'>
                    <Row className='print my-3'>
                        <h3 className='mt-3'>PRINTS</h3>
                        <Container onClick={() => setPfEntry("two_poems")}>
                            TWO POEMS
                        </Container>
                    </Row>
                    <Row className='writing my-3'>
                        <h3>WRITING</h3>
                    </Row>
                    <Row className='video my-3'>
                        <h3>PHOTO/VIDEO</h3>
                        <ListGroupItem
                            as='li'
                            className='my-0'
                            onClick={() => setPfEntry("inside_animal")}
                        >
                            INSIDE ANIMAL
                        </ListGroupItem>
                    </Row>
                </Col>
                <Col md={8} sm={12} className='portfolio-display'>
                    {getEntry(pfEntry)}
                </Col>
            </Row>
        </Container >
    );
};

export default Portfolio;