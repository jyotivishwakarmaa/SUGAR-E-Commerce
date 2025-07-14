import React, { useState } from "react";
import BackEndUrl from "../utils/BackEndUrl";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const AdminLogin = () => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(adminId, password);

    e.preventDefault();

    let api = `${BackEndUrl}/admin/adminlogin`;

    try {
      const response = await axios.post(api, {
        adminId: adminId,
        password: password,
      });

      localStorage.setItem("adminid", response.data.admin._id);
      console.log(response.data.msg);
      console.log(response.data);
      toast.success("Admin Login successfully!!");
      setTimeout(() => {
        navigate("/");
      }, 1500); // wait 1 sec
      localStorage.setItem("token", response.data.token);

      navigate("/admindash");
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  return (
    <>
      <Header />
      <Outlet />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 style={{color:"black"}}>Admin Login</h1>

          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter ID</label>
            <input
              type="text"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              placeholder="Admin ID"
              required
            />
          </div>

          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <button type="submit">Log in</button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
    </>
  );
};

export default AdminLogin;
  