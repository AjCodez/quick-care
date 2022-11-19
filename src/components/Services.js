import React from 'react'

const Services=({
    service,
    desc
}) => {
    return (
      <div class="serv">
        <div class="card-body">
            <img src={require("../resources/quick-care-logo.png")} class="card-img-top" alt="" />
            <h5 class="card-title">{service}</h5>
            <p class="card-text">{desc}</p>
        </div>            
        
      </div>
    )

}

export default Services