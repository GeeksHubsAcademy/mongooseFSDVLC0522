

const mongoose = require('mongoose')
const { type } = require('os')

const Schema = mongoose.Schema


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    tech: {
        type: Array,
        required: true
    },
    hobbies: {
        type: Array,
        required: true,
    },
    matches: {
        type: Array,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
    // followed: [
        
    //     {
        
    //     id_followed: String,
    //     name_followed : String,
    //     userName_followed: String,
    //     }
    // ],
    // followers: [
        
    //     {
    //     id_follower: String,
    //     name : String,
    //     userName: String,
    //     }
    // ],

    // isAdmin: {
    //     type: Boolean,
    //     default: false
    // },
    // created: {
    //     type: Date,
    //     default: new Date()
    // }
})

const User = mongoose.model('User', userSchema)
module.exports = User