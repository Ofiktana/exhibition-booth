import { useState } from 'react'
import '../../index.css'
import Logo from '../NavHeader/Logo'
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp, IoTrophy,  IoBook, IoHome  } from "react-icons/io5";
import { GiCardRandom } from "react-icons/gi";
import { BsList } from "react-icons/bs";


function Header() {

  {/*User details - NB: This should be passed as part of props for this component*/}

  type User = {
    fullName: string,
    imageURL: string,
    role?: string,
    affiliation?: string
  }

  const user:User = {
    fullName: 'John Doe GillMartins Oghenerukevwe',
    imageURL: 'https://avatar.iran.liara.run/public/42'
  };


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
    {displayText: 'Learning', url: '/programs'},
    {displayText: 'ScoreBoard', url: '/leader-board'},
    {displayText: 'Raffle', url: '/raffle'},
  ]

  function getIcon(text:string){
    if(text === 'Home'){
      return <IoHome />
    }else if(text === 'Learning'){
      return <IoBook />
    }else if(text === 'ScoreBoard'){
      return <IoTrophy />
    }else if(text === 'Raffle'){
      return <GiCardRandom />
    }
  }

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
    <ul className={`mobile-nav-menu`}>
      {navigationLinks.map((nav) => {
        return (
          <li className={`mobile-nav-item`} key={nav.displayText}>
            <NavLink to={nav.url}>{getIcon(nav.displayText)} {nav.displayText}</NavLink>
          </li>
        )
      })}
      {/* Insert an exit button e.g. 
        <li className="nav-item">
          <NavLink to={nav.url}>{getIcon('Exit')} Exit</NavLink>
        </li> */}
    </ul>
  )

  
  return (
     <>
      <header className='header-container'>
        <Logo size=''/>
        <nav className="nav-container">
          {navEl}
        </nav>
        <div className="profile">
          <div className="user-details">
            <div className="user-profile-pic">
              <img src={user.imageURL} alt="profile picture" className="profile-pic" />
            </div>
            <h4 className="user-full-name">
              {user.fullName.length > 15 ? (user.fullName.slice(0,12) + '...') : user.fullName}
            </h4>
            <IoIosArrowDown className='profile-dropdown'/>
          </div>
        </div>      
      <button onClick={toggleNav} id='mobile-nav-toggle' type='button' className="nav-toggle-button mobile-only" aria-label='navigation menu toggle'>
          {navVisible ? <IoCloseSharp /> : <BsList />}
      </button>  
      </header>
      {navVisible && <div id="mobile-nav-overlay" onClick={hideNav}>
        <nav className="mobile-nav-container">
          <div className="mobile-user-details">
              <div className="mobile-user-profile-pic">
                <img src={user.imageURL} alt="profile picture" width='100%' className="mobile-profile-pic" />
              </div>
              <h4 className="user-full-name">{user.fullName}</h4>
              <p className='user-description'>Guest</p>
          </div>
          {mobileNavEl}  
        </nav>
      </div>}
     </>
  
  )
}

export default Header