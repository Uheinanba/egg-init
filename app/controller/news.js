'use strict';

const Controller = require('egg').Controller;

class NewController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    console.log(newsList);
    await this.ctx.render('news/list.html', { list: newsList });
  }
}

module.exports = NewController;
