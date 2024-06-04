import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    name: String,
    password: String
})

module.exports = mongoose.model('User', userSchema);