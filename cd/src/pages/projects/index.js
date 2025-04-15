
import { Helmet } from "react-helmet";
import "./projects.css"

const Projects = () => {
  return (
      <>
      <Helmet>
        <title>Jamie Garcia | Projects</title>
        <meta name="keywords" content="Website developer, React developer, Software Engineer, Front-End Developer, web developer, wordpress developer" />
        <meta name="description" content="Jamie's background includes a B.S. in Software Engineering along with other related Certifications." />
      </Helmet>
      <header id="projectsBackground" className="hero">
            <div className="overlay">
                <div className='heroContainer'>
                    <div className='text-center'>
                        <h1>Projects</h1>
                    </div>
                </div>
            </div>
        </header>
        <section id="projects" className="container">
            <h2 className="col1">Websites</h2>
          <div className="row">
            <div className="col2">
              <p>JamieGarcia.dev</p>
                <div> 
                  <p>Site is used to market myself</p>
                  <ul>Skills portrayed in project:
                    <li>HTML</li>
                    <li>CSS and Mobile Responsiveness</li>
                    <li>React</li>
                    <li>React-Dom</li>
                    <li>React Router</li>
                    <li>React Multi Carousel - plugin</li>
                    <li>Github Pages hosting</li>
                    <li>Cloudflare SSL</li>
                  </ul>
                </div>
            </div>
            <div className="col2">
              <p><a href="https://cubscoutspack233.org/" target="_blank">Cub Scouts Pack 233 static site</a></p>
                <div> 
                  <p>Site is used to market a local Cub Scout pack for parents/guardians of children 5-11 or K-5th Grade.</p>
                  <ul>Skills portrayed in project:
                    <li>HTML</li>
                    <li>SEO</li>
                    <li>CSS and Mobile Responsiveness</li>
                    <li>Github Pages hosting</li>
                    <li>Cloudflare SSL</li>
                    <li>Instagram embed</li>
                    <li>External and internal links</li>
                  </ul>
                </div>
            </div>
            <div className="col2">
              <p>Other sites</p>
                <div> 
                  <ul>
                    <li>Kensho</li>
                    <li>justsalad.com</li>
                    <li>mightydeposits.com</li>
                  </ul>
                </div>
            </div>
          </div> 
        </section>
           
       
        <aside className="container col1" style={{marginBottom: "50px"}}>
        <h2>Sandbox</h2>
            <p>Date Countdown timer using React Hooks.</p>
              <ul>Skills portrayed in project:
                <li>React</li>
                <li>Typescript</li>
                <li>React Hooks</li>
                <li>HTML</li>
              </ul>
        <iframe src="https://codesandbox.io/embed/zrvxdp?view=editor+%2B+preview&hidenavigation=1"
              className="iFrameSandbox"
              title="zen-sky-zrvxdp"
              allow="accelerometer; encrypted-media; hid;"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
        </aside>
      </>
  );
}

export default Projects;



