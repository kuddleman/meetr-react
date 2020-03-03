import React from 'react';
import '../App.css'
import { Link, withRouter } from 'react-router-dom'
import LogoPic2 from '../assets/images/logo2.gif'

class Navbar extends React.Component {
   

  render() {

    const navStyle = {
      color: 'white',
      textDecoration: 'none',
    
    }
    return (
      <nav>
        <h3><img src={LogoPic2} className="logo-pic" alt="logo pic" /></h3>
        <ul className="nav-links">
        <Link style={navStyle} to='/'>
          <li className="nav-text" >LOGIN</li>
        </Link>
        <Link style={navStyle} to='/profile'>  
          <li className="nav-text" >PROFILE</li>
        </Link>
        <Link style={navStyle} to='/music_page'> 
          <li className="nav-text">WRITE MUSIC</li>
        </Link>   
        </ul>
      </nav>
    )
  }
}

export default Navbar