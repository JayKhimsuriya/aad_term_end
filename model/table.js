const mongoose = require("mongoose");
const {Schema} = mongoose

var tableStructure = new Schema({
    title:{type : String},
    description:{type : String}
},
{dateAndTime : true})

var blog = mongoose.model("Blog",tableStructure)

module.exports = blog;


