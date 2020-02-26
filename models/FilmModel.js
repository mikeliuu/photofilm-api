const mongoose = require('mongoose');
const FilmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
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
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
},
{ 
  versionKey: false 
})

const Film = mongoose.model('Film', FilmSchema);

module.exports = Film;