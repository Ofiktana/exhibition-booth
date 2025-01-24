import './Header.css'
import logo from "../../assets/images/logos/Seplat.png"

function Header() {
  
  return (
    <header className='header-container'>
      <div className="logo-image-container">
        <img src={logo} alt="" />
      </div>
      
    </header>
  )
}

export default Header