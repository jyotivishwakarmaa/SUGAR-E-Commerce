import React, { useEffect } from 'react'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackEndUrl from '../utils/BackEndUrl';

const Header = () => {

  const nav=useNavigate()
  function handleUser(){
     nav('/userLogin')

  }
  const handleCart=()=>{
    nav('addtocart')
  }

  const auth = async()=>{
    let token= localStorage.getItem("token")
    console.log(token)

    if(token){
      let api = `${BackEndUrl}/admin/jwt`

      try {

        const response = await axios.post(api, null, {headers:{"x-token":token}})
        console.log(response.data);
        localStorage.setItem("name", response.data.name);
        nav('/admindash')
        
      } catch (error) {
        console.log(error);
        
      }
    }
  }
    useEffect(()=>{
      auth()
    },[])


  return (
    <>
      <div id="top">
        <div
          id="topmenu"
          style={{ backgroundColor: "black", alignItems: "center" }}
        >
          <p>USE CODE: TRAT10 AND ENJOY 10% OFF ON ALL ORDERS</p>
        </div>
        <div className="mnu">
          <div id="header">
            <img src="src/images/SUGAR_Logo.avif" />

            <div id="icon1">
            <i id='iconC'>  <FaHome  /></i>
              <i id='iconA'> <FaSearch /> </i>
              <i id='iconB'>  <FaUserCircle onClick={handleUser} /></i>
              <i id='iconD'>  <BsFillBagHeartFill onClick={handleCart} /></i>
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
              <li>
                <Link to="/offer"></Link>OFFER
              </li>
              <li>
                <Link to="/gift"></Link>GIFTING
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header