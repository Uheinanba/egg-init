'use strict';

const Controller = require('egg').Controller;

class Home extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.response.body = `hi, egg123: ${ctx.app.citiy}`;
  }
}

module.exports = Home;
