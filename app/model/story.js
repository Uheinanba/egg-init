'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  // const { ObjectId } = mongoose.Schema.Types;
  const StorySchema = new mongoose.Schema({
    creator: { type: Number, ref: 'person' },
    title: String,
    fans: [{ type: Number, ref: 'person' }],
  });
  return mongoose.model('story', StorySchema);
};
