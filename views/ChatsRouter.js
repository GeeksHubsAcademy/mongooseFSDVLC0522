

const express = require('express');
const router = express.Router();

// const auth = require("../middlewares/auth");
// const isAdmin = require("../middlewares/isAdmin");

const ChatsController = require('../controllers/ChatsController');


//Endpoint-function links
router.get('/', ChatsController.getChats);



//Export
module.exports = router;