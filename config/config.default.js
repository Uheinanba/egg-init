'use strict';

module.exports = appInfo => {
  const config = {
    keys: appInfo.name + 'heimanba',

    security: {
      csrf: false,
      ctoken: false,
    },
    mongoose: {
      url: 'mongodb://127.0.0.1/egg-init',
    },

    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.htm': 'nunjucks',
      },
    },
    news: {
      serverUrl: 'https://cnodejs.org/api/v1',
    },
    // middleware: ['robot'],
    robot: {
      ua: [/Baiduspider/i],
    },
  };

  /* session = {
    key: 'EGG_SESS',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  }; */

  return config;
};
