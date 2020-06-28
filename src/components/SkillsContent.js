import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar'

function SkillsContent(props){
    return(
            <Row>
                <Col>
                    <p>{props.skill.name}</p>
                </Col>
                <Col>
                    <ProgressBar now={props.skill.prof}></ProgressBar>
                </Col>
                <Col>
                    {props.skill.name1 && <p>{props.skill.name1}</p>}
                </Col>
                <Col>
                    {props.skill.prof1 && <ProgressBar now={props.skill.prof1}></ProgressBar>}
                </Col>
            </Row>
        )
}

export default SkillsContent;