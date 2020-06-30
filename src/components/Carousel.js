import React from 'react';
import nbalogo from '../images/projectImages/nbalogo.jpg';
import PONGpic from '../images/projectImages/PONGpic.png';
import primeAIDpic3 from '../images/projectImages/primeAIDpic3.png';
import PathFinding from '../images/projectImages/PathFinding.png';

import Card from './Card.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "primeAID",
                    subTitle:"Full stack web app aimed to improve patient experience in the Canadian healthcare system.",
                    imgSrc: primeAIDpic3,
                    link: 'https://devpost.com/software/primeaid',
                    github: 'https://github.com/rbehal/primeAID',
                    selected: false
                },
                {
                    id: 1,
                    title: "PONG",
                    subTitle:"Genetic algorithm used to master the game of PONG. Each member of the population contains a neural network telling it where to move.",
                    imgSrc: PONGpic,
                    link: 'https://atma99.github.io/PongNN/',
                    github: 'https://github.com/atma99/PongNN',
                    selected: false
                },
                {
                    id: 2,
                    title: "Nb.Ai",
                    subTitle:"Created model to predict MVP of a given NBA season based on various features.",
                    imgSrc: nbalogo,
                    link: '',
                    github: 'https://github.com/rbehal/nb.AI',
                    selected: false
                },
                {
                    id: 3,
                    title: "Path Finding",
                    subTitle:"Another example using genetic algorithms, the agents try and find a path to the target avoiding all obstacles. Each member of the population has DNA encoded as a list of vectors.",
                    imgSrc: PathFinding,
                    link: 'https://atma99.github.io/PathFinding/',
                    github: 'https://github.com/atma99/PathFinding',
                    selected: false
                }
              
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true 

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} key={item.id} click={(e => this.handleCardClick(item.id, e))} />
        })
    }
    render(){
        return(
            <Container fluid={true}>
                <Row className = 'justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;