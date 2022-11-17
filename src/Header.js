import React from 'react'

function Header() {
  return (
    <div>
      <div class="header">
      <img src={require("./resources/quick-care-logo.png")} class="navLogo" />
    <div class="header-right">
      <a href="#contact">Find a Doctor</a>
      <a href="#contact">Services</a>
      <a href="#contact">Categories</a>
      <a href="#about">About</a>
      <a class="active" href="#home">Login</a>
      <a class="active" href="#home">Sign up</a>
    </div>
  </div>

  <div class="content" >
     <h1>Health Care For Family's Health</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem, aliquid architecto ipsam ad amet ducimus perspiciatis? Pariatur tempora repellendus magnam dolor magni illum incidunt sunt, mollitia non cum repellat.</p>  
     <button class = "btn">Book Appointment</button>
  </div>
  <div class ="Picture">
    <img src={require('./resources/cont-img.jpeg')} />
  </div>  
    </div>
  )
}

export default Header