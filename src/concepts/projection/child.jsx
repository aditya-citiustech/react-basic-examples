import React from 'react'

export default function Child(props) {
  return (
    <div>
      <h3>child</h3>
      <span>{props.children}</span>
      </div>
  )
}
