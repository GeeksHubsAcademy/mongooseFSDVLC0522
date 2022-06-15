

const mongoose = require('mongoose')
const { type } = require('os')

const Schema = mongoose.Schema


const UserSchema = new Schema({
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
    //     ChatName_followed: String,
    //     }
    // ],
    // followers: [
        
    //     {
    //     id_follower: String,
    //     name : String,
    //     ChatName: String,
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

const User = mongoose.model('User', UserSchema)
module.exports = User;