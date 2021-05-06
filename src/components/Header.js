import React from 'react'
import { Link } from 'react-router-dom'
import { FilePerson, ArchiveFill, BagFill } from 'react-bootstrap-icons'

class Header extends React.Component {

  render() {
    return(
      <ul className="nav flex-column sidebar">
        <Link to='/'><img src={process.env.PUBLIC_URL + '/logo.png'} className="sidebar-brand" /></Link>
        <li className="nav-item side-item"><Link to='/store' className="nav-link"><ArchiveFill color="white" size={25}/></Link></li>
        <li className="nav-item side-item"><Link to='/games' className="nav-link"><FilePerson color="white" size={25}/></Link></li>
      </ul>
    );
  }
}

export default Header
