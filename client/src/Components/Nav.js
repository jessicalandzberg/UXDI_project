import React from 'react';
import '../CSS/Nav.css';


function Nav() {
    return(
      <nav className="NavComponent">
        <div className= "NavRow">
          <img src="https://res.cloudinary.com/dsz6nyzpz/image/upload/v1569339615/Food/1946835-200_mugucw.png" alt="logo" height="55" width="55" />
          <h1>Food Now</h1>
        </div>
      </nav>
    )
}

export default Nav;
