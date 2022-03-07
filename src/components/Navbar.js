import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  let bgColor="#e3f2fd"
  if (props.mode==="light") {
    bgColor="#e3f2fd"
  }
  else{
    bgColor="#212529"
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} sticky-top`} style={{backgroundColor: `${bgColor}`}}>
      <div className="container-fluid">
        <div className="navbar-brand">Apna News</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>

  )
}
export default Navbar
