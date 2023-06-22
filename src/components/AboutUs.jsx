import React from 'react'
import "../css/aboutus.css";

function AboutUs() {
  return (
    <div className="homepage-maincontainer">
      <div className="homepage-container">
        <div className="profile-container">
          <img src="john.jpg" alt="requestimg" />
          <p>John Bagares</p>
          <p>Back End</p>
       
        </div>
        <div className="profile-container">
          <img src="ivan.jpg" alt="requestimg" />
          <p>Ivan Ladera</p>
          <p>Front End</p>
       
        </div>
        <div className="profile-container">
          <img src="jarius.png" alt="requestimg" />
          <p>Jarius Macalaguing
            asd
          </p>
          <p>System and Web Design</p>
         
        </div>
      </div>
    </div>
  )
}

export default AboutUs
