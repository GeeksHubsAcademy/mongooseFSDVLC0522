

const UsersController = {};
// const authConfig = require('../config/auth');
const User = require('../models/User.js');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

UsersController.getUsers = async (req, res) => {

    try {

        await User.find()
            .then(data => {
                res.send(data)
            }).catch(error => {
                res.send(error)
            })

    } catch (error) {

        res.send(error)
    }
}

module.exports = UsersController;