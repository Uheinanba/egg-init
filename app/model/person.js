'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  // const { ObjectId } = mongoose.Schema.Types;
  const PersonSchema = new mongoose.Schema({
    _id: Number,
    name: String,
  });
  return mongoose.model('person', PersonSchema);
};
