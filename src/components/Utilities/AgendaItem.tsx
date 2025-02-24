import { FaRegClock } from "react-icons/fa";
import '../../index.css'


function AgendaItem({ fields }:any) {

  return (

      <div className="backdrop semi-dark-border">
        <div className="container-outer">
          <div className="container-top-block">
            <img src="https://images.unsplash.com/photo-1703226741497-6de4f67c6e11?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width='100%' height='100%'/>
          </div>
          <div className="container-activity-block">
          <p className="activity-title">
               {fields.title}
             </p>
           <p>
             <FaRegClock style={{marginRight: '0.5em'}}/>
             {fields.startTime} - {fields.endTime}
           </p>
           <div className="activity-desc">
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