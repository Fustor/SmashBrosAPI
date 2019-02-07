// Initializes the `itemlist` service on path `/itemlist`
const createService = require('feathers-mongodb');
const hooks = require('./itemlist.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/itemlist', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('itemlist');

  mongoClient.then(db => {
    service.Model = db.collection('itemlist');
  });

  service.hooks(hooks);
};
