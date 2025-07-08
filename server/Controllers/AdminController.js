const { CloudinaryStorage } = require('multer-storage-cloudinary');
const ProductModel = require('../Models/ProductModel')
const adminModel = require('../Models/AdminModel')
const jwt=require('jsonwebtoken')
const cloudinary = require('../cloudnary');
const multer =require('multer');
const { response } = require('express');

// MULTER STORAGE SETUP
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'JyotiiiPhotos',
    format: async (req, file) => 'jpeg',                                //  ✅ fix: param should be `(req, file)`
    public_id: (req, file) => Date.now() + '-' + file.originalname      // ✅ fix: use `file.originalname`
  }
});

const upload = multer({ storage: storage }).array('images', 10); // Accept up to 10 files


const AdminLogin = async(req, res)=>{

   const  {adminId, password} = req.body;
    console.log(req.body);
    // res.send('okkk')

    const admin = await adminModel.findOne({adminid:adminId});
    console.log(admin);
 
    
      if(!admin){
        res.status(400).send({msg: "Invalid ID!!"})
      }
      if(admin.password != password){
        res.status(400).send({msg: "Invalid password!!"})
      }
    const token=await jwt.sign({id:admin._id},process.env.JWT,{expiresIn:'20days'})
    console.log(token)
     res.status(200).send({admin, token,msg: "Login Successfully!!"})
    

}     
  //JWT Authentication

const Auth = async (req, res) => {
  const token = req.header("x-token");
  console.log(token);
        
     if(!token) return res.json(false);


  const verify = await jwt.verify(token, process.env.JWT);
    if(!verify) return res.json(false)
  console.log(verify);

  const user = await adminModel.findById(verify.id).select("-password");
  res.send(user);
};

// Upload Product Images
const saveProduct = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res
        .status(500)
        .send({ msg: "Error uploading file", error: err.message });
    }

    // ✅ Access uploaded files from req.files
    try {
      const imageURL = req.files.map((file) => file.path);
      console.log(imageURL)
      const { name, description, price, category } = req.body;
      console.log(req.body)

      const Product = new ProductModel({
        name: name,
        description: description,
        price: price,
        category: category,
        images: imageURL,
        defaultimage: imageURL[0],
      });

      await Product.save();
      res.status(200).send("Data save Succefully");
    } catch (error) {
      res.status(500).send("error saving data" + error.message);
    }
  });
};

 


module.exports = {
  AdminLogin,
  saveProduct,
  Auth
};