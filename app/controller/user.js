'use strict';
const createRule = {
  name: {
    type: 'email',
  },
};

exports.create = async ctx => {
  // ctx.validate(createRule);
  ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;
};
