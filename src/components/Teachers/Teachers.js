import React, { useEffect, useState } from "react";
import TeacherProfile from "../TeacherProfile/TeacherProfile";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("./teachers.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);
  return (
    <>
      <div>
        <h2>Our Respected Teachers</h2>
        {teachers.map((teacher) => (
          <TeacherProfile teacher={teacher}></TeacherProfile>
        ))}
      </div>
    </>
  );
};
export default Teachers;
