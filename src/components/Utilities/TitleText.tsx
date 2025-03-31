type Prop = {
  left: string,
  right: string
}

function TitleText({ left, right }:Prop) {

  return (
    <h2 style={{padding: '1em 0.5em'}}>
      <span className='leftTitleText text-2xl font-semibold'>{left}</span>{' '}
      <span className='rightTitleText text-2xl font-semibold'>{right}</span>
    </h2>
  )
}

export default TitleText