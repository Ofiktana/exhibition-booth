import { useState, useEffect } from "react"
import { getAllDocsInCollection } from "../../config/firebase-config"
import { formatTimeString } from "../../pages/Learning"
import { data } from "../../pages/Learning"
import { FaRegClock } from "react-icons/fa"

function Schedule() {

  type scheduleItem = {startTime: string, endTime: string, title: string}

  const firstDate = '8/4/2025'

  const [programs, setPrograms] = useState([])
  const [matchDate, setMatchDate] = useState(firstDate)
  

  useEffect(() => {
    getAllDocsInCollection('programs').then((data:any) => {
      if(!data){return};
      setPrograms(data)
    })
  },[])

  function formateDateString(dateString:string){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const d = new Date(dateString)
    const month = months[d.getMonth()]
    const year = d.getFullYear()
    const dateOfMonth = d.getDate()
    return `${dateOfMonth} ${month} ${year}`
  }

  const activities = programs.map((program:data) => {
    return {
      id: program.id,
      startTime: formatTimeString((new Date(program.data.start.seconds * 1000)).toLocaleTimeString()),
      endTime: formatTimeString((new Date(program.data.end.seconds * 1000)).toLocaleTimeString()),
      title: program.data.title,
      startDate: (new Date(program.data.start.seconds * 1000)).toLocaleDateString(),
      value: (new Date(program.data.start.seconds * 1000)).valueOf(),
    }
  })

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

  
  const matchDays = [...(new Set(activities.map(activity => activity.startDate)))].sort()  
  
  const scheduleItems = activities.filter(item => item.startDate === matchDate).sort(function(a,b){return(a.value - b.value)})

  function changeMatchDate(day:string){
    setMatchDate(day)
  }

  return (
    <div className="schedule-container">
      <div className="schedule-match-dates">
        {matchDays.map(day => 
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