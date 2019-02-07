const fighters = require('./fighters/fighters.service.js');
const stagelist = require('./stagelist/stagelist.service.js');
const itemlist = require('./itemlist/itemlist.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(fighters);
  app.configure(stagelist);
  app.configure(itemlist);
};
