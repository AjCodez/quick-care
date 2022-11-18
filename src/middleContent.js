import React from 'react'

function MiddleContent() {
  return (
    <div>
        <div class="middleContent">
            <div class="content" >
                <h1>Health Care For Family's Health</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem, aliquid architecto ipsam ad amet ducimus perspiciatis? Pariatur tempora repellendus magnam dolor magni illum incidunt sunt, mollitia non cum repellat.</p>  
                <button class = "btn">Book Appointment</button>
            </div>
            <div class ="Picture">
                <img src={require('./resources/cont-img.jpeg')} />
            </div>

            <div>
                
            </div>
        </div>
    </div>
  )
}

export default MiddleContent