import React from 'react'
import { useRef } from 'react'

export default function UnControlled() {

    const inputval = useRef({
      firstName:'',
      lastName:''
    })

    let handleClick = ()=>{
      // let myArray = ['firstName','lastName']
        console.log(inputval.current.firstName.value,inputval.current.lastName.value)
        // myArray.map((val)=>{
        //   console.log(inputval.current[val].value)
        // })
    }

  return (
    <div>
        <h1>uncontrolled</h1>
        <label htmlFor="firstName"></label>
        <input type="text" placeholder='firstName' name='firstName'
         ref={el=> inputval.current['firstName'] =el} />
        <label htmlFor="lastName"></label>
        <input type="text" placeholder='lastName' name='lastName' 
         ref={el=> inputval.current['lastName'] =el}/>
        <button onClick={handleClick}>submit</button>
        </div>
  )
}
