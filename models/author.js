const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchrema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { tyep: Date },
  date_of_death: { type: Date },
});

// Virtual for author's full name

AuthorSchrema.virtual('name').get(() => {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case

  const fullname = '';
  if (this.first_name && this.family_name) {
    fullname = this.family_name + ', ' + this.first_name;
  }
  if (!this.first_name || !this.family_name) {
    fullname = '';
  }
  return fullname;
});

// Virtual for author's lifespan
AuthorSchrema.virtual('lifespan').get(() => {
  const lifetime_string = '';
  if (this.date_of_birth) {
    lifetime_string = this.date_of_birth.getYear().toString();
  }
  lifetime_string += ' - ';
  if (this.date_of_death) {
    lifetime_string += this.date_of_death.getYear();
  }
  return lifetime_string;
});

// Virtual for author's URL

AuthorSchrema.virtual('url').get(() => {
  return '/catalog/author' + this._id;
});

// Export model
module.exports = mongoose.model('Author', AuthorSchema);
