const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
  category: {
    type: String,
    required: true,
    enum: ['Fiction', 'Non-Fiction', 'Edited', 'Reference', 'Unknown'],
    default: 'Unknown',
  },
});

GenreSchema.virtual('url').get(function () {
  return '/catalog/genre/' + this._id;
});

// Export model
module.exports = mongoose.model('Genre', GenreSchema);
