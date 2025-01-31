import { FaRegClock } from "react-icons/fa";
import './AgendaItem.css'


function AgendaItem({ fields }:any) {

  return (

      <div className="backdrop">
        <div className="container-outer">
          <div className="container-time-block">
            <h3 className="time-text">
              {fields.startTime}
            </h3>
            <p className="timezone-text"><small>Lagos/West Africa</small></p>
          </div>
          <div className="container-activity-block">
           <p>
             <FaRegClock style={{marginRight: '0.5em'}}/>
             {fields.startTime} - {fields.endTime}
           </p>
           <div className="activity-desc">
             <p className="activity-title">
               {fields.title}
             </p>
             <p className="activity-summary">
               {fields.summary}
             </p>
           </div>
         </div>
        </div>
        
      </div>
  )
}

export default AgendaItem