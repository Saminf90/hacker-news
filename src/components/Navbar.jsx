import React, { useState } from "react";



export default function Navbar(props) {
  const [search, setSearch] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateQuery(event.target.elements[0].value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    props.updateQuery(search)
  }

  const handleChange = (event) => { 
    setSearch(event.target.value)
  }
  
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img
              src="https://news.ycombinator.com/y18.gif"
              width="30"
              height="30"
            />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Documentation</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field has-addons">
                <div className="control">
                  <form onSubmit={handleSubmit}>
                    <input
                    value={search} 
                    onChange={handleChange} 
                    className="input" type="text" id="search" placeholder="Search for a topic" />
                  </form>
                </div>
                <div className="control">
                  <a onClick={handleClick} className="button is-info">Search</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
