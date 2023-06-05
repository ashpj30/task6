import React, { useState } from 'react';
import  './Home.css';
import chartt from './chartt.png';
import { Navbar } from './Navbar';
import { Left } from './Left';
import { data } from './data';
import { data1 } from './data1';
import mid from './mid.png'
export const Home = () => {

 const [contacts,setContants] = useState(data1);

  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <Left/>
        </div>
        <div>
        <div className='home'>
          my balance
        </div>
        <div className='home1'>
        Income
        </div>
        <div className='home2'>
        Savings
        </div>
        <div className='home3'>
        Expense
        </div>
        <div className='center'>

<img style={{width:"670px" , height:"300px"}} src={chartt}></img>
        </div>
        <div className='mid'>
          <img style={{width:"580px",height:"190px"}} src={mid}></img>
        </div>
        </div>

        <div className='table'>
          <h1>My Savings</h1>
          <p>View all</p>
          <div>
            <table>
             {data.map(dataItem => {
              //  const percentage = (dataItem.TaskCompleted / dataItem.TotalTask) * 100;
                return (
                  <tr>
                  <td><b>{dataItem.title}</b> 
                  <progress style={{accentColor:"#00B3FF"}} value={dataItem.TaskCompleted} max={dataItem.TotalTask}></progress>
                  </td>
                  <td><b>{dataItem.price}</b></td>
                 </tr>
                )})} 
              </table>
          </div>
     </div>
     <div className='table1'>
      <h3>History Transactions</h3>
      <p>View all</p>
      <div>
        <table>
          {contacts.map((contact)=>
          <tr>
            <td><img style={{width:"25px",height:"25px"}} src={contact.img}></img>
            <b>{contact.title}</b><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{contact.date}</td>
            <td style={{color:"green"}}>{contact.price}</td>
          </tr>
          )}
        </table>
      </div>
     </div>
    </div>
  )
}
