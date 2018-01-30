'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    const { serverUrl } = this.config.news;

    const { data: newsList } = await this.ctx.curl(`${serverUrl}/topics`, {
      data: {
        page: 2,
      },
      dataType: 'json',
    });

    return newsList.data;
  }
}

module.exports = NewsService;
