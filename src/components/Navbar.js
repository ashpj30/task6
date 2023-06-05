import React from 'react'
import './Navbar.css'
import nav1 from './nav1.png'
import nav2 from './nav2.png'
import nav3 from './nav3.png'
import nav4 from './nav4.png'
import nav5 from './nav5.png'
import nav6 from './nav6.png'
export const Navbar = () => {
  return (
    <div>
        <div >
         <img className='navbar' src={nav1}></img>
         <img className='navbar1' src={nav2}></img>
       <p className='navbar2'>  <img  src={nav3}></img>Transaction</p>
       <p className='navbar3'><img src={nav4}></img>Invoice</p>
       <p className='navbar4'><img src={nav5}></img>Activity</p>
       <img className='navbar5' src={nav6}></img>  
</div>
      
    </div>
  )
}
