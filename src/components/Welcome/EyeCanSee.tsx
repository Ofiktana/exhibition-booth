import fcEyeCanSee from '../../assets/images/content-images/fc-eye-can-see.jpg'
import TitleText from '../Utilities/TitleText'

function EyeCanSee() {
  return (
    <div className="eye-can-see-container">
      <div className="ecs-img-container">
        <img src={fcEyeCanSee} alt="Eye Can See promotional image" />
        <div className="ecs-button-container">
          <TitleText left='Eye' right='Issues...?' />
          <button className="button medium-button semi-dark semi-rounded glow-button">
            Book an Eye-check
          </button>
        </div>
      </div>
    </div>
  )
}

export default EyeCanSee