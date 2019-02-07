// Initializes the `stagelist` service on path `/stagelist`
const createService = require('feathers-mongodb');
const hooks = require('./stagelist.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/stagelist', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('stagelist');

  mongoClient.then(db => {
    service.Model = db.collection('stagelist');
  });

  service.hooks(hooks);
};
