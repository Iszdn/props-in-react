import React from 'react'
import  {useState} from "react";

function Counter() {
const [count, setCount] = useState(0)

  return (
    <div className='counter'>
        <span onClick={(e)=>setCount(count+1)}>+</span>
        <span>{count}</span>
        <span onClick={(e)=>setCount(count-1)}>-</span>
    </div>
  )
}

export default Counter