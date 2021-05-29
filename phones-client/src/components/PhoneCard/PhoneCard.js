import React from 'react'
import './PhoneCard.css'

export default function PhoneCard({name, manufacturer, description, color, price, imageFileName, screen, processor, ram }) {
    
    return (
        <div className="phone-card">
            <h4>{name}</h4>
            <p>Manufacturer: {manufacturer}</p>
            <p>Description: {description}</p>
            <p>Color: {color}</p>
            <p>Price: {price}$</p>
            <img src="{imageFileName}" />
            <p>Screen size: {screen}</p>
            <p>Processor: {processor}</p>
            <p>RAM: {ram}</p>
        </div>
    )
}
