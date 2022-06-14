

//Imports
const router = require('express').Router();

const UsersRouter = require('./views/UsersRouter');


router.use('/users', UsersRouter);


//Export

module.exports = router;