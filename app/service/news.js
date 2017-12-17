'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list() {
    const { data: newsList } = await this.ctx.curl(
      'https://cnodejs.org/api/v1/topics',
      {
        dataType: 'json',
      },
    );
    return newsList.data.map(item => ({
      title: item.title,
    }));
  }
}

module.exports = NewsService;
