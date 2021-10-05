import React from "react";
import img from "./img.jpg";

const About = () => {
  return (
    <>
      <div className="about my-2">
        <h1>EasyLearn</h1>
        <h5>It is one biggest online platform for learning in Bangladesh.</h5>
        <h5>We do not compromise with the quality.</h5>
        <h5>We have taught more than 5000+ students through our platform.</h5>
        <h5>We also provide scolarship based on financial problem.</h5>
        <div>
          <img src={img} alt="" height="300px" width="500px" />
        </div>
      </div>
    </>
  );
};
export default About;
