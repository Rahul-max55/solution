import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
      <header>
          <nav className='navbar' >
            <ul className='list' >
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>
          </nav>
   </header>
  )
}

export default Navbar