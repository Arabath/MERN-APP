//Archivo que permite conectar a la base de datos.
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/MERN'

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;