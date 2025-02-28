import Logo from '../components/NavHeader/Logo'
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  
  const homeStyle = {minHeight: '80vh'}

  function gotoLogin(){
    navigate('/login')
  }

  return (
    <div className='main-bg-dark'>
      <div className="landing-page-container" style={homeStyle}>
        <Logo size='large'/>
        <h2>Welcome to the Seplat Exhibition Booth</h2>
        <p>Log in for a seamless booth experience...</p>
        <button className="button medium-button rounded white-dark" onClick={gotoLogin}>
          <MdEmail /> Continue with Email
        </button>
        <button className="button medium-button rounded white-dark">
          <FcGoogle /> Continue with Google
        </button>
      </div>
    </div>
  )
}

export default Home