import TitleText from "../components/Utilities/TitleText"
import HeroSection from "../components/Welcome/HeroSection"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import NumbersRibbon from "../components/Welcome/NumbersRibbon";

function Welcome() {
  return (
    <div className="main-bg-light">
      <div className="main-bg-light max-width-1200px">
        <TitleText left='Hello' right=''/>
        <HeroSection />
        <div className="time-location-container">
          <div className="tlc-sub-container">
            <MdOutlineDateRange/><small className="grey-text"> 04 - 06 Aug. 2025</small>
          </div>
          <div className="tlc-sub-container">
          <CiLocationOn/> <small className="grey-text"> Eko Hotel and Suites, Lagos</small>
          </div>
        </div>
        <TitleText 
          left="Seplat Energy Plc Exhibition at the"
          right="2025 SPE NAICE" 
        />
        <p className="grey-text welcome-note">
          Welcome to <span style={{fontWeight: 'bold'}}>Seplat Energy Plc</span>  – where innovation meets opportunity. We invite you to explore our advanced solutions and learn how our expertise is enhancing Nigeria’s oil and gas industry. Dive in, engage with our key initiatives, and join us in shaping a sustainable and prosperous future for Nigeria’s energy landscape.
        </p>
        <a href='https://www.seplatenergy.com' target="_blank" className="button glow-button medium-button semi-dark rounded">Learn More About Seplat</a>
      
        <NumbersRibbon />
        <p className="booth-agenda-heading"><span className="leftTitleText">Exhibition</span> <span className="rightTitleText">Agenda</span> </p>
      
      </div>
    </div>
  )
}

export default Welcome