'use strict';

// options === app.config.robot
module.exports = options => {
  return async (ctx, next) => {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(ua => ua.test(source));
    if (match) {
      ctx.status = 403;
      ctx.message = 'go away, robot';
    } else {
      await next();
    }
  };
};
