import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return(
      <header>

      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <Link to='/' className="navbar-brand">Home</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon navbar-dark"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-left" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to='/store' className="nav-link">Store</Link></li>
            <li className="nav-item"><Link to='/games' className="nav-link">Games</Link></li>
          </ul>
        </div>
      </nav>
      </header>
    );
  }
}

export default Header
