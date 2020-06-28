import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer.js"
import HomePage from "./pages/homePage.js"
import AboutPage from "./pages/AboutPage.js"
import ContactPage from "./pages/ContactPage.js"
import './App.css';

import profile from './images/profile.png'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Rahul Atma",
      headerLinks: [
        {title: "About", path: "/" },
        {title: "Projects", path: "/projects" },
        {title: "Contact", path: "/contact" }
      ],
      home:{
        title: "Projects",
        //subtitle: "Projects",
        description: "I've had the opportunity to be involved with some interesting projects, check them out!"
      },
      about:{
        title: "About me",
        imgSrc: profile
        
      },
      contact:{
        title: "Let's talk"
      }

    }
  }
  render(){
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' sticky='top' bg='light' expand='lg'>
            <Navbar.Brand>Rahul Atma</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'></Navbar.Toggle>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto' >
                <Container>
                   {/* <Link className='nav-link' to='/'>About</Link>
                  <Link className='nav-link' to='/projects'>Projects</Link>
                  <Link className='nav-link' to='/contact'>Contact</Link> */}
                  <a className='nav-link' href="#about">About</a>
                  <a className='nav-link' href="#skills">Skills</a>
                  <a className='nav-link' href="#experience">Experience</a>
                  <a className='nav-link' href="#projects">Projects</a>

                </Container>
               
              </Nav>
            </Navbar.Collapse>
           
          </Navbar>

          <Route path='/projects' exact render={() => <HomePage props ={this.state.home} title={this.state.home.title} subTitle={this.state.home.subtitle} text={this.state.home.description}/> } /> 
          <Route path='/' exact render={() => <AboutPage title={this.state.about.title} img ={this.state.about.imgSrc}/>}/>
          <Route path='/contact' exact render={() => <ContactPage title={this.state.contact.title}/>}/>


          <Footer/>
        </Container>
       

      </Router>
    );
  }

}
  

export default App;
