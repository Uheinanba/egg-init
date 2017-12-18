'use strict';

module.exports = appInfo => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1513479416843_8481',
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.html': 'nunjucks',
      },
    },
    middleware: ['gzip'],
    gzip: {
      threshold: 1024, // 小于 1k 的响应体不压缩
    },
    security: {
      csrf: false,
    },
  };
};
