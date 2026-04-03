import React from "react"
import { withPrefix } from "gatsby"
import data, { getText } from "../data"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          {/* Left-side resume button temporarily disabled */}
          {/* <div className="left-nav">
            <button 
              onClick={event => window.location.href="/resume"} 
              type="button" 
              className="btn">
              {getText(data.nav.resume)}
            </button>
          </div> */}
          
          <div className="center-nav">
            <div className="links-wrapper">
              <button onClick={() => (window.location.href = withPrefix("/#home"))} type="button">
                {getText(data.nav.home)}
              </button>
              <button onClick={() => (window.location.href = withPrefix("/#nvidia"))} type="button">
                {getText(data.nav.work)}
              </button>
              {/*
                Resume button hidden (kept for later):
                <button onClick={() => (window.location.href = withPrefix("/resume"))} type="button">
                  {getText(data.nav.resume)}
                </button>
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
