import React from 'react'
import './Header.css'
import logoNike from '../../assets/trainers.png'

export default function Header() {
  return (
    <>
     <header id='container-header'>
        <nav className='container-nav'>
            <ul className='list-menu'>
                <li><a href='#'>men</a></li>
                <li><a href='#'>woman</a></li>
                <li><a href='#'><img src={logoNike} alt='logo nike'/></a></li>
                <li><a href='#'>sale</a></li>
                <li><a href='#'>snkrs</a></li>
            </ul>
        </nav>
     </header>
    </>
  )
}
