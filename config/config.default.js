'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + 'heimanba';
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.htm': 'nunjucks',
    },
  };
  config.news = {
    pageSize: 5,
    serverUrl: 'https://cnodejs.org/api/v1',
  };
  // add your config here
  config.middleware = [];

  return config;
};
