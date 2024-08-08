import "./NavBarStyles.css";

import React from 'react'
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div calssName="header">
    <Link to="/">
       <h1>Portfolio</h1>
    </Link>
      
    </div>
  )
}

export default NavBar;
