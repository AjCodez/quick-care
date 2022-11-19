import React from 'react'

const Doctor=({
    img,
    name,
    field
}) => {
    return (
        <div class="doc">
            <img src={require("../resources/quick-care-logo.png")} />
            <h2>{name}</h2>
            <h4>{field}</h4>
        </div>
    )
}

export default Doctor