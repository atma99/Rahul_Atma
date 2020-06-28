import React from 'react';

import Hero from '../components/Hero.js'
import AboutContent from '../components/AboutContent.js';


function AboutPage(props){
    return(
        <div>
            <Hero title={props.title} img={props.img}/>
            <AboutContent>
                <p>Welcome! I'm a 4th year student at McGill University majoring in mechanical engineering with a minor in computer science. The point of this website 
                    is to provide a brief look at my professional portfolio, including skills, internships and projects. I also hope
                    to use this as a place to further experiment with front-end development using React, so don't be alarmed
                    if you see some questionable design choices. </p>
                <h4 className='font-weight-light'>Contact/Profiles: </h4>
                <ul>
                    <li><a href='mailto:rahul.atmanathan@mail.mcgill.ca'>Email: rahul.atmanathan@mail.mcgill.ca</a></li>
                                     
                    <li><a href='https://www.linkedin.com/in/rahul-a-25b78bb7/' target='_blank' rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href='https://github.com/atma99' target='_blank' rel="noopener noreferrer">Github</a></li>
                </ul>
            </AboutContent>
        </div>
       
    )
}

export default AboutPage;