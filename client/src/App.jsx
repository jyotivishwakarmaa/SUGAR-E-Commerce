
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/css/style.css'
import Layout from '../Layout'
import AdminDash from './Admin/AdminDash'
import AdminLogin from './Admin/AdminLogin';
import AddProduct from './Admin/AddProducts';
import Userlogin from './User/Userlogin';
import UserDash from './User/UserDash';
import UserRegister from './User/UserRegister';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>

        <Routes>
          <Route path="adminlogin" element={<AdminLogin />}></Route>
        </Routes>

        <Routes>
          <Route path="admindash" element={<AdminDash />}>
            <Route path="addproduct" element={<AddProduct />} />
          </Route>
        </Routes>

        <Routes>
        <Route path="userregis" element={<UserRegister />}/>
         
        </Routes>

        <Routes>
        <Route path="userdash" element={<UserDash />}/>
        </Routes>


        <Routes>
           <Route path="userlogin" element={<Userlogin />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
