import React, { useState } from 'react'
import BackEndUrl from '../utils/BackEndUrl'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const[adminId, setAdminId] = useState("");
    const[password, setPassword] = useState("");
 
    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        console.log(adminId, password);
        
        e.preventDefault();

        let api = `${BackEndUrl}/admin/adminlogin`;

        try {
            
        const response = await axios.post(api, {adminId:adminId, password:password});
        console.log(response.data.msg);

        navigate('/admindash')

        } catch (error) {

            console.log(error.response.data.msg);
            
        }
    }
      
  return (
    
    <>
    <h1>Admin Login</h1>

         Enter Id : <input type='text' value={adminId} onChange={(e)=>{setAdminId(e.target.value)}}/>
         Enter Password : <input type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

            <button onClick={handleSubmit}>Log in</button>
    </>
  )
}

export default AdminLogin