import React from 'react'
import './index.css'
import  {useState} from "react";


function Slider() {

    const [source, setSource] = useState("https://plus.unsplash.com/premium_photo-1699669359390-18fabebcebdb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

   const handleClick=(e)=>{
       setSource(e.target.src) 
   }
 
  return (
<div className="slidshow">
    
<div className="slide0">
    <img src={source} alt="" />
</div>


    <div className='slider'>


<div className="slide1"><img onClick={(e)=>handleClick(e)} src="https://images.unsplash.com/photo-1699306610682-986e479a5b39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
<div className="slide2"><img onClick={(e)=>handleClick(e)} src="https://images.unsplash.com/photo-1698725224267-472f2f3cf858?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
<div className="slide3"><img onClick={(e)=>handleClick(e)} src="https://images.unsplash.com/photo-1693328604570-ade5a23ce2cd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
    </div></div>
  )
}

export default Slider