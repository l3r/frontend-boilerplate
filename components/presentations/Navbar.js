import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Navbar = ({displayNavbar, toggleNavbar}) => (
  <nav>
    { displayNavbar ?
      <div>
        <h1>Frontend-Boilerplate</h1>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>
      </div>
      : <div>
      <h1>FB</h1>
      <button onClick={toggleNavbar}>
        <i className="fa fa-bars"></i>
      </button>
    </div> }
  </nav>
)

Navbar.propTypes = {
  displayNavbar: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired
}

export default Navbar