import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import CourseDetails from "../components/Course/CourseDetails"
import { AppContext } from '../components/Layouts/DefaultLayout'
import { ExtractedActivity } from '../components/Layouts/DefaultLayout'

function LearningCourse() {
  const params:any = useParams().slug
  const activities = useContext(AppContext).learning

  const activity:any = activities.find((activity:ExtractedActivity) => activity.slug === params)

  return (
    <CourseDetails {...activity} />
  )
}

export default LearningCourse