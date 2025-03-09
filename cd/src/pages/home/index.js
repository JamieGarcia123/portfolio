import './homepage.css'
import avatar from "../../assests/images/headshot.jpg"
import Logos from "../../components/carousel";
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
                <div className='col2 center-items text-center padding-25'>
                    <h3 className='no-margin'>Welcome!</h3>
                    <p>A motivated Web Developer with 5 years of experience in JavaScript frameworks (Vue.js, React.js, TypeScript) and web development. Skilled in WordPress (Elementor, Avada), HTML, CSS/SASS, and REST APIs. Familiar with Python, C#, SQL, and Agile project management. Currently pursuing a Bachelor’s in Computer Science at WGU.</p>
                </div>
                <div className='col2'>
                    <Logos responsive={responsive} centered={true} title="Skills"/>
                </div>
            </section>
        </>
    )
}

export default HomePage;