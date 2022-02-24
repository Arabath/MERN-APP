const mongoose = require('mongoose'); //modelado de datos
const { Schema } = mongoose; //define esquema de los datos

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Task', TaskSchema);