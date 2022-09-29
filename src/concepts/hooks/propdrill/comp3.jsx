import React from 'react'
import Comp4 from './comp4'

export default function Comp3(props) {
  return (
    <div>
        <h4>comp3</h4>
        <Comp4 name={props.name}/>
        </div>
  )
}
