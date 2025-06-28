const adminModel = require('../Models/AdminModel')

const AdminLogin = async(req, res)=>{

   const  {adminId, password} = req.body;
    console.log(req.body);
    // res.send('okkk')

    const admin = await adminModel.findOne({adminId});
    console.log(admin);
   
    
    // if(!admin){
    //   res.status(400).send({msg: "Invalid ID!!"})
    // }
    // if(admin.password != password){
    //   res.status(400).send({msg: "Invalid password!!"})
    // }
    
    res.status(200).send({mag: "Login Successfully!!"})
}



module.exports = {
  AdminLogin,
};