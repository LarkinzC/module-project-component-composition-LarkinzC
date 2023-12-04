import React from 'react'
import Figure from './Figure'

export default function Card({ title, text }) {
    return (
      <div className='card'>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
    )
  } 
