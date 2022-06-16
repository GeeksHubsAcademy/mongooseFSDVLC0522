

//Imports
const router = require('express').Router();

const UsersRouter = require('./views/UsersRouter');
const ChatsRouter = require('./views/ChatsRouter');


router.use('/users', UsersRouter);
router.use('/chats', ChatsRouter);


//Export

module.exports = router;