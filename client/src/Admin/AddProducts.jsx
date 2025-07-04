import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BackEndUrl from '../utils/BackEndUrl';
import axios from 'axios';
import { Radius } from 'lucide-react';
const AddProducts = () => {
    
    const[inp,setInp]=useState({})
    const[image,setImage]=useState([])
   
     function handleInput(e){

       let name= e.target.name
       let value=e.target.value
       
       setInp(values=>({...values,[name]:value}))
       
     }

     function handleFile(e){
       
       setImage(e.target.files)
       console.log(image);
     }
         
      async function formSubmit(e) {
        
         e.preventDefault()
        
          let api=`${BackEndUrl}/admin/productsave`;

         const formData=new FormData()

         for(const e in inp){
          formData.append(e,inp[e])
        
         }

         for(let i=0;i<image.length;i++){
          formData.append('images',image[i])
          
         }

         await axios.post(api,formData).then((res)=>{
            
            console.log(res.data)
         })
         console.log(formData)
      }    

  return (
    <>
      <div id="contain">
        <Form id='frm' >
          <h2>Add Product</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id='lavel' >Enter Product name</Form.Label>
            <Form.Control type="text" name='name' placeholder='Product name' onChange={handleInput}  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Product description</Form.Label>
            <Form.Control type="text" name='description' placeholder='Description' onChange={handleInput} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Price</Form.Label>
            <Form.Control type="number" name='price' placeholder='Price' onChange={handleInput} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Select Category</Form.Label> <br />
            <select name="category" onChange={handleInput} style={{width:"200px", padding:"8px", borderRadius:"6px"}} >
              Category
              <option value="">category</option>
              <option value="eyes">Eyes</option>
              <option value="face">Face</option>
              <option value="lips">Lips</option>
              <option value="skin">Skin</option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Choose files</Form.Label>
            <Form.Control type="file" multiple  onChange={handleFile} />
          </Form.Group>

          <Button id='btn' variant="primary" type="submit" onClick={formSubmit}>
            Add Product
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddProducts