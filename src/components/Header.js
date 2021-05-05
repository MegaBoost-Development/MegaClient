import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return(
      <header>
        <nav>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/games'>Games</Link></li>
        </nav>
      </header>
    );
  }
}

export default Header
