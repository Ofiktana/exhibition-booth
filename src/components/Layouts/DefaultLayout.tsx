import Header from '../NavHeader/Header'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react'
import { getAllDocsInCollection } from "../../config/firebase-config"

export type ActivityData = {
  start : {
    seconds : number,
    nanoseconds: number
  },
  end : {
    seconds : number,
    nanoseconds: number
  },
  title : string,
  summary : string,
  imageURL: string,
  learning: boolean,
  paragraphOne: string,
  paragraphTwo: string,
  paragraphThree: string,
  slug: string
}

export type LearningProgramData = {
  id : string,
  data : ActivityData
}

export type ExtractedActivity = {
  id: string,
  startTime: string,
  endTime: string,
  title: string,
  summary: string,
  startDate: string,
  value: number,
  imageURL: string,
  slug: string,
  paragraphOne: string,
  paragraphTwo: string,
  paragraphThree: string
}

export function formatTimeString(text:string){
  return (text.slice(0,-2)).slice(0,-4) + ' ' + text.slice(-2).toLowerCase()
}

const AppContext = createContext({learning: [], schedule: []})

function DefaultLayout() {

  const [programs, setPrograms] = useState([])
  const currentPath = useLocation().pathname

  useEffect(() => {
    getAllDocsInCollection('programs').then((data:any) => {
      if(!data){return};
      setPrograms(data)
    })
  },[])

  useEffect(() => {
    window.scrollTo(0,0)
  },[currentPath])

  const learningActivities:any = programs.filter((program:LearningProgramData) => program.data.learning).map((program:LearningProgramData) => {
    return {
      id: program.id,
      startTime: formatTimeString((new Date(program.data.start.seconds * 1000)).toLocaleTimeString()),
      endTime: formatTimeString((new Date(program.data.end.seconds * 1000)).toLocaleTimeString()),
      title: program.data.title,
      summary: program.data.summary,
      startDate: (new Date(program.data.start.seconds * 1000)).toLocaleDateString(),
      value: (new Date(program.data.start.seconds * 1000)).valueOf(),
      imageURL: program.data.imageURL,
      slug: program.data.slug,
      paragraphOne: program.data.paragraphOne,
      paragraphTwo: program.data.paragraphTwo,
      paragraphThree: program.data.paragraphThree
    }
  })

  const fullSchedule:any = programs.map((program:LearningProgramData) => {
    return {
      id: program.id,
      startTime: formatTimeString((new Date(program.data.start.seconds * 1000)).toLocaleTimeString()),
      endTime: formatTimeString((new Date(program.data.end.seconds * 1000)).toLocaleTimeString()),
      title: program.data.title,
      startDate: (new Date(program.data.start.seconds * 1000)).toLocaleDateString(),
      value: (new Date(program.data.start.seconds * 1000)).valueOf(),
    }
  })

  return (
    <AppContext.Provider value={{learning: learningActivities, schedule: fullSchedule}}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AppContext.Provider>
  )
}

export default DefaultLayout
export { AppContext }