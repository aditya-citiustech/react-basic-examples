import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [calculate, Setcalculate] = useState(0);
  const [resdata, Setresdata] = useState({});
  let source = axios.CancelToken.source();
  let config = { cancelToken: source.token }
  /**
   * If you’re familiar with React class lifecycle methods,
   *  you can think of useEffect Hook as 
   * componentDidMount, componentDidUpdate, and componentWillUnmount combined.
   */


  /* Without dependency([]) useEffect calls every time
  // useEffect(()=>{
  //   setTimeout(()=>{
  //       setCount(count+1)
  //     })
  // })
  */

  /* with dependency([]) calls single time
  useEffect(()=>{
    setTimeout(()=>{
        setCount(count+1)
      })
  },[])
  */

  /*Here is an example of a useEffect Hook that is dependent on a variable. 
  If the count variable updates, the effect will run again:
  
  useEffect(()=>{
    Setcalculate(count*2)
  },[count])
  
  */

  useEffect(() => {
   
    // let isApiSubscribed = true;
    const controller = new AbortController();
    const signal = controller.signal;
   
    axios.get('https://jsonplaceholder.typicode.com/todos/1', { signal: signal}).then((res) => {
// if(isApiSubscribed){
      Setresdata(res.data);
      
      // }
    }).catch((err)=>console.log('err step3',err,resdata))
    return () => {
      controller.abort();
      console.log('step2')
      // if(source){
      //   source.cancel();

      // }
      // isApiSubscribed = false
    }

  },[])


  return (
    <div>
      {/* <h1>useeffect</h1> 
       <span>I have rendered {count} times</span>
       <button onClick={()=>setCount(count+1)}>+</button>
       <span>Calculation:{calculate}</span> */}

      <h1>Cancel token</h1>
      <span>{resdata.title}</span>
    </div>
  )
}
