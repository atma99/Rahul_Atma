import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Hero(props){
    return (
        <Jumbotron id='about' className='bg-transparent jumbotron-fluid p-0'>
            <Container fluid={true}>
                <Row className='justify-content-center py-5'>
                    <Col md={6}>
                        {props.title && <h1 className='display-2 font-weight-light'>{props.title}</h1>}
                        {props.subTitle && <h3 className='display-4 font-weight-light'>{props.subTitle}</h3>}
                        {props.description && <h3 className='lead font-weight-light'>{props.description}</h3>}
                    </Col>
                    <Col md ={2}>
                        {props.img && <img className= 'r-profileSize' src={props.img} alt={props.img}></img>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;