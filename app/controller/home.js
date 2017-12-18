'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    console.log('env', app.config.env);
    ctx.body = 'hi, eggjs';
  }
}

module.exports = HomeController;
