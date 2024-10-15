import React from 'react';
import './Navbar.css';
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdMoreTime } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBrain } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

const Navbar = () => {
  return (
    <>

      {/* Responsive Div Starts */}
      <div className="resDiv">
        <div className='icon'><FaBrain /></div>
        <p>Erica</p>
        <div className="search">
          <p><GoPlus />New Chat</p>
        </div>
      </div>
      {/* Responsive Div Ends */}

      <div className="navbar">
        <div className="left">
          <span className='icon'><FaBrain /> </span>
          <p>Erica</p>
        </div>
        <div className="search">
          <p><GoPlus />New Chat</p>
        </div>
        <div className="right">
          <p><IoMdHelpCircleOutline /> Help</p>
          <p><MdMoreTime /> Activity</p>
          <p><IoSettingsOutline /> Help</p>
        </div>
      </div>
    </>
  )
}

export default Navbar