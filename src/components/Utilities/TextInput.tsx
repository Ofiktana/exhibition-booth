import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react'

type InputField = {
  type: string,
  name: string,
  label: string,
  placeholder: string,
  visible: boolean
}

type Prop = {
  inputField: InputField,
  onChange: any
}

function TextInput({ inputField, onChange }:Prop) {

  const [passwordVisible, setPasswordVisible] = useState(false) 


  function togglePasswordVisible(){
    setPasswordVisible(prev => !prev)
  }

  return(

    inputField.visible &&

    <div className="login-form-input-box">
      <label htmlFor={inputField.name}>{inputField.label}</label>
      <div className='text-input-element medium-button'>
        <input 
          name={inputField.name} 
          id={inputField.name} 
          type={inputField.type === 'email' ? 'email' : (inputField.type !== 'password'? 'text' : (passwordVisible ? 'text' : 'password'))} 
          className='medium-button semi-rounded bg-white' 
          placeholder={inputField.placeholder}
          onChange={onChange} 
        />
        {(inputField.type === 'password') && <div className='password-viewer' onClick={togglePasswordVisible}>{passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}</div>}
      </div>
    </div>
  )
}

export default TextInput