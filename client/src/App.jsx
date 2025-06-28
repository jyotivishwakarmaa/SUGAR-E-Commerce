
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/css/style.css'
import Layout from '../Layout'
 import AdminDash from './Admin/AdminDash'
import AdminLogin from './Admin/AdminLogin';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          </Route>
        </Routes>

        <Routes>
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="admindash" element={<AdminDash />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
