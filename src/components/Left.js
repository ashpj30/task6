import React from 'react'
import wifi from './wifi.png'
import payment from './payment.png'
import './Left.css'
export const Left = () => {
 
  return (
    <div>
      <div className='left'><p> My Card</p></div>
      <div className='left1'>
        <p className='card'>Sakuku</p>
        <img className='wifi' src={wifi}></img>
        <p className='card1'>Omi Gusty</p>
        <p className='card2'>06/24</p>
        <p className='card3'>1234 1234 1234 1234</p>
        <img className='card4' src={payment}></img>
      </div>
      <div className='left2'>
      </div>
      <div className='footer'>
        <p>Card Number</p>
<input></input>
<button className='button1'> Send money</button>
<button className='button2'>save as Draft</button>
      </div>
    </div>
  )
}
