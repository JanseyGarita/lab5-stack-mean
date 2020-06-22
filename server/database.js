const mongoose = require('mongoose');

const uri = 'mongodb://localhost/mean-crud-people';

mongoose.connect(uri)
    .then(db => console.log('Database connected'))
    .catch(err => console.error(err));

module.exports = mongoose;