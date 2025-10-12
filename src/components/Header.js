import { useEffect, useState } from "react";
import {LOGO_URL } from "../utils/constants";
const Header=()=>{
  // let login_btn="Login"  using local variable doesn't update the variable on UI;
  const [buttonNameReact,setbuttonNameReact]=useState("login");
  // console.log("header rendered");
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="btn-login" onClick={()=>{
            if(buttonNameReact=="login"){
              setbuttonNameReact("logout");
            }else{
              setbuttonNameReact("login");
            }
            // login_btn="logout";
            // console.log("logout");
          }}>{buttonNameReact}</button>
        </ul>

      </div>
    </div>
  );
};

export default Header;