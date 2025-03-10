
import { Helmet } from "react-helmet";
import Carousel from "react-multi-carousel"
import{ certifications } from "../../api/certification"
import { educationalItems } from "../../api/education"
import React, { useState, useEffect, useRef } from 'react';
import "./education.css"

const responsive = {

  desktop: {
    breakpoint: { max: 4000, min: 680 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 680, min: 0 },
    items: 1
  }
};


const EducationPage = () => {

  return (
      <>
     <Helmet>
        <title>Jamie Garcia | Education</title>
        <meta name="keywords" content="Website developer, React developer, Software Engineer, Front-End Developer, web developer"/>
        <meta name="description" content="Jamie's educational background includes a B.S. in Software Engineering along with other related Certifications."/ >
      </Helmet>
      <header id="educationBackground" className="hero">
          <div className="overlay">  
            <div className='heroContainer'>
                <div className='text-center'>
                    <h1>Education</h1>
                </div>
            </div>
          </div>
        </header>

          <section id="education" className="certContainer">
            <div className="col2">
              <div className="certContent padding-25 ">
                {educationalItems.map(item => (
                    <div key={item.id} className="certContent">
                      <h3><strong>{item.school}</strong></h3>
                      <p>{item.dates}</p>
                      <p>{item.degree}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          <div className="col2 text-center">
          <h2>Certifications</h2>
           <Carousel responsive={responsive} >
          {certifications.map(cert => (
              <div key={cert.id} className="certCard">
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
            )
          )}
          </Carousel>
          </div>
        </section>
      </>
  );
}

export default EducationPage;



