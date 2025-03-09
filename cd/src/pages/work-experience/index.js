
import "./work-experience.css"
import { joblist } from "../../api/workhistory";
import Logos from "../../components/carousel";
import { Helmet } from "react-helmet";


const responsive = {
    desktop: {
      breakpoint: { max: 6000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const WorkExperience = () => {

    return (
        <>
        <Helmet>
            <title>Jamie Garcia | Work Experience</title>
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
        <section id="workExperience" className="container">
            <div className="col2">
                {joblist.map((job) => 
                <div key={job.id}>
                    <h2>{job.company}</h2>
                    <h3>Position: {job.title}</h3>
                    <p>Start Date: {job.start}</p>
                    {job?.end ? <p>End Date: {job.end}</p> : <p>End Date: Still employeed with</p>}
                    <p>{job.description}</p>

                </div>
                )}
            </div>
            <div className="col2">
                <div className="resumeCard">
                    <div className="resumeCard-inner">
                        <div className="resumeCard-front"></div>
                        <div className="resumeCard-back"></div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default WorkExperience;



