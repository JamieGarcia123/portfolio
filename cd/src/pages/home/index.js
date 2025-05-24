import './homepage.css'
import Logos from "../../components/logos/logos";
import video from "../../assests/images/home-video-clip.mp4"
import { Helmet } from 'react-helmet';
import ogImage from "../../assests/images/cooltechbg.webp";


const responsive = {
  desktop: {
    breakpoint: { max: 6000, min: 1024 },
    items: 6
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
const HomePage = () => {
    return(
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Jamie Garcia | Software Developer</title>
                <meta property="og:image" content={ogImage}/>
            </Helmet>
            <header className="homeHeroContainer">

            <video playsinline autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>    
            </header> 
            <section >
              <Logos responsive={responsive} centered={true} title="Skills"/>
           
              <div className='row home-font gradientBG'>
                <div className='col2'>
                  <div id="slide" className='text-left'>
                      <h1>Jamie Garcia</h1>
                      <h2>Software Developer</h2>
                 
                   </div> 
                   <div style={{padding: '0 20px', width: '80%'}}>
                    <h3 style={{color: '#66fcf1'}}>Let's Build Something Great Together</h3>
                    <p>Explore my portfolio to see examples of my work and the impact I've made for clients across various industries.<br/>If you're ready to take your web presence to the next level, <a href="#contact">let's connect</a> and discuss how I can assist you.</p>
                  </div>
                </div>
                <div className='col2 center-items text-center padding-25'>
                  <section>
                    <h3 style={{color: '#66fcf1'}}>What I Do</h3>
                    <ul style={{ textAlign: 'left', padding: 0, color: '#fff' }}>
                      <li>Custom Web Development: Tailored solutions using modern technologies to meet your unique business needs.</li>
                      <li>Responsive Design: Ensuring your website delivers an optimal experience on any device.</li>
                      <li>Performance Optimization: Implementing best practices to enhance speed and efficiency.</li>
                      <li>SEO Best Practices: Structuring content and code to improve search engine visibility.</li>
                      <li>Ongoing Support: Providing maintenance and updates to keep your site running smoothly.</li>
                    </ul>
                  </section>
                  <section>
                    <h3 style={{color: '#66fcf1'}}>My Approach</h3>
                    <p>I believe in a collaborative process that starts with understanding your goals and challenges. From there, I design and develop solutions that align with your vision and deliver measurable results. Whether you're a startup looking to establish an online presence or an established business aiming to enhance your digital footprint, I'm here to help.</p>
                  </section>
                </div>
              </div> 
            </section>
        </>
    )
}

export default HomePage;