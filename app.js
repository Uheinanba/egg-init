'use strict';

module.exports = app => {
  app.beforeStart(() => {
    app.citiy = 'shenz';
  });
};
