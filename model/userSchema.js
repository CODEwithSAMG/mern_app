const mongoose = require('mongoose')


//defines document structure with userForm
const userForm = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
})

// creating modals
const User = mongoose.model('User', userSchema)  //accepts two parameters ('User', userSchema) 1 is collection name and 2 is schema known as structure of user data


// exporting this js script to any other file || folder || script
module.exports = User;