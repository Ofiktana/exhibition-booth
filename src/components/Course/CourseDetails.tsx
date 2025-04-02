import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import CourseSummary from "./CourseSummary";
import CourseTitle from "./CourseTitle";
import { ExtractedActivity } from "../Layouts/DefaultLayout";


function CourseDetails(props:ExtractedActivity) {
  
  return (
    <div className="min-h-screen w-screen bg-(--primary-green-light)">
      <div className="cdp-container">
        {/* Button for back to Learning Programs */}
        <div className="flex justify-end returnToLearning font-semibold text-(--primary-green-dark)">
          <NavLink
            to="/learning"
            className={"flex items-center text-lg justify-center gap-1 w-48 h-8"}
          >
            <MdKeyboardDoubleArrowLeft className="text-2xl" /> Learning Programs
          </NavLink>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 max-w-[1280px]">
          <div
            className="course-details-container-1 
            w-full flex flex-col sm:flex-col-reverse gap-5 items-center justify-start sm:justify-end mt-2"
          >
            {/* Course Image */}
            <div className="course-image-container h-auto w-11/12 rounded-2xl">
              <img 
                src={props.imageURL} 
                alt="course-image"
                className="w-full rounded-2xl"
              />
            </div>

            {/* Course Title */}
            <div className="cdp-course-title w-11/12 h-40">
              <CourseTitle {...props} />
            </div>
          </div>
          <div className="course-details-container-2 flex h-auto flex-col sm:flex-col-reverse items-center w-full gap-5 justify-around">
            
            {/* Course Summary */}
            <div className="cdp-course-summary h-full w-11/12 sm:w-full rounded-2xl">
              <CourseSummary {...props} />
            </div>

            {/* Course Instructor */}
            {/* <div className="cdp-course-instructor w-11/12 h-3/12"></div> */}
          </div>
        </div>
      </div>
      <div className="buttons-container flex flex-col sm:flex-row items-center justify-around sm:justify-end xl:justify-center xl:gap-8 sm:gap-4 h-40 w-full">
        <button className="button dark semi-rounded large-button">Download Presentation Slides</button>
        <button className="button semi-dark semi-rounded large-button">Attempt Quiz</button>
      </div>

    </div>
  );
}

export default CourseDetails