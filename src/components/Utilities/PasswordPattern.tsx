type Prop = {
  variant: string,
  validity: {
    length: boolean,
    number: boolean,
    special: boolean,
    upper: boolean,
    confirm: boolean
  }
}

function PasswordPattern({ variant, validity }: Prop) {

  let text;
  let isValid;

  switch(variant){
    case 'length':
      text = '8 characters minimum';
      isValid = validity.length;
      break;
    
    case 'number':
      text = 'At least one number';
      isValid = validity.number;
      break;

    case 'special':
      text = 'At least one special character';
      isValid = validity.special;
      break;
    
    case 'upper':
      text = 'Contains uppercase and lowercase letters';
      isValid = validity.upper;
      break;

    case 'confirm':
      text = 'Confirm password';
      isValid = validity.confirm;
      break;
  }

  const containerStyle = {
    width: '100%',
    color: isValid ? '#345A4A' : 'darkgray',
    display: 'flex',
    margin: '1rem auto',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '0.5rem'
  }

  const flagStyle = {
    width: '0.75rem',
    height: '0.75rem',
    borderRadius: '50%',
    backgroundColor: isValid ? '#6FC09D' : 'darkgray'
  }

  return (
    <div className="password-pattern-container" style={containerStyle}>
      <div className="password-match-flag" style={flagStyle}>
      </div>
      {text}
    </div>
  )
}

export default PasswordPattern