import './navbar.scss';
import { Link, NavLink } from "react-router-dom"

export function Navbar() {
  return (
    <>
      <div className='nav-container'>
          <NavLink to=""><div className='nav-title'>SITE TITLE</div></NavLink>
        <div>
          <ul>
            <li><NavLink to="">Info</NavLink></li>
            <li><NavLink to="one">One</NavLink></li>
            <li><NavLink to="two">Two</NavLink></li>

          </ul>
        </div>
      </div>
    </>
  )
}