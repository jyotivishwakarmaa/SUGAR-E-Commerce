import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {dataIncrease, dataDecrease, itemRemove} from '../Redux/cartSlice'
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { Outlet, useNavigate } from 'react-router-dom';
import Imageslide from '../Components/imageslide';

const AddToCart = () => {

  const navigate = useNavigate()
  const cartData = useSelector(state=>state.mycart.cart);
  const dispatch = useDispatch();

   let totalAmount = 0;

   const ans = cartData.map((key)=>{
    totalAmount += key.price * key.qnty;
     return (
       <>
       
        <tr>
          <td>
            <img src={key.defaultimage} width="100px" height="100px" />
          </td>
          <td>{key.name}</td>
          <td>{key.description}</td>
          <td>{key.category}</td>
          <td>{key.price}</td>
          <td style={{fontSize:"20px"}}>
            <FaSquarePlus  onClick={()=>{dispatch(dataIncrease({id:key.id}))}} />  
            
            {key.qnty}

            <FaSquareMinus onClick={()=>{dispatch(dataDecrease({id:key.id}))}} />
          </td>
    
          <td> {key.qnty * key.price} </td>
         
         <td>
          <button onClick={()=>{dispatch(itemRemove({id:key.id}))}}>Remove</button>
         </td>
        </tr>
      </>
    );
  })

  return (
    <>

    <img src="src/images/ban4.webp" style={{width:"100%", height:"500px"}} />
      <div id="cart-head">
        <h1>CART</h1>
      </div>

      {/* <Imageslide /> */}
      <Outlet />

      <Table hover>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRODUCT NAME</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
            <th>REMOVE ITEM</th>
          </tr>
        </thead>
        <tbody>
          {ans}
          <tr>
            <th colSpan="6">
              <b style={{ marginLeft: "50px" }}>TOTAL AMOUNT: </b>
            </th>

            <th>{totalAmount}</th>
            <th></th>
          </tr>
        </tbody>
      </Table>

      <div
        style={{ textAlign: "right", marginBottom: "10px", marginTop: "20px" }}
      >
        <h3 style={{ marginRight: "40px", fontWeight: "bold" }}>
          Total : <FaRupeeSign />
          {totalAmount}
        </h3>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => {

          
         const token = localStorage.getItem('userToken')   
        
           if(token){
          navigate("/checkout")
         } else{
          navigate('/userlogin')   
         }
          
          }}
        >
          CheckOut
        </button>
      </div>
    </>
  );
}

export default AddToCart


