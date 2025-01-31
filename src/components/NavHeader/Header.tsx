import './Header.css';
import '../../index.css'
import logo from "../../assets/images/logos/Seplat.png";
import { NavLink } from 'react-router-dom';


function Header() {
  
  return (
     
    <header className='header-container'>
      <div className="logo-image-container">
        <img src={logo} alt="" />
      </div>
      <nav className="nav-container">
          <ul className='nav-menu roboto-bold'>
            <li className="nav-item">
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/programs'>Programs</NavLink>
            </li>
            <li className="nav-item">Activities</li>
            <li className="nav-item">Profile</li>
          </ul>
      </nav>      
    </header>
  
  )
}

export default Header