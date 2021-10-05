import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer gt-3 mt-3 p-3 ">
        <h3>We deliver best course in Bangladesh.</h3>
        <h5>So, Make hurry and enroll in our courses.</h5>
        <div className="social-media-icons">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-instagram-square"></i>
          <i class="fab fa-linkedin-in"></i>
        </div>
        <h5>
          All rights reserved goes to ©
          <span class="copyright">Ishtiaque Mahmud Rakib 2021</span>
        </h5>
      </div>
    </>
  );
};
export default Footer;
