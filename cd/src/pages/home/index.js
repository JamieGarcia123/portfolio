import './homepage.css'
import avatar from "../../assests/images/headshot.jpg"

const HomePage = () => {
    return(
        <>
            <header className="homeHero">
                <div className='homeHeroContainer'>
                    <div className='col2'>
                        <img width={250} height={250} src={avatar} alt='Headshot of Software Engineer Jamie Garcia.'/>
                    </div>
                    <div id="home" className='col2 text-center'>
                        <h1>Jamie Garcia</h1>
                        <h2 >Software Developer</h2>
                    </div>
                </div>

            </header>
            <section className="container">
                <div className="innerContent text-center">
                    <div className='col2'>
                        <p>A motivated Web Developer with 5 years of experience in JavaScript frameworks (Vue.js, React.js, TypeScript) and web development. Skilled in WordPress (Elementor, Avada), HTML, CSS/SASS, and REST APIs. Familiar with Python, C#, SQL, and Agile project management. Currently pursuing a Bachelor’s in Computer Science at WGU.</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default HomePage;