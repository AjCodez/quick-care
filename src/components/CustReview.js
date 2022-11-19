import React from 'react'

const CustReview=({
    img,
    name,
    review,
    rating
}) => {
  return (
    <div class="rev">
        <img src={require("../resources/quick-care-logo.png")} />
        <h3>{name}</h3>
        <p>{review}</p>
        <p>{rating}/5</p>
    </div>
  )
}

export default CustReview