import React, { useState } from "react"
import "./nav.css"
const Nav = () => {
  const [sidebar, setSidebar] = useState(false)
  // const style = {tranform:"rotate(180deg)"}
  return (
    <>
      <header className={sidebar ? "header" : "full-header"} onClick={() => setSidebar(!sidebar)}>

        <div className={sidebar ? "full-logo" : "logo"} onClick={() => setSidebar(!sidebar)}>
          <h1>
            .<span>w</span>ee
          </h1>
        </div>
        <nav className={sidebar ? "nav" : "no-nav"} onClick={() => setSidebar(!sidebar)}>
          <button className='toggle'  onClick={() => setSidebar(false)}>
            {sidebar ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
          </button>
          <ul className={sidebar ? "nav-links-sidebar" : "nav-links"}>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Creative</a>
            </li>
            <li>
              <a href='/'>Education</a>
            </li>
            <li>
              <a href='/'>Work</a>
            </li>
            <li>
              <a href='/'>Blog</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Nav
