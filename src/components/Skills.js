import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillsContent from './SkillsContent.js'

class Skills extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            skillsTechnical:[
                {name: "Python (2+)", prof: 100, name1: "Javascript (1+)", prof1: 90},
                {name: "C++ (<1)", prof: 50, name1: "C (<1)", prof1: 50},
                {name: "MATLAB (1+)", prof: 85, name1: "HTML/CSS (1+)", prof1: 80},
                {name: "Solidworks (CAD)", prof: 40}             
            ],
            skillSoft: [
                {name: "Communication", prof: 100, name1: "Problem Solving", prof1: 100},
                {name: "Collaboration", prof: 100, name1: "Public Speaking", prof1: 100},
                {name: "Organziation", prof: 90, name1: "Initiative", prof1: 100}
            ],
            technologies:[
                'Flask', 'React', 'NodeJS', 'Tensorflow', 'Pandas', 'Git', 'Microsoft Office Suite', 'Bootstrap'
            ]       
            
        }
    }
    makeTechnologies = (technologies) => {
        return technologies.map(technology => {
            return <Container><li>{technology}</li></Container>
        })
    }

    makeSkills = (skills) => {
        return skills.map(skill => {
            return <SkillsContent skill = {skill} key={skill.id} /> 
        })
            
    }

    render(){
        return(
            <Container>
                <Row>
                <Col>
                    <h4 className='font-weight-light'>Languages</h4>
                </Col>
                <br></br>
                <br></br>
                </Row>
                {this.makeSkills(this.state.skillsTechnical)}
                <br></br>
                <Row>
                    <Col>
                        <h4 className='font-weight-light'>Technologies</h4>
                    </Col>
                </Row> 
                <Row>
                    {this.makeTechnologies(this.state.technologies)}
                </Row>     
                <br></br>       
                <Row>
                <br></br>
                <Col>
                    <h4 className='font-weight-light'>Soft</h4>
                </Col>
                <br></br>
                <br></br>
                </Row>
                {this.makeSkills(this.state.skillSoft)}
            </Container>
        )       
    }
}

export default Skills;