import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackEndUrl from "../utils/BackEndUrl";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { useSelector, useDispatch } from "react-redux";

const CheckOut = () => {

    const navigate = useNavigate();

    const[myData, setMydata] = useState({});
    const cartData = useSelector(state=>state.mycart.cart);

    const loadData = async()=>{
        let api = `${BackEndUrl}/user/getuser/?userid: ${localStorage.getItem('userid')}`
        const response = await axios.get(api);
        setMydata(response.data);
        console.log(response.data);
        
    }
        useEffect(()=>{
            if(localStorage.getItem('username')){
                navigate('/userlogin')
            }

            loadData()
        }, [])


        let totalAmount = 0;
        let productName= "";
        let productImg= "";

        const ans = cartData.map((key)=>{
            totalAmount += key.price * key.qnty;
            productName += key.name + " ";
            proImage += key.defaultImage;
        })
  return (
    <>
      <h1>CheckOut</h1>
     
    </>
  );
}

export default CheckOut