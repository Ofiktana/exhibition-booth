import { FaRegClock } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { ExtractedActivity } from "../Layouts/DefaultLayout"

function CourseTitle(props:ExtractedActivity) {
  return (
    <div className="w-full h-full  text-lg flex flex-col gap-2 justify-center">
      <h2 className="text-(--primary-green-dark) font-bold">
        {props.title}
      </h2>
      <div className="flex justify-start gap-8">
        <small className="text-(--primary-grey) font-semibold flex items-center gap-2">
          <FaRegClock /> {props.startTime} - {props.endTime}
        </small>
        <small className="text-(--primary-grey) font-semibold flex items-center gap-2">
          <MdOutlineSignalCellularAlt /> Beginner
        </small>
      </div>
    </div>
  )
}

export default CourseTitle