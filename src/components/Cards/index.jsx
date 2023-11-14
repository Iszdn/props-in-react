import React from 'react'
import './index.css';

function Card({img,title,raiting})  {
  return (
    <div className='card'>
<div className='image'>
    <img src={img} alt="" />
</div>
<h2>{title}</h2>
<span>{raiting}</span>
<ul>
    {/* <li><i class="fa-solid fa-star"></i></li>
    <li><i class="fa-solid fa-star"></i></li>
    <li><i class="fa-solid fa-star"></i></li>
    <li><i class="fa-solid fa-star"></i></li>
    <li><i class="fa-solid fa-star"></i></li> */}
    
</ul>
    </div>
  )
}

export default Card