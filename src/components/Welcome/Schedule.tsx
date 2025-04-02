import { useContext, useState } from "react"
import { AppContext } from "../Layouts/DefaultLayout"
import { FaRegClock } from "react-icons/fa"
import { ExtractedActivity } from "../Layouts/DefaultLayout"

function Schedule() {

  type scheduleItem = {startTime: string, endTime: string, title: string}

  const firstDate:string = '8/4/2025'

  const [matchDate, setMatchDate] = useState(firstDate)


  function formateDateString(dateString:string){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const d = new Date(dateString)
    const month = months[d.getMonth()]
    const year = d.getFullYear()
    const dateOfMonth = d.getDate()
    return `${dateOfMonth} ${month} ${year}`
  }

  const activities:any = useContext(AppContext).schedule

  function ScheduleItem({ startTime, endTime, title }: scheduleItem){
    return(
      <div className="schedule-items">
        <p>
          <small className="activity-time grey-text">
            <FaRegClock style={{marginRight: '0.5em'}}/>
            {startTime} - {endTime}
          </small>
        </p>
        <p className="schedule-item-title">{title}</p>
      </div>
    )
  }

  
  const matchDays:any = [...(new Set(activities.map((activity:ExtractedActivity) => activity.startDate)))].sort()  
  
  const scheduleItems:ExtractedActivity[] = activities.filter((item:ExtractedActivity) => item.startDate === matchDate).sort(function(a:ExtractedActivity,b:ExtractedActivity){return(a.value - b.value)})

  function changeMatchDate(day:string){
    setMatchDate(day)
  }

  return (
    <div className="schedule-container">
      <div className="schedule-match-dates">
        {matchDays.map((day:any) => 
          <button 
            key={day}
            onClick={() => {changeMatchDate(day)}} 
            className={`schedule-md-btn button small-button rounded ${matchDate === day ? 'semi-dark' : 'transparent'}`}
            >{formateDateString(day)}</button>
        )}
      </div>
      <div>
        {scheduleItems.map((item) => {
          return(
            <ScheduleItem startTime={item.startTime} endTime={item.endTime} title={item.title} />
          )
        })}
      </div>
    </div>
  )
}

export default Schedule