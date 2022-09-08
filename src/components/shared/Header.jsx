import React from 'react'
import { NavLink } from 'react-router-dom'
import header from './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <h1 className='header__logo'>e-commerce</h1>
      </NavLink>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink 
              className={({isActive}) => isActive ? 'active-link' : ''} 
              to='/login' 
              >
              <i className="header__img fa-regular fa-user"></i>
              </NavLink></li>
          <li className="header__item">
            <NavLink 
              className={({isActive}) => isActive ? 'active-link' : ''} 
              to='/purchases' 
              >
              <i className="header__img fa-solid fa-store"></i>
              </NavLink></li>
          <li className="header__item">
            <NavLink
               className={({isActive}) => isActive ? 'active-link' : ''} 
               to='/cart'
               >
               <i className="header__img fa-solid fa-cart-shopping"></i>
              </NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header