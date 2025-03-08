
import "./projects.css"

const Projects = () => {
  return (
      <>
      <head>
        <title>Jamie Garcia | Projects</title>
        <meta name="keywords" content="Website developer, React developer, Software Engineer, Front-End Developer, web developer" />
        <meta name="description" content="Jamie's background includes a B.S. in Software Engineering along with other related Certifications." />
      </head>
      <div id="projectsBackground">
        <section id="projects" className="container">
          <h1>Projects
          </h1>
          <div>
            <h2>Websites</h2>
            <p><a href="https://cubscoutspack233.org/" target="_blank">Cub Scouts Pack 233 static site</a></p>
            <div> <p>Site is used to market a local Cub Scout pack for parents/guardians of children 5-11 or K-5th Grade.</p>
              <ul>Skills portrayed in project:
                <li>HTML</li>
                <li>SEO</li>
                <li>CSS</li>
                <li>Github Studio hosting</li>
                <li>Cloudflare SSL</li>
                <li>Instagram embed</li>
                <li>External and internal links</li>
              </ul>
            </div>
            <h2>Sandbox</h2>
            <p>Date Countdown timer using React Hooks.</p>
           
              <ul>Skills portrayed in project:
                <li>React</li>
                <li>Typescript</li>
                <li>React Hooks</li>
                <li>HTML</li>
                <li>Cloudflare SSL</li>
                <li>Instagram embed</li>
                <li>External and internal links</li>
              </ul>
          
            <iframe src="https://codesandbox.io/embed/zrvxdp?view=editor+%2B+preview&hidenavigation=1"
              className="iFrameSandbox"
              title="zen-sky-zrvxdp"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </section>

      </div></>
  );
}

export default Projects;



