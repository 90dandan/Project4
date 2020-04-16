const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
});

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
  },
  //reviews: [reviewSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model('Vhs', vhsSchema);
