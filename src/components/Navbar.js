import React from 'react';
import '../App.css'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
   

  render() {

    const navStyle = {
      color: 'white'
    }
    return (
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
        <Link style={navStyle} to='/'>
          <li>Login</li>
        </Link>
        <Link style={navStyle} to='/profile'>  
          <li>Profile</li>
        </Link>
        <Link style={navStyle} to='/music_page'> 
          <li>Write Music!</li>
        </Link>   
        </ul>
      </nav>
    )
  }
}

export default Navbar