import React from 'react';
import CardInfo from './CardInfo.js'

function Card(props){
    return(
        <div className='d-inline-block r-card' onClick={(e) => {props.click()}}>
            <img className ='r-cardImg' src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} github={props.item.github} />}
        </div>
    )
}

export default Card;