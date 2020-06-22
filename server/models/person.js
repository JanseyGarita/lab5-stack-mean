const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
    name:{ type: String, required: true},
    province: {type: String, required: true},
    dateOfBirth: {type: String, required:true},
    genre: {type: String, required: true}
});

module.exports = mongoose.model('Person', personSchema);