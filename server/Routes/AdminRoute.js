
const express = require('express')
const route = express.Router();
const adminController = require('../Controllers/AdminController')


route.post('/adminlogin', adminController.AdminLogin);
route.post('/productsave', adminController.saveProduct);



module.exports=route;