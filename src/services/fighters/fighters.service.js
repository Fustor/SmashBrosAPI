// Initializes the `Fighters` service on path `/fighters`
const createService = require('feathers-mongodb');
const hooks = require('./fighters.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/fighters', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('fighters');

  mongoClient.then(db => {
    service.Model = db.collection('fighters');
  });

  service.hooks(hooks);
};
