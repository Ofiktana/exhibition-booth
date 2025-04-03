import { NavLink } from 'react-router-dom'
import { FaRegClock } from "react-icons/fa";
import '../../index.css'


function AgendaItem({ fields }:any) {

  return (

      <div className="backdrop semi-dark-border">
        <div className="container-outer">
          <div className="container-top-block">
            <img 
              src={fields.imageURL} 
              alt={`display image for ${fields.title}`} 
              width='100%' 
              height='100%'
              className='w-full h-full'
            />
          </div>
          <div className="container-activity-block">
          <div className="activity-title">
               {fields.title}
           <p><small className="activity-time">
             <FaRegClock style={{marginRight: '0.5em'}}/>
             {fields.startTime} - {fields.endTime}</small>
           </p>
          </div>
           <div className="activity-desc ">
             <p className="activity-summary ">
               {fields.summary.length > 103 ? fields.summary.slice(0,100) + '...' : fields.summary}
             </p>    
           </div>
           <NavLink to={`${fields.slug}`}>
            <button className="learn-more medium-button button dark semi-rounded">
              Learn More
            </button>
           </NavLink>
         </div>
        </div>
      </div>
  )
}

export default AgendaItem