import React from 'react';
import {useSpring, animated} from 'react-spring';


function CardInfo(props){
    const style = useSpring({opacity: 1, from: {opacity: 0}})

    return(
        <animated.div className="r-cardInfo" style={style}>
            <h4 className='font-weight-light'>{props.title}</h4>
            <p className='r-cardSubTitle'>{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View project</a>
            <br />
            <a href={props.github} target="_blank" rel="noopener noreferrer">Github</a>
        </animated.div>
    )
}

export default CardInfo;