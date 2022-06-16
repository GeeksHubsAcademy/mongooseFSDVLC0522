

const mongoose = require('mongoose')
const { type } = require('os')

const Schema = mongoose.Schema


const ChatSchema = new Schema({

    Participantes: {
        participanteUno: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        participanteDos: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    arrayMensajes: {
        type: Array,
        required: true
    }
    
})

const Chat = mongoose.model('Chat', ChatSchema)
module.exports = Chat