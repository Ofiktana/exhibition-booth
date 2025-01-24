import './Header.css';
import logo from "../../assets/images/logos/Seplat.png";


function Header() {
  
  return (
    <header className='header-container'>
      <div className="logo-image-container">
        <img src={logo} alt="" />
      </div>
      <nav className="nav-container">
          <ul className='nav-menu'>
            <li className="nav-item">Home</li>
            <li className="nav-item">Agenda</li>
            <li className="nav-item">Activities</li>
            <li className="nav-item">Profile</li>
          </ul>
      </nav>      
    </header>
  )
}

export default Header