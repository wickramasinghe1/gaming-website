import React from 'react'
import { IMAGES } from '../assests'
import './GameCard.css'

export default function GameCard({imageUrl, name='', date=''}) {

    const nameHandler=(value) => {
        return value.length > 70 ?
            `${value.substring(0,70)}...` : value
          
    }
    return (
        <div  className="game-card">
            <img
               className="game-card-img"
                src={imageUrl ? imageUrl : IMAGES.A1IMG}
                alt="First slide"
                style={{borderRadius: '10px'}}
            />
            <br/>
            <div style={{fontWeight: 'bold', marginLeft: '10px',  marginRight: '10px'}}>{nameHandler(name)}</div>
            <div style={{ marginLeft: '10px',  marginRight: '10px'}}>{date}</div>
            <br/>
        </div>
    )
}
