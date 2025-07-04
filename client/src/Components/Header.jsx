import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { GoHeartFill } from "react-icons/go";

const Header = () => {

  const nav=useNavigate()
  function handleUser(){
     nav('/userLogin')

  }

  return (
    <>
      <div id="top">
        <div id="header">
          <img src="src/images/SUGAR_Logo.avif" />

          <div id="icon1">
            <FaSearch />
            <FaHouseUser onClick={handleUser}/>
            <GoHeartFill />
            <BsFillBagHeartFill />
          </div>
        </div>
        <div id="menu">
          <ul>
            <li>
              <Link to="/Lips"></Link>LIPS
            </li>
            <li>
              <Link to="/eyes"></Link>EYES
            </li>
            <li>
              <Link to="/face"></Link>FACE
            </li>
            <li>
              <Link to="/skin"></Link>SKIN
            </li>
            <li>
              <Link to="/new"></Link>NEW
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header