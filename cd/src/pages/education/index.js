

import{ certifications } from "../../api/certification"
import { educationalItems } from "../../api/education"
import React, { useState, useEffect, useRef } from 'react';

import "./education.css"
import Carousel from "../../components/carousel";


// Certification carousel


const EducationPage = () => {

  return (
      <>
      <head>
        <title>Jamie Garcia | Education</title>
        <meta name="keywords" content="Website developer, React developer, Software Engineer, Front-End Developer, web developer"/>
        <meta name="description" content="Jamie's educational background includes a B.S. in Software Engineering along with other related Certifications."/ >
      </head>
      <div id="educationBackground">
          <section id="education" className="certContainer">
            <h1>Education</h1>
            <div className="certContent">
              {educationalItems.map(item => (
                <>
                  <div className="certContent">
                    <h3><strong>{item.school}</strong></h3>
                    <p>{item.dates}</p>
                    <p>{item.degree}</p>
                  </div>
                </>)
              )}
            </div>

          <h2>Certifications</h2>
       
          {certifications.map(cert => (
            <>
              <div className="certCard">
                <div className="certCard-inner">

                  <div className="certCard-front brdrlft">
                    <div>
                      <h3 className="brdrbtm h3title"><span>{cert.name}</span></h3>
                      <p className="brdrbtm brdrbtm-height"><span>{cert.distributor}</span></p>
                      {cert?.issued ? <p className="brdrbtm brdrbtm-height"><span>Issued: {cert.issued}</span></p> : <p className="brdrbtm"><span>''</span></p>}
                      {cert?.expiration ? <p className="brdrbtm brdrbtm-height"><span>Expires: {cert.expiration}</span></p> : <p className="brdrbtm"><span>Expires: Does not expire.</span></p>}
                      <p className="brdrbtm brdrbtm-height"></p>
                      <p className="brdrbtm brdrbtm-height"></p>
                      <p className="brdrbtm brdrbtm-height"></p>
                      <p className="brdrbtm brdrbtm-height"></p>

                    </div>
                  </div>
                  <div className="certCard-back"><div id={cert.id}></div>
                  </div>

                </div>
              </div>
            </>)
          )}
        </section>
      </div></>
  );
}

export default EducationPage;



