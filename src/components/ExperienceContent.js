import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ExperienceContent(props){
    return(
        <Container>
            <Row>
                <Col>
                    <h4 className='font-weight-light'>{props.experience.position}</h4>
                    <h5 className='font-weight-light'>{props.experience.company}</h5>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{props.experience.description}</p>
                </Col>
                <Col md={1}>
                    {props.experience.imSrc && <img src={props.experience.imSrc} className='r-companyPics'></img>}
                </Col>
            </Row>
        </Container>
    )
}

export default ExperienceContent;