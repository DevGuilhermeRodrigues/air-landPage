import React, { useState } from 'react'
import './Main.css'
import airForce1 from '../../assets/airForcer01.png'
import airForce2 from '../../assets/airForce03.png'
import airForce3 from '../../assets/airForce04.png'
import airForce4 from '../../assets/airForce05.png'

export default function Main({tenis}) {

  const [imagem, setImagem] = useState(airForce2)

  function handleClick({target}){
    setImagem(target.src)
  }

  return (
    <main id='container-main'>
        <div>
           <div className='box-description-force'>
              <div className='box-info-force'>
                <h1>Air force</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa voluptas animi modi alias nisi iste deleniti, facilis sapiente eligendi quos, eos debitis qui non sint quia assumenda iusto! Doloremque.</p>
                <a href='#'>Buy</a>
              </div>

              <div className='container-big-force'>
                <img src={imagem} alt='' />
              </div>
           </div>
        </div>
        <div className='box-forces'>
            <img src={airForce1} onClick={handleClick} alt="" />
            <img src={airForce2} onClick={handleClick} alt="" />
            <img src={airForce3} onClick={handleClick} alt="" />
            <img src={airForce4} onClick={handleClick} alt="" />
        </div>
    </main>
  )
}
