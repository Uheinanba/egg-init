'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + 'heimanba';

  config.security = {
    csrf: false,
    ctoken: false,
  };

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
  config.middleware = ['robot'];
  config.robot = {
    ua: [/Baiduspider/i],
  };

  /* config.session = {
    key: 'EGG_SESS',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  }; */

  return config;
};
