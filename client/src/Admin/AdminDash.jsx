import React from "react";
import Button from "react-bootstrap/Button";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { BsFillEmojiSmileFill } from "react-icons/bs";


const AdminDash = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div id="mainPG">
        <div id="topvar">
          <h3>Dashboard!</h3>
          <h2>
            Welcome! Admin <BsFillEmojiSmileFill />
            {localStorage.getItem("adminuser")}
          </h2>
          <Button id="btn2" onClick={logout}>
            Log out!
          </Button>
        </div>
        <hr style={{ color: "white" }} />

        <div className="sidetab">
          
            <ul>
              <li>
                <Link to="users" id="link">
                  Users
                </Link>
              </li>

              <li>
                <Link to="addproduct" id="link">
                  Add Product
                </Link>
              </li>

              <li>
                <Link to="setting" id="link">
                  Settings
                </Link>
              </li>

              <li>
                <Link to="logout" id="link">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        
        <Outlet />
      </div>
    </>
  );
};

export default AdminDash;
