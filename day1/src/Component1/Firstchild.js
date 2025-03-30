import React from 'react'

export default function firstchild(props) {
  return (
    <div style={props.style}>
      <h2>{props.name+props.age}</h2>
    </div>
  )
}
