import React from 'react'

export default function B(props) {

    let handleChange = (e) =>{
  props.bToACall(e.target.value)

    }

  return (
    <div>
        <h1>B</h1>

        <input type="text" onChange={handleChange} />
        </div>
  )
}
