import { LOGO_URL } from "../utils/constants";
import {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
  const [btnName,setBtnName]=useState("Login");

  const onlineStatus=useOnlineStatus();

  const {loggedInUser}=useContext(UserContext);

  console.log({loggedInUser});

  // Selector is a hook inside react-> Subscribibg to store
  const cartItems=useSelector((store)=>store.cart.items);
  console.log({cartItems});

  return(
    <div className="flex justify-between shadow-lg bg-pink-100">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL}/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-5">Online Status: {onlineStatus?"🟢":"🔴"}</li>
          <li className="px-5"><Link to="/">Home</Link></li>
          <li className="px-5"><Link to="/about">About</Link></li>
          <li className="px-5"><Link to="/contact">Contact Us</Link></li>
          <li className="px-5"><Link to="/grocery">Grocery</Link></li>
          <li className="px-5 font-bold text-xl"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
          <button className="login" onClick={()=>{
            btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
          }}>{btnName}</button>
          <li className="px-5">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;