import React from 'react';
import  '../css/Stylenavbar.css';
import Logo from '../assets/Logo.png';

export default function Navbar() {
    return (
        <div className="navbar">
        <div className="nav" id="logo">
             <li>
               <img src={Logo} width='30' height='40'/>
               </li>
               <li>
               <h2> Keep</h2>
               </li>

        </div>
            <div className="nav">

               <input type="search" className='formsearch'  placeholder="Search Here" autoComplete='off'></input>
            </div>
             <div className="nav">
             {/* <li>1</li>
             <li>2</li>
             <li>3</li>
             <li>4</li> */}
                
             </div>
         
        </div>
    )
}
