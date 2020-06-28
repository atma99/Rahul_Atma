import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel from './Carousel.js';
import Skills from './Skills.js';
import Experience from './Experience.js';

function AboutContent(props){
    return(
        <Container fluid={true}>
            <Row className='justify-content-center'>
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
            <Row id='skills'>
                
                <br></br>
            </Row>
            <Row className ='justify-content-center'>
                <Col md={8}>
                <h3 className='display-4 font-weight-light'>Skills </h3> 
                <Skills />
                </Col>
                
            </Row>
            <Row id='experience'>
                
                <br></br>
            </Row>
            <Row  className ='justify-content-center'>
                <Col md={8}>
                <h3 className='display-4 font-weight-light'>Experience</h3> 
                <Experience />
                </Col>
            </Row>
            <Row  id ="projects">
                
                <br></br>
            </Row>
            <Row className ='justify-content-center'>
                <Col md={8}>
                <h3 className='display-4 font-weight-light'>Projects</h3> 
                <Carousel />
                </Col>
            </Row>
            
        </Container>
    )
    
}

export default AboutContent;