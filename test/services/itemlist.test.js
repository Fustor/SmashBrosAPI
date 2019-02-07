const assert = require('assert');
const app = require('../../src/app');

describe('\'itemlist\' service', () => {
  it('registered the service', () => {
    const service = app.service('itemlist');

    assert.ok(service, 'Registered the service');
  });
});
