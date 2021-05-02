const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nbaPlayerSchema = new Schema({
    firstName: String,
    lastName: String,
    pos: String,
    img: String,
    jersey: Number

})

const NbaPlayer = mongoose.model("nbaPlayer", nbaPlayerSchema)
module.exports = NbaPlayer