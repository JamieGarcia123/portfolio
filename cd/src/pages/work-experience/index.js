
import { useEffect, useState } from "react";
import "./work-experience.css"
import { joblist } from "../../api/workhistory";
import Logos from "../../components/logos/logos.js";
import { Helmet } from "react-helmet";
import resume from "../../assets/images/Resume.pdf"

const responsive = {
    desktop: {
      breakpoint: { max: 6000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

const WorkExperience = () => {


const colors = ['#ffffff', '#cecece', '#008000', '#FF0000', '#800080', '#e83d90', '#3d90e8', '#903de8', '#90e83d', '#3d903d', '#e83d3d'];
const [bgColor, setBgColor] = useState(colors[0]);

  function ColorChanger() {
      var randomIndex = Math.floor(Math.random() * colors.length);
      
      while (randomIndex === 0) {
        randomIndex = Math.floor(Math.random() * colors.length)
      }
      setBgColor(colors[randomIndex]);
      return;

    };

  
    return (
        <>
        <Helmet>
            <title>Jamie Garcia | Work Experience</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="keywords" content="Website developer, React developer, Software Engineer, Front-End Developer, web developer"/>
            <meta name="description" content="Jamie's educational background includes a B.S. in Software Engineering along with other related Certifications."/ >
        </Helmet>
        <header id="workExperienceBackground" className="hero">
            <div className="overlay">
                <div className='heroContainer'>
                    <div className='text-center'>
                        <h1>Work experience</h1>
                    </div>
                </div>
            </div>
        </header>
        <section className="">
        <Logos responsive={responsive} centered={false} title={"Skills"} />
        </section>
        <section id="workExperience"  style={{backgroundColor: bgColor}}>
            <div className="container">
                <div className="col2">
                <button className="colorCTA" onClick={() => ColorChanger()}>Change Color</button>
                {joblist.map((job) => 
                <div key={job.id}>
                    <h2>{job.company}</h2>
                    <h3>{job.title}</h3>
                   <div> <p>{job.start} -</p>
                    {job?.end ? <p>{job.end}</p> : <p>Present</p>}</div>
                    <p>{job.description}</p>

                </div>
                )}
                </div>
            </div>
            <div className="col2"><a style={{color: '#000000'}} href={resume} download><u>&#8595;</u>Download my resume</a> 
                <div className="resumeCard"> 
                    <div className="resumeCard-inner">
                        <div className="resumeCard-front"></div>
                        {/* <div className="resumeCard-back"></div> */}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default WorkExperience;



