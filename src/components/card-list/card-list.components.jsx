import React from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.components';

export const Cardlist = (props) => {
    console.log(props.children);
    return (
        
        <div className='card-list'>
            { 
                props.monster.map(monster => 
                    <Card key={monster.id} monster= {monster}/>
                )
            }
        </div>
    )
};