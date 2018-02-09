'use strict';

const Controller = require('egg').Controller;

class Home extends Controller {
  async index() {
    const ctx = this.ctx;
    /* ctx.model
      .Person({
        _id: 0,
        name: 'Alice',
      })
      .save(); */
    /* const alice = await ctx.model.Person.findById(0);
    ctx.model.Story({ title: 'xx', creator: alice._id }).save(); */

    const story = await ctx.model.Story.findOne({ title: 'xx' })
      .populate('creator')
      .exec();
    console.log(story);
    ctx.body = 'demo';
  }
}

module.exports = Home;
