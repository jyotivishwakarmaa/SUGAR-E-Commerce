import React, { useState } from 'react'
import BackEndUrl from '../utils/BackEndUrl';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast, Toaster } from "react-hot-toast";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const UserRegister = () => {
    const nav = useNavigate()
    const[inp, setInp] = useState("")

    const handleInput = async(e)=>{

        let name = e.target.name;
        let value = e.target.value;

        setInp(values=>({...values, [name]:value}));
        console.log(inp);
        
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        let api = `${BackEndUrl}/user/userregis`

        try {
            
            const response = await axios.post(api, inp);
            console.log(response);

             toast.success("User Registered successfully!!");
                    setTimeout(() => {
                      navigate("/");
                    }, 1500); // wait 1 sec
            
                nav('/userlogin')

        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <>
      <Header />
      <Outlet />
      <div className="login-containerr">
        <div className="login-form">
          <h1 style={{color:"black"}}>Register Yourself</h1>

          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter Contact</label>
            <input
              type="number"
              placeholder="Contact"
              name="contact"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter Address</label>
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter City</label>
            <input
              type="text"
              placeholder="city"
              name="city"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter Pincode</label>
            <input
              type="number"
              placeholder="pincode"
              name="pincode"
              onChange={handleInput}
            />
          </div>
          <button onClick={handleSubmit}>Register</button>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>

      <Footer />
    </>
  );
}

export default UserRegister