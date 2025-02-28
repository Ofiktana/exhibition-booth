import Logo from '../components/NavHeader/Logo'
import PasswordPattern from '../components/Utilities/PasswordPattern'
import TextInput from '../components/Utilities/TextInput'
import { useState } from 'react'
import { addNewDataToCollection, authUpdateProfile, registerNewUserWithEmail, signInUserWithEmail } from '../config/firebase-config'


function Login() {
  const homeStyle = {minHeight: '80vh'}
  const [regUser, setRegUser] = useState(true)
  const [passwordValidityState, setPasswordValidityState] = useState({
    length: false,
    number: false,
    special: false,
    upper: false,
    confirm: false
  })
  const [passwordValue, setPasswordValue] = useState('')

  function toggleRegisterUser(){
    setRegUser(prev => !prev)
  }

  const loginFormInputFields = [
    {
      type: 'text',
      name: 'fullName',
      label: 'Full Name',
      placeholder: 'John Doe',
      visible: regUser
    },
    
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'johndoe@example.com',
      visible: true
    },
        
    {
      type: 'text',
      name: 'occupation',
      label: 'Occupation',
      placeholder: 'Student',
      visible: regUser
    },
        
    {
      type: 'text',
      name: 'affiliation',
      label: 'Affiliation',
      placeholder: 'University of Nigeria',
      visible: regUser
    },
    
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: '********',
      visible: true
    },
    
    {
      type: 'password',
      name: 'confirmPassword',
      label: 'Confirm Password',
      placeholder: '********',
      visible: regUser
    },
  
  ]

  const passwordCheckList = ['length', 'number', 'special','upper','confirm']

  const passwordCheckEl = passwordCheckList.map(item => <PasswordPattern variant={item} validity={passwordValidityState} />)

  function validatePassword(password:string){
    const passwordArray = password.split('')

    const lengthCriteria = 7
    const uppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const lowercaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const numbers = ['1','2','3','4','5','6','7','8','9','0']
    const special = ['^', '$', '*', '.', '[' ,']' ,'{', '}', '(', ')', '?', '"', '!', '@', '#', '%' ,'&', '/', '\\', ',', '>', '<', "'", ':', ';' ,'|', '_', '~']

    const passwordValidity = {
      length: (password.length > lengthCriteria),
      number: passwordArray.some(item => numbers.includes(item)),
      special: passwordArray.some(item => special.includes(item)),
      upper: passwordArray.some(item => uppercaseLetters.includes(item)) && passwordArray.some(item => lowercaseLetters.includes(item)),
      confirm: false
    }

    return passwordValidity

  }

  async function handleEmailAndPassword(event:any){
    event.preventDefault()

    const formEl:any = document.getElementById('loginForm')

    const loginForm = Object.fromEntries(new FormData(formEl))

    try{

      if(regUser){
        /* Registering a new user */
  
        const passwordValid = passwordValidityState.length && passwordValidityState.number && passwordValidityState.special && passwordValidityState.upper && passwordValidityState.confirm
        if (passwordValid){
          
          const email:any = loginForm.email
          const password:any = loginForm.password
          const fullName:any = loginForm.fullName
          
          const userInfo = {
            fullName: loginForm.fullName,
            email: loginForm.email,
            occupation: loginForm.occupation,
            affiliation: loginForm.affiliation,
            userId: ''
          }
  
          registerNewUserWithEmail(email, password)
            .then((user) => {
              if(user){
                userInfo.userId = user.uid
                addNewDataToCollection('users', userInfo)
              }
            })
            .then(() => authUpdateProfile(fullName, ''))
            .catch((error)=> alert(error))  
  
        }else{
            //invalid password
  
            alert('Error: Invalid password')
            return
        }
      }else{
        /* Logging in an existing user */
        const email:any = loginForm.email
        const password:any = loginForm.password

        signInUserWithEmail(email, password)

        //After sign in, collect user id and navigate. Same goes for registering new user
      }
    }catch(err){
      alert(err)
    }finally{

      formEl.reset()
  
      setPasswordValidityState({
        length: false,
        number: false,
        special: false,
        upper: false,
        confirm: false
      })
    }
  }

  function handleTextInputChange(event:any){
    event.preventDefault()

    if(event.target.id === 'password'){
      const password = event.target.value
      setPasswordValue(password)
      setPasswordValidityState(validatePassword(password))
    }

    if(event.target.id === 'confirmPassword'){
      if(passwordValue !== '' && event.target.value === passwordValue){
        setPasswordValidityState((prev) => {
          return {...prev, confirm: true}
        })
      }else{
        setPasswordValidityState((prev) => {
          return {...prev, confirm: false}
        })      
      }
    }
  }

  return (
    <div className='main-bg-light'>
      <div className="login-page-container" style={homeStyle}>
        
        <form id='loginForm' onSubmit={handleEmailAndPassword} method='post'>
          <Logo size='large'/>
          <legend><h2>{regUser ? 'Create account' : 'Sign in'}</h2></legend>
          <div className="login-form-input-container">
            {loginFormInputFields.map(input => <TextInput inputField={input} onChange={handleTextInputChange} />)}
          </div>
          {regUser && passwordCheckEl}
          <button type='submit' className="button medium-button dark semi-rounded">{regUser ? 'Sign up' : 'Log in'}</button>
        </form>
        <p>{regUser ? 'Already have an account?' : "Don't have an account?"} <button type='button' className="link-button" onClick={toggleRegisterUser}>{regUser ? 'Sign in' : 'Sign up'}</button></p>
      </div>
    </div>
  )
}

export default Login