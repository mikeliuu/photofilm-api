const mongoose = require('mongoose');
const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
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

const Brand = mongoose.model('Brand', BrandSchema);

module.exports = Brand;