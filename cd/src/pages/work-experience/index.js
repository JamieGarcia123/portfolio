
import "./work-experience.css"
import { joblist } from "../../api/workhistory";
import Logos from "../../components/carousel";

const WorkExperience = () => {

    return (
    <div id="workExperienceBackground">
        <section id="workExperience" className="container">
            <div className="col2">
            {joblist.map((job) => 
            <div>
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
         
        </section>   <Logos title={"Skills"}/>  
    </div>
    )
}

export default WorkExperience;



