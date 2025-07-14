import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import BackEndUrl from '../utils/BackEndUrl';
import axios from 'axios';
import toast, {Toaster } from 'react-hot-toast';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Userlogin = () => {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegistration = async()=>{

        navigate('/userregis');
    }
    const handleSubmit = async (e) => {
      
       e.preventDefault();
      console.log(email, password);


      let api = `${BackEndUrl}/user/userlogin`;

      try {
        const response = await axios.post(api, {
          email: email,
          password: password,
        });

        localStorage.setItem("email", response.data.email);
        console.log(response.data.msg);

        console.log(response.data);

        localStorage.setItem("userToken", response.data.token);
        localStorage.setItem("userid", response.data.data._id);

        toast.success("Login successfully!!");
        setTimeout(() => {
          navigate("/userdash");
        }, 1500); // wait 1 sec

       
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };

  return (
    <>
      <Header />
      <Outlet />
      <div className="login-containerr">
        <div className="login-form">
          <h1 style={{color:"black"}}>User Login</h1>

          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <p
              style={{
                color: "black",
                textAlign: "left",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              Forgot Password
            </p>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Log in
          </button>
          <p style={{ color: "black", textAlign: "left", fontSize: "20px" }}>
            Don't have an account?
          </p>
          <button onClick={handleRegistration}>Register Now</button>
        </div>

        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <Footer />
    </>
  );
}

export default Userlogin