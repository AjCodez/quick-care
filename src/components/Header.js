import React from 'react'

function Header() {
  return (
    <div>
      <div>
        <div class="header">
          <img src={require("../resources/quick-care-logo.png")} class="navLogo" />
          <div class="header-right">
            <a href="#contact">Find a Doctor</a>
            <a href="#contact">Services</a>
            <a href="#contact">Categories</a>
            <a href="#about">About</a>
            <a class="active" href="#home">Login</a>
            <a class="active" href="#home">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header