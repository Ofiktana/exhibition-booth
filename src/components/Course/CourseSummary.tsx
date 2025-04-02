import { ExtractedActivity } from "../Layouts/DefaultLayout"

function CourseSummary(props:ExtractedActivity) {
  return (
    <div className='w-full h-full bg-inherit flex flex-col gap-2'>
      <h3 className='text-(--primary-green-dark) font-semibold'>Description</h3>
      <p className="text-(--primary-grey) text-justify">{props.paragraphOne}</p>
      <p className="text-(--primary-grey) text-justify">{props.paragraphTwo}</p>
      <p className="text-(--primary-grey) text-justify">{props.paragraphThree}</p>
    </div>
  )
}

export default CourseSummary