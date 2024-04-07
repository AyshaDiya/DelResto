import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    name: {type: String},
    about: {type: String, required: true},
    imageUrl: {type: String, required: true},
})

const menuModel = mongoose.model('Menus', menuSchema)
export {menuModel as Menus}