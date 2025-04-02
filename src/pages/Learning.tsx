import { useContext } from "react"
import AgendaItem from "../components/Utilities/AgendaItem"
import TitleText from "../components/Utilities/TitleText"
import { AppContext } from "../components/Layouts/DefaultLayout"
import { ExtractedActivity } from "../components/Layouts/DefaultLayout"

function Learning() {

    const activities:any  = useContext(AppContext).learning

    const activityDaysSet = new Set(activities.map((activity:ExtractedActivity) => activity.startDate))

    const activityDays:any = [...activityDaysSet].sort()

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    
    const activitiesEl = activityDays.map((day:any) => {
      const d = new Date(day)
      const month = months[d.getMonth()]
      const dayOfWeek = weekdays[d.getDay()]
      const dateOfMonth = d.getDate()
      const dailyActivities:ExtractedActivity[] = activities.filter((activity:ExtractedActivity) => activity.startDate === day).sort(function(a:ExtractedActivity,b:ExtractedActivity){return a.value - b.value})

      return (
        <>
          <div className="agenda-day" key={d.toDateString()}>
            <h3>{dayOfWeek}</h3>
            <p>{month} {dateOfMonth}</p>
          </div>

          {dailyActivities.map(program => <AgendaItem key={program.id} fields={program} />)}
        </>
      )

    })



  return (
    <div className="main-bg-light min-h-screen">
      <div id="agenda-root"  className='main-bg-light max-width-1200px'>
        <TitleText left='Learning' right='Programs' />

        {activitiesEl}

      </div>
    </div>
  )
}

export default Learning