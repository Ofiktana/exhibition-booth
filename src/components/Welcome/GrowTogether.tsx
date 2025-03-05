import SpeClassroom from '../../assets/images/content-images/fc-spe-classroom.jpg'
import { GiLightBulb } from "react-icons/gi";
import { GiMeshNetwork } from "react-icons/gi";
import { PiPresentationLight } from "react-icons/pi";
import { IoLogoGameControllerB } from "react-icons/io";

function GrowTogether() {

  const displayPhrases = [
    {
      text: 'Get Inspired',
      icon: <GiLightBulb className='gt-icon' />,
      corner: 'gt-bottom-right',
      class1: 'gt-green-white',
    },
    {
      text: 'Network',
      icon: <GiMeshNetwork className='gt-icon' />,
      corner: 'gt-bottom-left',
      class1: 'gt-white-grey',
    },
    {
      text: 'Learn',
      icon: <PiPresentationLight className='gt-icon' />,
      corner: 'gt-top-right',
      class1: 'gt-white-grey',
    },
    {
      text: 'Have Fun',
      icon: <IoLogoGameControllerB className='gt-icon' />,
      corner: 'gt-top-left',
      class1: 'gt-white-grey',
    },

  ]

  return (
    <div className="grow-together-container">
      <div className="gt-sub-container-left">
        <div className="gt-sc-right-title">
          <span className='leftTitleText'>Let's </span>
          <span className='rightTitleText'>GROW </span>
          <span className='leftTitleText'>Together</span>
        </div>
        <div className="gt-sc-right-grid">
          {displayPhrases.map((phrase) => {
            return (
              <div className={`grid-item ${phrase.class1} ${phrase.corner}`}>
                {phrase.icon}
                <p>{phrase.text}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="gt-sub-container-right">
        <img src={SpeClassroom} alt="classroom" />
      </div>
    </div>
  )
}

export default GrowTogether