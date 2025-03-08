
import './header.css'
import {NavLink} from "react-router-dom"

export default function Header() {
  return (

    <div className="header-container">
        <nav className="header-content">
          
              <NavLink to="" end>Bio</NavLink>
                <NavLink to="education" end>Education</NavLink>
                <NavLink to="work-experience" end>Experience</NavLink>
                <NavLink to="projects" end>Projects</NavLink>
         
        </nav>
    </div>
  )} 