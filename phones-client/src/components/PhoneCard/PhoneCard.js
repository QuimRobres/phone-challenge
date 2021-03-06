import React from 'react'
import './PhoneCard.css'
import {Link} from 'react-router-dom'

export default function PhoneCard({id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram }) {
    console.log(imageFileName)
    return (
        <div className="phone-card">
            <Link to={`/${id}`}><h4>{name}</h4></Link>
        
            <p>Manufacturer: {manufacturer}</p>
            <p>Description: {description}</p>
            <p>Color: {color}</p>
            <p>Price: {price}$</p>
            <p>Screen size: {screen}</p>
            <p>Processor: {processor}</p>
            <p>RAM memory: {ram}</p>
            <img src={ imageFileName } />
            
        </div>
    )
}
