
import "./work-experience.css"
import { joblist } from "../../api/workhistory";
import Logos from "../../components/carousel";

const WorkExperience = () => {

    return (
            <><header id="workExperienceBackground" className="hero">
            <div className='heroContainer'>
                <div className='text-center'>
                    <h1>Work experience</h1>
                </div>
            </div>
        </header>
        <div><Logos title={"Skills"} /></div>
            <section id="workExperience" className="container">
                <div className="col2">
                    {joblist.map((job) => <div>
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



