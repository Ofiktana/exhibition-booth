import { useState, useEffect } from "react"
import { getAllDocsInCollection } from "../../config/firebase-config"
import AgendaItem from "./AgendaItem"

type data = {
  id : string,
  data : {
    start : {
      seconds : number,
      nanoseconds: number
    },
    end : {
      seconds : number,
      nanoseconds: number
    },
    title : string,
    summary : string
  }
}



function Agenda() {

    const [programs, setPrograms] = useState([])

    useEffect(() => {
      getAllDocsInCollection('programs').then((data:any) => {
        if(!data){return};
        setPrograms(data)
      })
    },[])

    const activities = programs.map((program:data) => {
      return {
        id: program.id,
        startTime: (new Date(program.data.start.seconds * 1000)).toLocaleTimeString(),
        endTime: (new Date(program.data.end.seconds * 1000)).toLocaleTimeString(),
        title: program.data.title,
        summary: program.data.summary,
        startDate: (new Date(program.data.start.seconds * 1000)).toDateString(),
        value: (new Date(program.data.start.seconds * 1000)).valueOf()
      }
    })

    const activityDaysSet = new Set(activities.map(activity => activity.startDate))

    const activityDays = [...activityDaysSet].sort()

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    
    const activitiesEl = activityDays.map((day) => {
      const d = new Date(day)
      const month = months[d.getMonth()]
      const dayOfWeek = weekdays[d.getDay()]
      const dateOfMonth = d.getDate()
      const dailyActivities = activities.filter(activity => activity.startDate === day).sort(function(a,b){return a.value - b.value})

      return (
        <>
          <div className="agenda-day">
            <h3>{dayOfWeek}</h3>
            <p>{month} {dateOfMonth}</p>
          </div>

          {dailyActivities.map(program => <AgendaItem key={program.id} fields={program} />)}
        </>
      )

    })

    console.log(activityDays)



  return (
    <div id="agenda-root">
      <h2 className="page-title">
        Schedule
      </h2>

      {activitiesEl}

    </div>
  )
}

export default Agenda