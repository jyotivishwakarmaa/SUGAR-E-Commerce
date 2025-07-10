import React from "react";
import Button from "react-bootstrap/Button";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { RiSettings5Line } from "react-icons/ri";
import {toast,  Toaster } from "react-hot-toast";


const AdminDash = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    toast.success('Log Out successfully!!')
        navigate("/");
  };

  return (
    <>
      <div id="mainPG">
        <div id="topvar">
          <h3>Welcome to ADMIN DASHBOARD!</h3>

          <Button id="btn2" onClick={logout}>
            <LuLogOut /> Log out!
          </Button>
        </div>
        {/* <hr style={{ color: "white" }} /> */}
        <h2 style={{ color: "white" }}>Welcome!</h2>
        <div className="sidetab">
          <ul>
            <li>
              <Link to="users" id="link">
                <FaRegUserCircle /> Users
              </Link>
            </li>

            <li>
              <Link to="addproduct" id="link">
                <FiPackage /> Add Product
              </Link>
            </li>

            <li>
              <Link to="setting" id="link">
                <RiSettings5Line /> Settings
              </Link>
            </li>

            <li>
              <Link to="logout" id="link">
                <LuLogOut /> Logout
              </Link>
            </li>
          </ul>
        </div>

        <Outlet />
      </div>
      <Toaster/>
    </>
  );
};

export default AdminDash;
