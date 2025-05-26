
import { Helmet } from "react-helmet";
import { educationalItems } from "../../api/education"
import "./education.css"
import Certs from "../../components/certifications/certifications.js";

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
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="keywords" content="Website developer, React developer, Software Engineer, Front-End Developer, web developer" />
      <meta name="description" content="Jamie's educational background includes a B.S. in Software Engineering along with other related Certifications." />
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
             <p>My journey into web development began as a self-taught learner, driven by curiosity and a desire to create interactive, meaningful digital experiences. Through countless hours of exploring online resources, building small projects, and experimenting with code, I developed a strong foundation in web technologies and problem-solving. This passion eventually led me to pursue a formal education at <strong>Western Governor's University</strong>, where I earned a <strong>Bachelor of Science in Software Engineering</strong> Combining hands-on experience with academic training has given me a well-rounded skill set that blends creativity with technical precision, allowing me to build user-focused, visually compelling, and high-performing web applications.
</p>

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
          <Certs responsive={responsive} title={"Certifications"}/>
        </div>
      </section>
    </>
  );
}

export default EducationPage;



