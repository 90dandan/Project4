const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vhsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
  },
  releaseYear: {
    type: Number,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Vhs', vhsSchema);
