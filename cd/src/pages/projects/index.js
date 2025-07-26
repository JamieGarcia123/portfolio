
import { Helmet } from "react-helmet";
import "./projects.css"

const Projects = () => {
  return (
      <>
      <Helmet>
        <title>Jamie Garcia | Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
             <p>    This collection showcases a range of projects that reflect my skills in web development, design, and problem-solving. From personal experiments to real-world client work, each project demonstrates my commitment to creating responsive, accessible, and visually engaging digital experiences. Whether working solo or collaborating with a team, I focus on writing clean, maintainable code and delivering solutions that meet both user needs and business goals.
</p> <h2 className="col1">Websites</h2>
          
          <div className="row">
            <div className="col3">
              <p><a href="https://tourmaline-florentine-a1765f.netlify.app/" target="_blank">Holistic Service Proof Of Concept</a></p>
                <div> 
                  <p>Site using newest React/Vite with Supabase Backend!</p>
                  <ul>Skills portrayed in project:
                    <li>HTML</li>
                    <li>Tailwind CSS</li>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Unit Testing</li>
                    <li>Netlify Pages hosting</li>
                    <li>Supabase Backend</li>
                    <li>CRUD Database Operations</li>
                  </ul>
                </div>
            </div>
            <div className="col3">
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
            <div className="col3">
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
            </div>
            <div className="row">
            <div className="col2">
              <h3>Other sites</h3>
                <div> 
                  <ul>
                    <li>Kensho</li>
                    <li>Just Salad</li>
                    <li><a traget="_blank" href="https://mightydeposits.com/find-banks#/find?cause=all&page=1">Mighty Deposits</a></li>
                  </ul>
                </div>
           
            </div>
                 <div className="col2"> 
                  <h3>Word Press Sites</h3>
                  <ul>
                    <li><a target="_blank" href="https://xpresswellnessurgentcare.com/">Xpress Wellness</a></li>
                    <li><a target="_blank" href="https://integrityuc.com/">Integrity</a></li>
                    <li><a targe="_blank" href="https://wixonbathworks.org/">Wixon Bath</a></li>
                    <li><a target="_blank" href="https://gavii.ai/">Gavii</a></li>
                    <li><a target="_blank" href="https://carolenneking.com/">Carol Enneking</a></li>
                    <li><a target="_blank" href="https://smokenmemories.com/">Smoke & Memories</a></li>
                  </ul>
                </div>
            
          </div> 
        </section>  
        <aside className="container row" style={{marginBottom: "10px"}}>
          <div className="col1"><h2>Sandbox</h2></div>
        </aside>
        <aside className="container row" style={{marginBottom: "50px"}}>         
           <div className="col2">  
            <p>Date Countdown timer using React Hooks.</p>
              <ul>Skills portrayed in project:
                <li>React/React Hooks</li>
              </ul>
              <iframe src="https://codesandbox.io/embed/zrvxdp?view=editor+%2B+preview&hidenavigation=1"
                className="iFrameSandbox"
                title="zen-sky-zrvxdp"
                allow="accelerometer; encrypted-media; hid;"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              >
              </iframe>
          </div>
          <div className="col2">  
            <p>Tic Tac Toe.</p>
              <ul>Skills portrayed in project:
              <li>Python</li>
              </ul>
              <iframe src="https://codesandbox.io/p/devbox/gfwvxv?embed=1&file=%2Fmain.py"
              className="iFrameSandbox"
              title="tic-tac-toe"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              >
              </iframe>
          </div>
        </aside>
      </>
  );
}

export default Projects;



