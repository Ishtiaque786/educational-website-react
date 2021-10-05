import React from "react";
import { Carousel } from "react-bootstrap";

import FourCoursesInHome from "../FourCoursesInHome/FourCoursesInHome";
import HomeCourses from "../HomeCourses/HomeCourses";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import "./Home.css";

const Home = () => {
  // const { name, img, fee, duration, prerequsite } = props.course;

  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className=" w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h3>Louis Pasteur</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-100" src={img2} alt="Second slide" />

            <Carousel.Caption>
              <h3> Rick Cook </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" w-100" src={img3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Carl Sagan</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="my-3">
          <HomeCourses></HomeCourses>
        </div>
      </div>
    </>
  );
};
export default Home;
