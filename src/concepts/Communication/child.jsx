import React from 'react'

export default function Child(props) {

    let handleClick = (e)=>{
        props.childCallback(e.target.myName.value)
        console.log(props);
        e.preventDefault();
    }
  return (
    <div>
        <h1>child</h1>
        <span>parent to child:{props.parentToChild}</span>
        <form action="" onSubmit={handleClick}>
        <input type="text" name='myName'/>
       <button>Submit</button>
        </form>
      
        </div>

  )
}
