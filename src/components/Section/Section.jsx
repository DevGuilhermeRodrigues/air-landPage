import React from 'react'
import './Card.css'

export default function Section({tenis}) {
  return (
    <div className='container-card'>
        {tenis.map(item => (
          <div className='box-card'>
          <img 
            key={item.id} 
            src={item.modelo} 
            alt='Tenis AirForce' 
            style={{width: '150px'}}
          />
          <h2>{item.nome}</h2>
          <a href='#'>Buy</a>
          </div>
        ))}
    </div>
  )
}

// <img 
//   src={} 
//   alt='' 
//   key={} 
//   style={{width: '200px'}}
// />

// <h2>{}</h2>
// <a href='#'>buy</a>