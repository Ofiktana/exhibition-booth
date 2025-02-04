import { useState } from 'react'
import '../../index.css'
import logo from "../../assets/images/logos/Seplat.png";
import { NavLink } from 'react-router-dom';
import { BsList } from "react-icons/bs";


function Header() {

  {/* State management for mobile navigation toggle */}

  const [navVisible, setNavVisible] = useState(false)

  function hideNav(){
    setNavVisible(false)
  }

  function toggleNav(){
    setNavVisible(prev => !prev)
  }

  {/* Navigation setup list */}

  const navigationLinks = [
    {displayText: 'Home', url: '/'},
    {displayText: 'Schedule', url: '/programs'}
  ]

  const navEl = (
    <ul className={`nav-menu roboto-bold`}>
      {navigationLinks.map((nav) => {
        return (
          <li className={`nav-item`} key={nav.displayText}>
            <NavLink to={nav.url}>{nav.displayText}</NavLink>
          </li>
        )
      })}
    </ul>
  )

  const mobileNavEl = (
    <ul className={`mobile-nav-menu roboto-bold`}>
      {navigationLinks.map((nav) => {
        return (
          <li className={`mobile-nav-item`} key={nav.displayText}>
            <NavLink to={nav.url}>{nav.displayText}</NavLink>
          </li>
        )
      })}
    </ul>
  )

  
  return (
     <>
      <header className='header-container'>
        <div className="logo-image-container">
          <img src={logo} alt="" />
        </div>
        <nav className="nav-container">
          {navEl}
        </nav>      
      </header>
      <button onClick={toggleNav} id='mobile-nav-toggle' type='button' className="nav-toggle-button mobile-only" aria-label='navigation menu toggle'>
          <BsList />
      </button>  
      {navVisible && <div id="mobile-nav-overlay" onClick={hideNav}>
        <nav className="mobile-nav-container">
          {mobileNavEl}  
        </nav>
      </div>}
     </>
  
  )
}

export default Header