import './homepage.css'
import avatar from "../../assests/images/placeholder.jpg"

const HomePage = () => {
    return(
        <>
            <header className="homeHero">
                <div className='homeHeroContainer'>
                    <div className='col2'>
                        <img width={450} height={450} src={avatar} alt='Headshot of Software Engineer Jamie Garcia.'/>
                    </div>
                    <div className='col2'>
                        <h1 id="home">Jamie Garcia</h1>
                        <h2>Software Developer</h2>
                    </div>
                </div>

            </header>
            <section className="container">
                <div className="innerContent">

                </div>

            </section>
        </>
    )
}

export default HomePage;