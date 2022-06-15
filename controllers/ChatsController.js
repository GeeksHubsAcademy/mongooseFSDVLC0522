

const ChatsController = {};
// const authConfig = require('../config/auth');
const Chat = require('../models/Chat.js');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

ChatsController.getChats = async (req, res) => {

    try {

        await Chat.find()
            .then(data => {
                res.send(data)
            }).catch(error => {
                res.send(error)
            })

    } catch (error) {

        res.send(error)
    }
}

module.exports = ChatsController;