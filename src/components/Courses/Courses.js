import React, { useEffect, useState } from "react";
import CourseInfo from "../CourseInfo/CourseInfo";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>
      <div>
        <h2>
          {" "}
          <span className="tag">Our Courses for you</span>
        </h2>
        <h4>
          We have best courses here to make you professional in the IT sector.
        </h4>
        {courses.map((course) => (
          <CourseInfo course={course}></CourseInfo>
        ))}
      </div>
    </>
  );
};
export default Courses;
