import './homepage.css'
import Logos from "../../components/logos/logos";
import codePic from "../../assests/images/certcardcode.webp"
import { Helmet } from 'react-helmet';


const responsive = {
  desktop: {
    breakpoint: { max: 6000, min: 1024 },
    items: 3
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
                <title>Jamie Garcia | Software Developer</title>
            </Helmet>
            <header id="homeHero" className="hero">
                <div className='heroContainer'>
                    <div id="home" className='col1 text-center'>
                        <h1>Jamie Garcia</h1>
                        <h2>Software Developer</h2>
                    </div>
                </div>
            </header>
            <section id="homeContent" className="container">
                <div className='col3 center-items text-center padding-25'>
                    <h3 className='no-margin'>Welcome!</h3>
                    <p>A motivated Web Developer with 5 years of experience in JavaScript frameworks such Vue.js with Nuxt, React with and without NextJs. Familiar with TypeScript, Redux and Angular.</p>
                    <p>Also experienced in C# and .Net Object Oriented projects. Skilled in WordPress (Elementor, Avada, WooCommerce), HTML, CSS, SCSS, TailWinds CSS, Bootstrap, and REST APIs. Strong background in mobile responsivenss. Familiar with Python, C#, SQL, and Agile project management.</p>
                    <p> Have worked with workflows in Jira, Monday and Microsoft Teamworks. Am efficient in Remote settings.</p>                        
                    <p>Currently pursuing a Bachelor’s in Computer Science at WGU.</p>
                </div>
                <div className='col2-3 text-center'>
                    <img className='m-auto codeImg' alt="Screen shot of code used for this site." src={codePic} height={300} width={800}/>
                    <Logos responsive={responsive} centered={true} title="Skills"/>
                </div>
            </section>
        </>
    )
}

export default HomePage;