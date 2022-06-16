

const express = require('express');
const router = express.Router();


// const auth = require("../middlewares/auth");
// const isAdmin = require("../middlewares/isAdmin");

const UsersController = require('../controllers/UsersController');


//Endpoint-function links

/******BASIC CRUD******/
router.get('/', UsersController.getUsers);
router.post('/register', UsersController.addUser);
router.put('/', UsersController.modifyUser);
router.delete('/', UsersController.deleteUser);



//Export
module.exports = router;