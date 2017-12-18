'use strict';

module.exports = app => {
  app.beforeStart(async () => {
    app.cities = 'shenz';
    /*  = await app.curl('https://api.github.com/users/heimanba', {
      method: 'GET',
      dataType: 'json',
    }); */
  });
};
