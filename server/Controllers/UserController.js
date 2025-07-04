
const userModel = require('../Models/UserModel')

const userRegistration = async(req, res)=>{
    const { name, email, password, contact, address} = req.body
       //console.log(req.body);
      // res.send('kkkkk')
        
      try {
            const user = await userModel.create({
                name: name,
                email: email,
                password: password,
                contact: contact,
                address: address
            })
                res.status(200).send("user created!!")
      } catch (error) {
            console.log(error);
            
      }
}

const userLogin=async(req, res)=>{
    const { email, password } = req.body
        //console.log(req.body);

        try {
            
            const user = await userModel.findOne({email: email})
            
            if(!user){
                res.status(401).send({msg: "invalid user"})
            }
            if(user.password!= password){
                res.status(401).send({msg: "invalid password"})
            }
            res.status(200).send({msg: "Login!"})
        } catch (error) {
            console.log(error);
            
        }
        
}


module.exports={
    userLogin,
    userRegistration
}