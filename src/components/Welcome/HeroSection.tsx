import speStaffPrimary from '../../assets/images/content-images/spe-staff-primary.jpg'
import speExecs from '../../assets/images/content-images/spe-execs.jpg'
import speAward from '../../assets/images/content-images/spe-award.jpg'

function HeroSection(){

  return (
    <div className="main-container">
      <div className="hero-small-bottom-left">
        <img src={speAward} alt="" className="hero-image" />
      </div>
      <div className="hero-small-top-right">
        <div className="hero-center-img-container">
          <img src={speExecs} alt="" className="hero-center-image" />
        </div>
      </div>
      <div className="hero-medium-top-right"></div>
      <div className="hero-large-bottom-right">
        <div className="hero-center-img-container">
          <img src={speStaffPrimary} alt="" className="hero-center-image" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection