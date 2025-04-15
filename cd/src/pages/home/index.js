import './homepage.css'
import Logos from "../../components/logos/logos";
import video from "../../assests/images/home-video-clip.mp4"
import { Helmet } from 'react-helmet';


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
    items: 1
  }
};
const HomePage = () => {
    return(
        <>
            <Helmet>
                <title>Jamie Garcia | Software Developer</title>
            </Helmet>
            <video playsinline autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>   
                <section id="homeHero" className="homeHeroContainer">
                <div className='row container '>
                    <div className='col1'>
                   <Logos responsive={responsive} centered={true} title="Skills"/>
                   </div>
                   </div>
                   <div className='row  home-font gradientBG '>
                   <div  id="slide" className='text-left'>
                        <h1>Jamie Garcia</h1>
                        <h2>Software Developer</h2>
                    </div> 
                    <div className='col2 center-items text-center padding-25'>
                        <p>A motivated Web Developer with 5 years of experience in JavaScript frameworks such Vue.js with Nuxt, React with and without NextJs. Familiar with TypeScript, Redux and Angular.</p>
                        <p>Also experienced in C# and .Net Object Oriented projects. Skilled in WordPress (Elementor, Avada, WooCommerce), HTML, CSS, SCSS, TailWinds CSS, Bootstrap, and REST APIs. Strong background in mobile responsivenss. Familiar with Python, C#, SQL, and Agile project management.</p>
                        <p> Have worked with workflows in Jira, Monday and Microsoft Teamworks. Am efficient in Remote settings.</p>                        
                        {/* <img className='m-auto codeImg' alt="Screen shot of code used for this site." src={codePic} height={300} width={800}/> */}
                    </div> 
                </div> 
            </section>
        </>
    )
}

export default HomePage;