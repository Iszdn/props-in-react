import React from 'react'
import "./index.css"
import  {useState} from "react";

function Navbar() {

  const [isbarOpen, setIsbarOpen] = useState(false)

    
  const handleClik=()=>{
    setIsbarOpen(!isbarOpen)
  }
  return (
    <nav>
    <div className='navbar'>
<div className="image-logo">
<h2 className='titleNavH2'>Pulse<span className='titleNav'>.</span></h2>

</div>
<div className="navigation">
    <ul className='navigation'>
        <li className='colored-link'><a href="">Home</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Restaurant</a></li>
        <li><a href="">News</a></li>
        <li><a href="">Contact</a></li>
    </ul>
</div>
<div className="reservation">
    <span className='reservation-color'>Reservations</span>
    <span className='num'>   <i class="fa-solid fa-phone"></i>   652-345 322 11</span>
   
</div>
 <i onClick={handleClik} className={` fa-solid fa-bars ${isbarOpen ?  "open" : "close" } `}></i>
 <i onClick={handleClik} class={`fa-solid fa-x ${isbarOpen ?  "open" : "close" } `}></i>
    </div>
    
    <div className={` navbar-media  ${isbarOpen ?  "open" : "close" } `} >

      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Restaurant</li>
        <li>News</li>
        <li>Contact</li>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar