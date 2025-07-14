import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/css/style.css";
import Layout from "../Layout";
import AdminDash from "./Admin/AdminDash";
import AdminLogin from "./Admin/AdminLogin";
import AddProduct from "./Admin/AddProducts";
import Userlogin from "./User/Userlogin";
import UserDash from "./User/UserDash";
import UserRegister from "./User/UserRegister";
import AddToCart from "./Redux/AddToCart";
import CheckOut from "./Redux/CheckOut";
import CustomerOrder from "./Admin/adminimages/CustomerOrder";
import { useEffect, useState } from "react";
import LOGO from '../src/images/SUGAR_Logo.avif'
import ProductDisplay from "./Pages/ProductDisplay";
import AllOrders from "./Admin/AllOrders";


function App() {

  const [showLoader, setShowLoader] = useState(true);
  const[dotCount, setDotCount] = useState(1);

  useEffect(()=>{
    const loaderTimeout = setTimeout(()=>{
      setShowLoader(false);
    }, 4000)

    const dotInterval = setInterval(()=>{
      setDotCount((prev)=> (prev % 3) + 1);
    }, 500)

        return()=>{
          clearTimeout(loaderTimeout);
          clearInterval(dotInterval)
        }
  }, []);

      if(showLoader){
        return (
          <>
            <div className="loader-container">
              <img src={LOGO} alt="logo" className="loader-logo" />

              <div className="orbit-loader-container">
                <div className="orbit-loader">
                
                  <div className="orbit-circle orbit-circle1"></div>
                  <div className="orbit-circle orbit-circle2"></div>
                  <div className="orbit-circle orbit-circle3"></div>
                </div>
                <p className="orbit-text">LADING, please wait...</p>
              </div>
            </div>
          </>
        );
      }
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public layout with nested routes */}
          <Route path="/" element={<Layout />}></Route>

          {/* Public routes */}
          <Route path="addtocart" element={<AddToCart />} />
          <Route path="productdis/:id" element={<ProductDisplay />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="userregis" element={<UserRegister />} />
          <Route path="userlogin" element={<Userlogin />} />
          <Route path="userdash" element={<UserDash />} />

          {/* Admin dashboard with nested routes */}
          <Route path="admindash" element={<AdminDash />}>
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="customerorder" element={<AllOrders />} />
          </Route>
        </Routes>
      </BrowserRouter>


      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="productdis/:id" element={<ProductDisplay/>}/>
          </Route>
        </Routes>

        <Routes>
          <Route path="addtocart" element={<AddToCart />} />
          
        </Routes>

        <Routes>
          <Route path="checkout" element={<CheckOut />} />
        </Routes>
        <Routes>
          <Route path="adminlogin" element={<AdminLogin />}></Route>
        </Routes>

        <Routes>
          <Route path="admindash" element={<AdminDash />}>
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="customer" element={<CustomerOrder/>} />
          </Route>
        </Routes>

        <Routes>
          <Route path="userregis" element={<UserRegister />} />
        </Routes>

        <Routes>
          <Route path="userdash" element={<UserDash />} />
        </Routes>

        <Routes>
          <Route path="userlogin" element={<Userlogin />} />
        </Routes>

      </BrowserRouter> */}
    </>
  );
}

export default App;
