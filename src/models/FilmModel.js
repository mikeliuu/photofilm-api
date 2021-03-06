const mongoose = require('mongoose');
const FilmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: true
  },
  saved: {
    type: Number,
    required: true,
    default: 0
  },
  viewed: {
    type: Number,
    required: true,
    default: 0
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  seo: {
    slug: {
      type: Object,
      required: true,
      default: '',
      unique: true
    }
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now,
    required: true
  }
},
{ 
  versionKey: false 
});

const Film = mongoose.model('Film', FilmSchema);

module.exports = Film;