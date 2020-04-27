
import React from 'react'

function Link () {
    return (
      <div>
        <div>
          {props.link.description} ({props.link.url})
        </div>
      </div>
    )
}

export default Link