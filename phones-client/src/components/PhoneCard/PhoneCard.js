import React from 'react'
import './PhoneCard.css'
import {Link} from 'react-router-dom'

export default function PhoneCard({id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram }) {
    
    return (
        <div className="phone-card">
            <Link to={`/${id}`}><h4>{name}</h4></Link>
        
            <p>Manufacturer: {manufacturer}</p>
            <p>Description: {description}</p>
            <p>Color: {color}</p>
            <p>Price: {price}$</p>
            <img src="{imageFileName}" />
            
        </div>
    )
}
