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

import oa41 from '../assets/images/oa41.jpeg'
import oa42 from '../assets/images/oa42.jpeg'
import oa43 from '../assets/images/oa43.jpeg'
import oa44 from '../assets/images/oa44.jpeg'
import oa45 from '../assets/images/oa45.jpeg'
import oa46 from '../assets/images/oa46.jpeg'
import oa47 from '../assets/images/oa47.jpeg'

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
                        <Image src={tp3} className="landscape-image"></Image>
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
            case "all_fours":
                return (
                    <React.Fragment>
                        <p>[TO THE VIEWER]</p>
                        <p style={{ textAlign: "justify" }}>THE PURPOSE IS, AT ONCE, TO REMAIN COMPLETELY UNSEEN & DELIVER DEVINE PLEASURE [ ]. TO BE BOTH BLINDINGLY BEAUTIFUL & DISTURBING. TO LINGER LIKE A SWEETNESS IN THE MOUTH THAT IS BEGINNING TO ROT. TO CREATE SOMETHING LIVING FROM THE CARCASSES OF MOTHERS AND GIRLS REDUCED TO MEAT. TO SUMMON A SACRED SPACE AND INVADE IT. TO PAD THE WALLS OF YOUR FANTASIES WITH THICK-CUT SLABS OF FLESH, INDUCING HUNGER & AROUSAL. TO DISTURB SATISFACTION BEFORE IT IS WHOLLY EXPERIENCED. ARE YOU WILLING TO SURRENDER YOUR BODY TO TOTAL PLEASURE? ARE YOU WILLING TO SACRIFICE YOUR BODY TO TOTAL PLEASURE?</p>
                        <Image src={oa41}></Image>
                        <Image src={oa42}></Image>
                        <Image src={oa43}></Image>
                        <Image src={oa44}></Image>
                        <Image src={oa45}></Image>
                        <Image src={oa46}></Image>
                        <Image src={oa47}></Image>
                    </React.Fragment>
                )
            default:
                return (<></>);

        };
    };

    return (
        <Container className="portfolio p-0 m-0">
            <Row>
                <Col lg={3} md sm xs={12} className='portfolio-menu'>
                    <Row className='print my-4'>
                        <h3 className='my-3 portfolio-section-title'>PRINTS</h3>
                        <Container onClick={() => setPfEntry("two_poems")}>
                            TWO POEMS
                        </Container>
                    </Row>
                    <Row className='writing my-4'>
                        <h3 className='my-3 portfolio-section-title'>WRITING</h3>
                    </Row>
                    <Row className='video my-4'>
                        <h3 className='my-3 portfolio-section-title'>PHOTO/VIDEO</h3>
                        <Container onClick={() => setPfEntry("inside_animal")} >
                            INSIDE ANIMAL
                        </Container>
                        <Container onClick={() => setPfEntry("all_fours")} >
                            ON ALL FOURS, I'M PREY FOR YOU
                        </Container>
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