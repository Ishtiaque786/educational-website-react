import React, { useEffect, useState } from "react";
import FourCoursesInHome from "../FourCoursesInHome/FourCoursesInHome";

const HomeCourses = () => {
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
        {courses.slice(0, 4).map((course) => (
          <FourCoursesInHome
            key={course.key}
            course={course}
          ></FourCoursesInHome>
        ))}
      </div>
    </>
  );
};
export default HomeCourses;
