import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExperienceContent from './ExperienceContent.js';
import McGillLogo from '../images/companyImages/martletLogo.png';
import Pratt from '../images/companyImages/Pratt-logo.png';
import Chartwell from '../images/companyImages/Chartwell-Logo.jpg';

class Experience extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            experiences: [
                {id: 0, position: "Research Assistant", company: "McGill University", description: "Member of the McGill Interstellar Flight Experimental Research Group under Professor Andrew Higgins. NSERC/USRA Award Receipient. Primary objectives of group are to determine feasibility of interstellar flight using relativistic laser (light) sails as well as rapid-transit missions to Mars on the order of 30 days.", imSrc: McGillLogo},
                {id: 1, position: "Engineering Projects (Turboshaft Development Engines)", company: "Pratt & Whitney", description: "Requirements management for development turboshaft and turboprop engines, involved communicating with project engineers from every module of engine (controls, combustion, compressor, etc). Drafting instrumentation proposals for flight testing. Cost reconciliation for engine components.", imSrc: Pratt},
                {id: 2, position: "Strategic Planning & Operations Intern", company: "Chartwell Retirement Residences", description: "Assisted strategic planning analysts in population demographic analysis. Create consolidation files in Excel, using Visual Basic macros, VLOOKUPS, and indexing. Use Oracle’s Hyperion program to run reports, enter budget information, and enter staffing changes. Creating staffing and budget report templates.", imSrc: Chartwell}
            ]
        }
            
    }


    makeExperience = (experiences) => {
        return experiences.map(experience => {
            return <ExperienceContent experience= {experience} key={experience.id} /> 
        })
            
    }

    render(){
        return(
            <Container fluid={true} className='ml-0'>
               {this.makeExperience(this.state.experiences)}
            </Container>
        )       
    }
}

export default Experience;

