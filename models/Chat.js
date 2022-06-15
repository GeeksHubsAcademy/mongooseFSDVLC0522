

const mongoose = require('mongoose')
const { type } = require('os')

const Schema = mongoose.Schema


const ChatSchema = new Schema({
    arrayParticipantes: {
        type: Array,
        required: true
    },
    arrayMensajes: {
        type: Array,
        required: true
    },
    
})

const Chat = mongoose.model('Chat', ChatSchema)
module.exports = Chat