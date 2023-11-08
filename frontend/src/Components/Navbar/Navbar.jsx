import React from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{

const [menu,setMenu]=useState("shop");

  return(
    <div className="navbar">
     <div className="nav-log">
     <img src={logo} alt="logo" />
     <p>SHOPPER</p>
     </div>
     <ul className="nav-menu">
     <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>  {menu==="shop"?<hr/>:<></>} </li>
     <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
     <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==="women"? <hr/> : <></>}</li>
     <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"? <hr/> : <></>}</li>
     </ul>
     <div className ="nav-login-cart">
    <Link  to='/login'> <button>Login</button></Link>

    <Link to='/cart'><img className="cart" src={cart_icon} alt="button_icon"/></Link> 
     <div className="nav-cart-count">0</div>
     </div>
    </div>
  )
}

export default Navbar