import { Outlet, Navigate } from 'react-router-dom'
import { auth } from '../../config/firebase-config'

function AuthRequired() {
  const user:any = auth.currentUser

  if(!user){
    return <Navigate to='/'/>
  }

  return (
    <Outlet />
  )
}

export default AuthRequired