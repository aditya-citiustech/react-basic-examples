import React from 'react'
import Comp3 from './comp3'

export default function Comp2(props) {
  return (
    <div>
        <h4>comp2</h4>
        <Comp3 name={props.name} />
        </div>
  )
}
