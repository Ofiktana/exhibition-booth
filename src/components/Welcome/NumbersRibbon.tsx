import { RiPresentationFill } from "react-icons/ri";
import { BsPersonStanding } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";

function NumbersRibbon() {

  const numbers = [
    {
      icon: <RiPresentationFill className="nr-icon" />,
      amount: 6,
      measure: 'Presentations'
    },
    {
      icon: <BsPersonStanding className="nr-icon" />,
      amount: 20,
      measure: 'In-Booth Staff'
    },
    {
      icon: <FaPeopleGroup className="nr-icon" />,
      amount: '200+',
      measure: 'Guests'
    },
  ]

  function NumberRibbionItem({ item }:any){
    return (
      <div className="numbers-ribbon-item">
        <div className="nr-item-left rightTitleText">
          {item.icon}
        </div>
        <div className="nr-item-right">
          <h2 className="leftTitleText">{item.amount}</h2>
          <small className="grey-text">{item.measure}</small>
        </div>
      </div>
    )
  }

  return (
    <div className='numbers-ribbon-container'>
      {numbers.map(number => <NumberRibbionItem item={number} />)}
    </div>
  )
}

export default NumbersRibbon