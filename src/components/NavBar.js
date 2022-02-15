import React from 'react' 
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from "./Logout.js"

const NavBar = ({loggedIn}) => {

  return (
    
    <span>
      <nav className= "nav">
        
        <NavLink exact className="nav-link" to="/"  >Home  | </NavLink>  
        <NavLink exact className="nav-link" to="/products" > My Products | </NavLink>  
        <NavLink exact className="nav-link" to="/products/new"> Add Product  |</NavLink>
        {loggedIn ? <Logout /> : null}
        
      </nav>
    </span>
  )
}

const mapStateToProps = ({currentUser}) => {
    return{
      currentUser,
      loggedIn: !!currentUser
    }
  }

export default connect(mapStateToProps) (NavBar)