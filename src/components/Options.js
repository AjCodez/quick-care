import React from 'react'

const Options = ({
  name,
  img
}) => {
  return (
    <div class="optionComp">
      <div class="card" >
        <img src={require("../resources/cont-img.jpeg")} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )

}

export default Options